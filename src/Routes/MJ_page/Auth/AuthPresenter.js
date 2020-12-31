import React from "react";
import styled from "styled-components";
import LineInput from "../../../Components/LineInput";
import OrangeButton from "../../../Components/OrangeButton";

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
    
    const Text = styled.div`
    color:${props => props.checked};
    `;
    
    const Bottom = styled.div`
    text-align:center;
    margin-top:50px;
    `;

    const LoginDesc = styled.div`
    `;

    const SNSDesc = styled.div`
    `;


    return (
        <Container>
            <Header>
            <Title>Hello</Title>
            <Desc>아이디와 비밀번호를 입력해주세요.</Desc>
            </Header>
            <Contents>
                <Text>Email Address</Text>   
                <LineInput/>
                <Text>Password</Text>   
                <LineInput/>
                <Text>Forgot Password?</Text>
            </Contents>
            <Bottom>
                <LoginDesc>
                    회원가입을 아직안하셨나요?  가입하기
                </LoginDesc>
                <OrangeButton/>
                <SNSDesc>SNS 계정으로 간단하게 로그인 하세요</SNSDesc>
            </Bottom>
        </Container>
    )
} 