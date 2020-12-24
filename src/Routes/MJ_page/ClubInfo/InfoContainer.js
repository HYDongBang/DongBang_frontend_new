import React, { useState } from "react";
import InfoPresenter from "./InfoPresenter";

export default ({ club }) => {
  const [action, setAction] = useState("clubInfo");

  return (
    <InfoPresenter action={action} setAction={setAction} club={club} />
  );
};
