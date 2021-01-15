import React, {setAction, useState} from "react";
import SignInPresenter from "./SignInPresenter";

import { useMutation } from "react-apollo-hooks";
import useInput from "../../../Hooks/useInput";
import {EMAIL_AUTHENTICATE, CREATE_USER} from "./SignInQueries";
import { toast } from "react-toastify";

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
  const majUniv = useInput("");

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
        toast("코드를 보냈습니다")
        setSecret(emailAuthenticate);
      }
  }
}
const checkSecret = async (e) => {
  if(secret !== "" && secret === auth.value) {
    toast("코드 인증 완료")
    setChecked(true);
    } 
}

  const onSubmit = async (e) => {
    e.preventDefault();
      if (status === "signUp") {
      if (email.value !== "" && auth.value !== "" && password.value !== "" && password2.value !== "") {
        if(password.value !== password2.value){
          toast.error("비밀번호가 일치하지 않습니다.");
        }
        if (!isChecked){
          toast.error("코드가 일치하지 않습니다");
        }
        if(isChecked && password.value === password2.value){
          setStatus("signUp2");
        }
        
      } else {
        toast("모든 입력창을 채워주세요.");
      }
     }
     if (status === "signUp2") {
      if (password.value !== "" && name.value !== "" && studentNumber.value !== "" && phoneNumber.value !== "" && majUniv.value !== "") {
        try {
          const majUnivArray = majUniv.value.split('/');
          const { data: { createUser } } = await createUserMutation({
            variables: {
              email: email.value,
              studentNumber: studentNumber.value,
              phoneNumber: phoneNumber.value,
              university: majUnivArray[0],
              major: majUnivArray[1],
              password: password.value,
              name: name.value
          }});
          if (!createUser.id) {
            toast.error("계정 생성에 실패했습니다. 다시 시도해 주세요.");
          } else {
            toast("계정이 생성되었습니다. 잠시후 로그인 페이지로 이동합니다.");
            setTimeout(() => setStatus("login"), 2000);
          }
        } catch (err) {
          console.log(err.message);
          toast.error("계정을 생성할 수 없습니다. 다시 시도해주세요.");
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
    majUniv={majUniv}
    onSecret={onSecret}
    checkSecret = {checkSecret}
    />
  );
};
