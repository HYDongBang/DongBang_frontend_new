import React from "react";
import styled from "styled-components";

import LineInput from "../../../Components/LineInput";
import OrangeButton from "../../../Components/OrangeButton";
import SocialLogo from "../../../Components/SocialLogo";


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

    const Text = styled.div`
    color:${props => props.theme.checked};
    margin-bottom:10px;
    `;

    const Bottom = styled.div`
    text-align:center;
    margin-top:25px;
    `;


    const SNSDesc = styled.div`
    margin-bottom:10px;
    `;


    return (
        <Container>
            <Header>
            <Title>Hello</Title>
            <Desc>계정이 없으신가요? 회원가입을 진행하세요.</Desc>
            </Header>
            <Contents>
                {status === "signUp" &&
                <>
                <Content>
                    <Text> Email Address</Text>   
                    <LineInput icon="certification" placeholder = "이메일을 작성해주세요."/>
                </Content>
                <Content>
                    <Text>Password</Text>   
                    <LineInput icon="pw" placeholder = "비밀번호 "/>
                </Content>
                <Content>
                    <Text>Password</Text>   
                    <LineInput icon="pw" placeholder = "비밀번호를 다시 한번 입력해주세요"/>
                </Content>
                </>
                }
                {status === "signUp2" &&
                <>
                <Content>
                    <Text> Name</Text>   
                    <LineInput placeholder = "이름을 작성해주세요."/>
                </Content>
                <Content>
                    <Text>University / major</Text>   
                    <LineInput  placeholder = "소속 대학과 전공을 적어주세요 (/로 구별합니다)"/>
                </Content>
                <Content>
                    <Text>Student ID No.</Text>   
                    <LineInput  placeholder = "학번을 정확히 입력해주세요."/>
                </Content>               
                <Content>
                    <Text>Phone number</Text>   
                    <LineInput  placeholder = "전화번호를 입력해주세요."/>
                </Content>
                </>
                }

            </Contents>
            <Bottom>
                {status === "signUp"? 
                <div style ={{margin:"5px auto 40px", width:"fit-content"}} onClick={() => setStatus("signUp2")}>
                    <OrangeButton content = "Next"/>
                </div>
                :
                <div style ={{margin:"5px auto 40px", width:"fit-content"}}>
                    <OrangeButton content = "SignUp"/>
                </div>
                }
                <SNSDesc>SNS 계정으로 간단하게 로그인 하세요</SNSDesc>
                <div style = {{width:"fit-content", margin:"auto"}}>
                <SocialLogo/>
                </div>
            </Bottom>

        </Container>
    )
} 