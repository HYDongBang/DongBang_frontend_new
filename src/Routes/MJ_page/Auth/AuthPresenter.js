import React from "react";
import styled from "styled-components";

import LineInput from "../../../Components/LineInput";
import OrangeButton from "../../../Components/OrangeButton";
import SocialLogo from "../../../Components/SocialLogo";

import SignInContainer from "./SignInContainer"

export default ({ status, setStatus})=>{
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


    return (
        <>
        {status === "login" ? 
            <Container>
            <Header>
            <Title>Hello</Title>
            <Desc>아이디와 비밀번호를 입력해주세요.</Desc>
            </Header>
            <Contents>
                <Content>
                    <Text>Email Address</Text>   
                    <LineInput icon="mail" placeholder = "이메일 "/>
                </Content>
                <Content>
                <Text>Password</Text>   
                <LineInput icon="pw" placeholder = "비밀번호 "/>
                </Content>
                <FPassword>Forgot Password?</FPassword>
            </Contents>
            <Bottom>
                <LoginDesc>
                    <Text>회원가입을 아직안하셨나요? </Text>
                    <SText onClick={() => setStatus("signUp")} >가입하기</SText>
                </LoginDesc>
                <div style ={{margin:"5px auto 40px", width:"fit-content"}}>
                    <OrangeButton content = "Login"/>
                </div>
                <SNSDesc>SNS 계정으로 간단하게 로그인 하세요</SNSDesc>
                <div style = {{width:"fit-content", margin:"auto"}}>
                <SocialLogo/>
                </div>
            </Bottom>
            </Container>
            :
            <SignInContainer status = {status} setStatus={setStatus}/>
        }

        </>
    )
} 