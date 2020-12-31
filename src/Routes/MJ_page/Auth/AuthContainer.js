import React, {useState} from "react";
import AuthPresenter from "./AuthPresenter";

export default ({ }) => {
    const [status, setStatus] = useState("login");

  return (
    <AuthPresenter status = {status} setStatus = {setStatus}/>
  );
};
