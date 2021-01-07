import React, {useState} from "react";
import ApplyPresenter from "./ApplyPresenter";

import { useQuery } from "react-apollo-hooks";
import { useMutation } from "react-apollo-hooks";
import { CREATE_APPLICATION, READ_CLUB} from "./ApplyQueries";

export default ({action, setAction, club }) => {

  const [myanswers, setMyAnswers] = useState([""]);
  const [application, setApplication] = useState([
    {},
]);

  const { loading, data } = useQuery(READ_CLUB, {variables:{id: club.id}});

  const [createApplicationMutation] = useMutation(CREATE_APPLICATION);

  const myApplication = () => {
      if (myanswers.length === data.readClub.questions.length) {
        {
          myanswers.map((ans, idx)=>{
          console.log(idx)
          const answer = ans;
          const type = data.readClub.questions[idx].type;
          const index = data.readClub.questions[idx].index;
          const newApplication = {
            type,
            answer,
            index
          }
          console.log(newApplication);
          application[idx]= newApplication;
          console.log(application);
        })
        }
      }}

    
  const onSubmit = async (e) => {
    myApplication();
    e.preventDefault();
    if(!loading && data.readClub){
      if (myanswers.length === data.readClub.questions.length) {

        try {
          const {
            data: { createApplication: id },
          } = await createApplicationMutation({
            variables: {
              clubId: club.id,
              Answers: application,
            },
          });
          if (!id || id === "") {
            console.log("전송 오류");
          } else {
            setAction("clubInfo");
            console.log("전송 완료");
          }
        } catch (err) {
          console.log(err.message);
          console.log("신청서를 보낼 수 없습니다. 다시 시도해주세요.");
        }
      } else {
        console.log("모든 입력창을 채워주세요.");
      }
    }
  };
  return (
    <ApplyPresenter club={club} setAction = {setAction} action = {action} loading={loading} data={data} onSubmit={onSubmit} myanswers={myanswers} setMyAnswers={setMyAnswers} myApplication={myApplication}/>
  );
};
