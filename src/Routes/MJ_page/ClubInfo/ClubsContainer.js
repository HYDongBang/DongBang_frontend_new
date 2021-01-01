import React, { useState } from "react";
import ClubsPresenter from "./ClubsPresenter";

export default ({ club }) => {
  const [action, setAction] = useState("Info");

  return (
    <ClubsPresenter action={action} setAction={setAction} club={club} />
  );
};
