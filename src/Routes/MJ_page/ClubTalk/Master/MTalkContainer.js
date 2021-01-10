import React, {useState} from "react";
import MTalkPresenter from "./MTalkPresenter";

import { useMutation } from "react-apollo-hooks";
import { READ_ROOM, READ_ROOMS, CREATE_MESSAGE } from "./MTalkQueries";
import useInput from "../../../../Hooks/useInput";
import { useQuery } from "react-apollo-hooks";

import { toast } from "react-toastify";

export default ({action, setAction, club }) => {
  const [rid, setRid ] = useState(-1);

  const { loading:roomsLoading, data: rooms } = useQuery(READ_ROOMS);
  const { loading:roomLoading, data: room } = useQuery(READ_ROOM, {variables:{id: rid}});

  console.log(rooms);
  console.log(room);

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
     />
  );
};
