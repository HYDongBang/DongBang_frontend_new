import React, {useState} from "react";
import styled from "styled-components";

import LineInput from "../../../Components/LineInput";
import OrangeButton from "../../../Components/OrangeButton";
import SocialLogo from "../../../Components/SocialLogo";

import SignInContainer from "./SignInContainer"
import { Scrollbars } from 'react-custom-scrollbars';

const Container = styled.div`
    width:100%;
    height:100%;
    padding:45px;
`;

const Header = styled.div`
    margin-bottom: 30px;
    text-align:center;
`;
    
const Title = styled.div`
    font-size: 3em;
    margin-bottom: 20px;
`;
    
const Desc = styled.div`
    font-size: 1.2em;
`;
    
const Contents = styled.div`
    margin:auto;
    width:60%;
`;

const Content = styled.div`
    margin-bottom:15px;
`;
    
    
const FPassword = styled.div`
    color: ${props => props.theme.orange};
    margin-top:30px;
    cursor:pointer;
`;

const Text = styled.div`
    color:${props => props.theme.checked};
    margin-bottom:10px;
`;
    
const SText = styled.div`
    color:${props => props.theme.orange};
    margin-left:5px;
    margin-bottom:10px;
    cursor:pointer;
`;
    
const Bottom = styled.div`
    text-align:center;
    margin-top:40px;
`;

const LoginDesc = styled.div`
    display:flex;
    width:fit-content;
    margin:auto;
`;

const SNSDesc = styled.div`
    margin-bottom:10px;
`;

const Button = styled.button`
  width: ${props => props.width || "220px" };
  height: ${props => props.height || "50px" };
  border-radius: 38px;
  background-color:${props=>props.theme.orange};
  text-align:center;
  line-height:2.6;
  font-size:1.1em;
  font-family:raleBold;
  color:${props=>props.theme.white};
  cursor:pointer;
  margin:5px auto 40px;
  border:none;
`;

export default ({ 
    status, 
    setStatus, 
    email, 
    password, 
    onSubmit,
    pwClick,
    setPwClick,
    onSecret,
    checkSecret,
    secret,
    isChecked,
    auth,
    password2,
    onChangePassword
})=>{
    const [pw2Click, setPw2Click] = useState(false);

    return (
        <Scrollbars style={{ width: "100%", height: "100%"}}>
            {status === "login" && 
                <Container>
                    <Header>
                        <Title>Hello</Title>
                        <Desc>아이디와 비밀번호를 입력해주세요.</Desc>
                    </Header>
                    <form onSubmit={onSubmit}>
                        <Contents>
                            <Content>
                                <Text>Email Address</Text>   
                                <LineInput {...email} icon="mail" type = "email" placeholder = "이메일 "/>
                            </Content>
                            <Content>
                                <Text>Password</Text>   
                                <LineInput {...password}  onClick={() => setPwClick(!pwClick)}  icon="pw" type ={pwClick? "text": "password"} placeholder = "비밀번호 "/>

                            </Content>
                            <FPassword onClick={() => setStatus("FindPassword")}>Forgot Password?</FPassword>
                        </Contents>
                        <Bottom>
                            <LoginDesc>
                                <Text>회원가입을 아직안하셨나요? </Text>
                                <SText onClick={() => setStatus("signUp")} >가입하기</SText>
                            </LoginDesc>
                            <Button>LogIn</Button>
                            <SNSDesc>SNS 계정으로 간단하게 로그인 하세요</SNSDesc>
                            <div style = {{width:"fit-content", margin:"auto"}}>
                            <SocialLogo/>
                            </div>
                        </Bottom>
                    </form>
                </Container>
            }
            {(status === "signUp" || status === "signUp2") &&     
                <SignInContainer status = {status} setStatus={setStatus}/>
            }
            {(status === "FindPassword") &&     
                 <Container>
                 <Header>
                     <Title>Hello</Title>
                     <Desc>비밀번호를 변경할 수 있습니다.</Desc>
                 </Header>
                 <form onSubmit={onChangePassword}>
                    <Contents>
                        <Content>
                            <Text> Email Address</Text>   
                            <LineInput {...email} icon="certification" type = "email" placeholder = "이메일을 작성해주세요." onClick ={onSecret}/>
                        </Content>
                        {secret !== "" &&
                            <Content>
                                <Text>Authentication Code</Text>   
                                <LineInput {...auth}  icon="check" placeholder = "코드를 작성해주세요." onClick ={checkSecret}/>
                            </Content>
                        }
                        {isChecked && 
                        <>
                            <Content>
                                <Text>Password</Text>   
                                <LineInput {...password} icon="pw" onClick={() => setPwClick(!pwClick)} type ={pwClick? "text": "password"} placeholder = "비밀번호 "/>
                            </Content>
                            <Content>
                                <Text>Password</Text>   
                                <LineInput {...password2} icon="pw"  onClick={() => setPw2Click(!pw2Click)} type ={pw2Click? "text": "password"} placeholder = "비밀번호를 다시 한번 입력해주세요"/>
                            </Content>
                        </>
                        }
                    </Contents>
                    <div  style ={{textAlign:"center", position:"absolute", bottom:"-50px", width:"84%"}}>
                        <Button>변경</Button>
                    </div>
                </form>
             </Container>
            }
        </Scrollbars>
    )
} 