import React, { useState } from "react";
import ClubsPresenter from "./ClubsPresenter";

import { useQuery } from "react-apollo-hooks";
import {READ_LOGGED_IN_USER, READ_CLUB} from "./ClubsQuries"


export default ({ club }) => {
  const [action, setAction] = useState("Info");
  const { loading:uLoading, data:uData } = useQuery(READ_LOGGED_IN_USER);
  const { loading:cLoading, data:cData } = useQuery(READ_CLUB, {variables:{id: club.id}});
  console.log(uData);

  return (
    <ClubsPresenter 
    action={action} 
    setAction={setAction}
    club={club} 
    loading={uLoading} 
    data={uData}
    cLoading={cLoading} 
    cData={cData}
    />
  );
};
