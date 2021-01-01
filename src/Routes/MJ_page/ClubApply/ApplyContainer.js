import React from "react";
import ApplyPresenter from "./ApplyPresenter";

export default ({action, setAction, club }) => {

  return (
    <ApplyPresenter club={club} setAction = {setAction} action = {action}/>
  );
};
