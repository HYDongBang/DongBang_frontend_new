import React, {useState, useEffect} from "react";
import useInput from "../../../Hooks/useInput";
import FormPresenter from "./FormPresenter";

import {GET_QUESTIONS, DELETE_QUESTION, DELETE_CHOICE, CREATE_QUESTION, CREATE_CHOICE} from "./FormQueries"
import { useMutation, useQuery } from "react-apollo-hooks";

import { toast } from "react-toastify";

export default () => {
    const [select, setSelect] = useState("");
    const { loading, data } = useQuery(GET_QUESTIONS);

    const [questions,setQuestions] = useState([]);
    const myType = useInput("short");
    const myTitle = useInput("");
    const myChoice = useInput("");
    const [plusOption,setPlusOption] = useState();
    const [check,setCheck] = useState(true);

    const [deleteQuestionMutation] = useMutation(DELETE_QUESTION);
    const [deleteChoiceMutation] = useMutation(DELETE_CHOICE);
    const [createQuestionMutation] = useMutation(CREATE_QUESTION);
    const [createChoiceMutation] = useMutation(CREATE_CHOICE);


    const onDeleteQuestion = async (e) => {
        try {
        const {
            data: { deleteQuestion: index },
        } = await deleteQuestionMutation({
            variables: {
            id: e,
            },
        });
        if (!index || index === "") {
            toast.error("전송 오류");
        } else {
            toast("삭제 완료");
            setQuestions(questions.filter(element => element.id !== e));
        }
        } catch (err) {
        console.log(err.message);
        toast.error("신청서를 보낼 수 없습니다. 다시 시도해주세요.");
        }
        
      };

      const onDeleteChoice = async (e, i) => {
        try {
        const {
            data: { deleteChoice: index },
        } = await deleteChoiceMutation({
            variables: {
            id: e,
            },
        });
        if (!index || index === "") {
            toast.error("전송 오류");
        } else {
            toast("삭제 완료");
            let q = questions.filter(element => element.id === i)[0].choices.filter(element => element.id !== e);   
            questions.filter(element => element.id === i)[0].choices = q;
            setCheck(!check);
        }
        } catch (err) {
        console.log(err.message);
        toast.error("신청서를 보낼 수 없습니다. 다시 시도해주세요.");
        }
      };

      const onCreateQuestion = async (e) => {
        e.preventDefault();
        const q = data.readLoggedInUser.clubMaster.questions;
        const lastIndex = q[q.length-1].index;
        if(myTitle !==""){
            try {
                const {
                    data: { createQuestion: id },
                } = await createQuestionMutation({
                    variables: {
                    index: lastIndex + 1,
                    title: myTitle.value,
                    type: myType.value,
                    },
                });
                if (!id || id === "") {
                    toast.error("전송 오류");
                } else {
                    toast("항목이 추가되었습니다.");
                    setQuestions(prev =>
                        prev.concat({
                            id: id,
                            index: lastIndex + 1,
                            title: myTitle.value,
                            type: myType.value,
                            choices :[],
                        })
                    );
                }
                } catch (err) {
                console.log(err.message);
                toast.error("가입신청 항목을 추가할 수 없습니다. 다시 시도해주세요.");
                }
        }
      };

      const onCreateChoice = async (e) => {
        let myIndex;
        const q = questions.filter(element => element.id === e)[0].choices;    
        if(q.length ==0){
            myIndex = 0;
        }else{
            myIndex = q[q.length-1].index +1
        }
        if(myChoice !==""){
            try {
                const {
                    data: { createChoice: id },
                } = await createChoiceMutation({
                    variables: {
                    index: myIndex,
                    subject: myChoice.value,
                    questionId: e,
                    },
                });
                if (!id || id === "") {
                    toast.error("전송 오류");
                } else {
                    toast("옵션이 추가되었습니다.");  
                    myChoice.setValue("");
                    questions.filter(element => element.id === e)[0].choices= questions.filter(element => element.id === e)[0].choices.concat({
                        id: 1,
                        index: myIndex,
                        subject: myChoice.value,
                        questionId: e,
                    })
                    setPlusOption();
                   
                }
                } catch (err) {
                console.log(err.message);
                toast.error("옵션을 추가할 수 없습니다. 다시 시도해주세요.");
                }
        }
      };

    useEffect(()=>{
        if(!loading && data.readLoggedInUser!==undefined){
            setQuestions(data.readLoggedInUser.clubMaster.questions);     
        }
    }, [data]);

    return (
        <FormPresenter  
            data= {data}
            select={select}
            setSelect={setSelect}
            myloading= {loading}
            questions= {questions}
            setQuestions= {setQuestions}
            onDeleteQuestion= {onDeleteQuestion}
            onDeleteChoice={onDeleteChoice}
            myType={myType}
            myTitle={myTitle}
            onCreateQuestion={onCreateQuestion}
            plusOption={plusOption}
            setPlusOption={setPlusOption}
            myChoice = {myChoice}
            onCreateChoice={onCreateChoice}
            setCheck = {setCheck}
            check = {check}
            />
       );
};

