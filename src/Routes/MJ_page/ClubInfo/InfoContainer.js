import React from "react";
import InfoPresenter from "./InfoPresenter";

export default ({  action, setAction, club }) => {

  return (
    <InfoPresenter club={club} setAction = {setAction} action = {action}/>
  );
};
