import React, {setAction, useState} from "react";
import SignInPresenter from "./SignInPresenter";

import { useMutation } from "react-apollo-hooks";
import useInput from "../../../Hooks/useInput";
import {EMAIL_AUTHENTICATE, CREATE_USER} from "./SignInQueries";

export default ({status, setStatus}) => {
  const [isChecked, setChecked] = useState(false);
  const [secret, setSecret] = useState("");

  const email = useInput("");
  const auth = useInput("");
  const password = useInput("");
  const password2 = useInput("");
  const name = useInput("");
  const studentNumber = useInput("");
  const phoneNumber = useInput("");
  const university = useInput("");
  const major = useInput("");

  const [ authenticateMutation ] = useMutation(EMAIL_AUTHENTICATE);
  const [ createUserMutation] = useMutation(CREATE_USER);

  const onSecret = async (e) => {
    if(email.value !== "") {
      const { data: { emailAuthenticate }} = await authenticateMutation({
        variables: {
          email: email.value
      }});
      console.log(emailAuthenticate);
      if(emailAuthenticate){
        setSecret(emailAuthenticate);
      }
  }
}
const checkSecret = async (e) => {
  if(secret !== "" && secret === auth.value) {
    setChecked(true);
    } 
}

  const onSubmit = async (e) => {
    e.preventDefault();
      if (status === "signUp") {
      if (email.value !== "" && auth.value !== "" && password.value !== "" && password2.value !== "") {
        if(password.value !== password2.value){
          console.log("비밀번호가 일치하지 않습니다.");
        }
        if (!isChecked){
          console.log("코드가 일치하지 않습니다");
        }
        if(isChecked && password.value === password2.value){
          setStatus("signUp2");
        }
        
      } else {
        console.log("모든 입력창을 채워주세요.");
      }
     }
     if (status === "signUp2") {
      if (password.value !== "" && name.value !== "" && studentNumber.value !== "" && phoneNumber.value !== "" && major.value !== "") {
        try {
          const { data: { createUser } } = await createUserMutation({
            variables: {
              email: email.value,
              studentNumber: studentNumber.value,
              phoneNumber: phoneNumber.value,
              university: university.value,
              major: major.value,
              password: password.value,
              name: name.value
          }});
          if (!createUser.id) {
            console.log("계정 생성에 실패했습니다. 다시 시도해 주세요.");
          } else {
            console.log(
              "계정이 생성되었습니다. 잠시후 로그인 페이지로 이동합니다."
            );
            setTimeout(() => setStatus("login"), 2000);
          }
        } catch (err) {
          console.log(err.message);
          console.log("계정을 생성할 수 없습니다. 다시 시도해주세요.");
        }
      } else {
        console.log("모든 입력창을 채워주세요.");
      }
     }
  }
  return (
    <SignInPresenter 
    status = {status}
    setStatus = {setStatus}
    email={email}
    auth={auth}
    password={password}
    password2={password2}
    onSubmit={onSubmit}
    name={name}
    studentNumber={studentNumber}
    phoneNumber={phoneNumber}
    university={university}
    major={major}
    onSecret={onSecret}
    checkSecret = {checkSecret}
    />
  );
};
