import React, {useState} from "react";
import AuthPresenter from "./AuthPresenter";

import { useMutation } from "react-apollo-hooks";
import { SIGN_IN, LOCAL_LOG_IN, EMAIL_AUTHENTICATE, UPDATE_PASSWORD } from "./AuthQueries";
import useInput from "../../../Hooks/useInput";
import { toast } from "react-toastify";


export default ({ }) => {
    const [status, setStatus] = useState("login");
    const [pwClick, setPwClick] = useState(false);
    const email = useInput("");
    const password = useInput("");
    const password2 = useInput("");
    const [secret, setSecret] = useState("");
    const auth = useInput("");
    const [isChecked, setChecked] = useState(false);


  const [ requestLoginMutation ] = useMutation(SIGN_IN);
  const [ localLogInMutation ] = useMutation(LOCAL_LOG_IN);
  const [ authenticateMutation ] = useMutation(EMAIL_AUTHENTICATE);
  const [ UpdatePasswordMutation] = useMutation(UPDATE_PASSWORD);

  const onSecret = async (e) => {
    if(email.value !== "") {
      const { data: { emailAuthenticateForPassword }} = await authenticateMutation({
        variables: {
          email: email.value
      }});
      console.log(emailAuthenticateForPassword);
      if (emailAuthenticateForPassword ==="유저가 존재하지 않습니다."){
        toast("존재하지 않는 이메일입니다.")
      }else if(emailAuthenticateForPassword){
        toast("코드를 보냈습니다")
        setSecret(emailAuthenticateForPassword);
      }
    }
  }

  const checkSecret = async (e) => {
    if(secret !== "" && secret === auth.value) {
      toast("코드 인증 완료")
      setChecked(true);
      } 
  }
  
  const onChangePassword = async (e) => {
    e.preventDefault();
      if (password.value !== ""&&password.value !== ""&& password.value === password2.value) {
        try {
          const {
            data: { updateUserPassword: id },
          } = await UpdatePasswordMutation({
            variables: {
              email: email.value,
              password: password.value,
            },
          });
          if (id) {
            toast("비밀번호 변경 성공. 잠시후 로그인 페이지로 이동합니다.");
            setTimeout(() => setStatus("login"), 1500);
          }
        } catch (e) {
          console.log(e.message);
        }
      }
  };


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
          {e.message === "GraphQL error: Wrong email/secret combination"&& toast("이메일/비밀번호 조합이 옳지 않습니다.");}
        }
      } else {
            console.log("메일 혹은 비밀번호를 모두 입력해주세요.");
      }
  };

  return (
    <AuthPresenter 
      status = {status}
      setStatus = {setStatus} 
      email={email}
      password={password}
      onSubmit={onSubmit}
      pwClick={pwClick}
      setPwClick ={setPwClick}
      secret={secret}
      setSecret={setSecret}
      onSecret={onSecret}
      checkSecret={checkSecret}
      auth={auth}
      isChecked={isChecked}
      password2={password2}
      onChangePassword={onChangePassword}
     />
  );
};
