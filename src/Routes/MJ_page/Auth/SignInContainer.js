import React from "react";
import SignInPresenter from "./SignInPresenter";

export default ({status, setStatus}) => {

  return (
    <SignInPresenter status = {status} setStatus = {setStatus}/>
  );
};
