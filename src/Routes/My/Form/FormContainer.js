import React, {useState} from "react";
import useInput from "../../../Hooks/useInput";
import FormPresenter from "./FormPresenter";

import {GET_QUESTIONS, DELETE_QUESTION, DELETE_CHOICE} from "./FormQueries"
import { useMutation, useQuery } from "react-apollo-hooks";
import { useEffect } from "react";

import { toast } from "react-toastify";
import { checkDocument } from "apollo-utilities";


export default () => {
    const [select, setSelect] = useState("");
    const { loading, data } = useQuery(GET_QUESTIONS);

    const [questions,setQuestions] = useState([]);
    const name = useInput("");
    const description = useInput("");

    const [deleteQuestionMutation] = useMutation(DELETE_QUESTION);
    const [deleteChoiceMutation] = useMutation(DELETE_CHOICE);


    const onDeleteQuestion = async (e) => {
        // e.preventDefault();
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
        }
        } catch (err) {
        console.log(err.message);
        toast.error("신청서를 보낼 수 없습니다. 다시 시도해주세요.");
        }
        
      };

      const onDeleteChoice = async (e) => {
        // e.preventDefault();
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
        }
        } catch (err) {
        console.log(err.message);
        toast.error("신청서를 보낼 수 없습니다. 다시 시도해주세요.");
        }
        
      };

    useEffect(()=>{
        if(data){
            setQuestions(data.readLoggedInUser.clubMaster.questions);
            name.setValue(data.readLoggedInUser.clubMaster.name);
            description.setValue(data.readLoggedInUser.clubMaster.description);
        }
    }, [data]);

    return (
        <FormPresenter  
            select={select}
            setSelect={setSelect}
            Loading= {loading}
            questions= {questions}
            setQuestions= {setQuestions}
            name= {name}
            onDeleteQuestion= {onDeleteQuestion}
            onDeleteChoice={onDeleteChoice}
            description= {description}
            />

       );
    

};
