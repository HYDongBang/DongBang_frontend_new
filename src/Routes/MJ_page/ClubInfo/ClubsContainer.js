import React, { useState } from "react";
import ClubsPresenter from "./ClubsPresenter";

import { useQuery } from "react-apollo-hooks";
import {READ_LOGGED_IN_USER} from "./ClubsQuries"


export default ({ club }) => {
  const [action, setAction] = useState("Info");
  const { loading, data } = useQuery(READ_LOGGED_IN_USER);


  return (
    <ClubsPresenter action={action} setAction={setAction} club={club} loading={loading} data={data}/>
  );
};
