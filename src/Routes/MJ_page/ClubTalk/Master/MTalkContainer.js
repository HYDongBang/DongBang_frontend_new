import React, {useState} from "react";
import MTalkPresenter from "./MTalkPresenter";

import { useMutation } from "react-apollo-hooks";
import { READ_ROOM, READ_ROOMS, CREATE_MESSAGE } from "./MTalkQueries";
import useInput from "../../../../Hooks/useInput";
import { useQuery } from "react-apollo-hooks";

import { toast } from "react-toastify";

export default ({action, setAction, club, userEmail }) => {
  const [rid, setRid ] = useState(-1);
  const [ createMessageMutation ] = useMutation(CREATE_MESSAGE);
  const myText = useInput("");

  const { loading:roomsLoading, data: rooms } = useQuery(READ_ROOMS);
  const { loading:roomLoading, data: room } = useQuery(READ_ROOM, {variables:{id: rid}});


  
  const onSubmit = async (e) => {
    e.preventDefault();
    
      if (myText.value !== "") {
        try {
          const {
            data: { createMessage: id },
          } = await createMessageMutation({
            variables: {
              roomId: rid,
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
    <MTalkPresenter 
     club={club} 
      setAction = {setAction}
     action = {action}
     roomsLoading={roomsLoading}
     roomLoading={roomLoading}
     rooms={rooms}
     room={room}
     rid={rid}
     setRid={setRid}
     userEmail={userEmail}
     myText = {myText}
     onSubmit = {onSubmit}
     />
  );
};
