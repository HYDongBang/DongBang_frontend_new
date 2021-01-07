import React, {useState} from "react";
import AuthPresenter from "./AuthPresenter";

import { useMutation } from "react-apollo-hooks";
import { SIGN_IN, LOCAL_LOG_IN } from "./AuthQueries";
import useInput from "../../../Hooks/useInput";
import { toast } from "react-toastify";


export default ({ }) => {
    const [status, setStatus] = useState("login");
    const email = useInput("");
    const password = useInput("");

  const [ requestLoginMutation ] = useMutation(SIGN_IN);
  const [ localLogInMutation ] = useMutation(LOCAL_LOG_IN);



    const onSubmit = async (e) => {
    e.preventDefault();
      if (email.value !== "" && password.value !== "") {
        try {
          const {
            data: { signIn: token },
          } = await requestLoginMutation({
            variables: {
              email: email.value,
              password: password.value,
            },
          });
          if (!token || token === "") {
            toast("계정이 없습니다. 잠시후 회원가입 페이지로 이동합니다.");
            setTimeout(() => setStatus("signUp"), 2000);
          } else {
            toast("로그인 성공");
            localLogInMutation({ variables: { token } });
            window.location.assign(window.location.href);
          }
        } catch (e) {
          console.log(e.message);
          {e.message === "GraphQL error: 일치하는 사용자가 없습니다."&& toast("일치하는 사용자가 없습니다.");}
          console.log("다시 시도해 주세요");
        }
      } else {
            console.log("메일 혹은 비밀번호를 모두 입력해주세요.");
      }
  };

  return (
    <AuthPresenter status = {status} setStatus = {setStatus} email={email} password={password} onSubmit={onSubmit}/>
  );
};
