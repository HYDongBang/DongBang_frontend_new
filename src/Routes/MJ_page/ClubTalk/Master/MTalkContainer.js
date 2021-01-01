import React from "react";
import MTalkPresenter from "./MTalkPresenter";

export default ({action, setAction, club }) => {

  return (
    <MTalkPresenter club={club} setAction = {setAction} action = {action}/>
  );
};
