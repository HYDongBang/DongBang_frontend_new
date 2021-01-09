import React from "react";
import MTalkPresenter from "./MTalkPresenter";

import { useMutation } from "react-apollo-hooks";
import { READ_ROOM, READ_ROOMS, CREATE_MESSAGE } from "./MTalkQueries";
import useInput from "../../../../Hooks/useInput";
import { useQuery } from "react-apollo-hooks";

import { toast } from "react-toastify";

export default ({action, setAction, club }) => {
  const { loading:roomsLoading, data: rooms } = useQuery(READ_ROOMS);
  const { loading:roomLoading, data: room } = useQuery(READ_ROOM, {variables:{id: club.id}});

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
     />
  );
};
