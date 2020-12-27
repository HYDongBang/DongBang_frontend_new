import React from "react";
import UTalkPresenter from "./UTalkPresenter";

export default ({action, setAction, club }) => {

  return (
    <UTalkPresenter club={club} setAction = {setAction} action = {action}/>
  );
};
