import React from "react";
import UTalkPresenter from "./UTalkPresenter";

import { useMutation } from "react-apollo-hooks";
import { CREATE_MESSAGE, READ_ROOM_BY_CLUB_ID } from "./UTalkQueries";
import useInput from "../../../../Hooks/useInput";
import { useQuery } from "react-apollo-hooks";

import { toast } from "react-toastify";

export default ({action, setAction, club, userEmail, cData }) => {
  const { loading, data } = useQuery(READ_ROOM_BY_CLUB_ID, {variables:{clubId: club.id}});
  const [ createMessageMutation ] = useMutation(CREATE_MESSAGE);
  const myText = useInput("");
  console.log(data);
  console.log(cData);
  const i = 7;

  const onSubmit = async (e) => {
    e.preventDefault();
      if (myText.value !== "" && data.readRoomByClubId !== undefined) {
        try {
          const {
            data: { createMessage: id },
          } = await createMessageMutation({
            variables: {
              roomId: data.readRoomByClubId.id,
              text: myText.value,
            },
          });
          if (!id || id === "") {
            toast.error("전송 오류");
          } else {
            toast("전송 완료");
          }
        } catch (e) {
          console.log(e.message);
          toast.error("메시지를 보낼 수 없습니다. 다시 시도해주세요.");
        }
      }
      else if (myText.value !== "" && data.readRoomByClubId === undefined) {
        try {
          const {
            data: { createMessage: id },
          } = await createMessageMutation({
            variables: {
              toId: cData.readClub.master.id,
              text: myText.value,
            },
          });
          if (!id || id === "") {
            toast.error("전송 오류");
          } else {
            toast("전송 완료");
          }
        } catch (e) {
          console.log(e.message);
          toast.error("메시지를 보낼 수 없습니다. 다시 시도해주세요.");
        }
      }
       else {
        console.log("입력창을 채워주세요.");
      }
  };

  return (
    <UTalkPresenter 
    club={club} 
    setAction = {setAction} 
    action = {action} 
    userEmail={userEmail}
    loading={loading}
    data={data}
    text = {myText}
    onSubmit = {onSubmit}
    />
  );
};
