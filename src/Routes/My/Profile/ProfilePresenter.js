import React from "react";
import styled from "styled-components";
import BoxInput from "../../../Components/BoxInput";
import ProfileButton from "../../../Components/ProfileButton";
import UserLogo from "../../../Components/UserLogo";
// import Loading from "../../../Components/"

const Title = styled.div`
    padding-bottom: 35px;
`;

const Main = styled.div`
    font-size: 1.4em;
    font-family: raleBold;
    padding-bottom: 10px;
`;

const Sub = styled.div`
    font-size: 0.8em;
    color: ${props => props.theme.lightGray};
    paddding: 0px 7px;
`;

const Contents = styled.div``;

const Info = styled.div`
    padding-left: 15px;
    width: 20%;
`;

const Question = styled.div`
    padding: 15px 0px;
`;

const About = styled.div`
    font-family: spoHanB;
    font-size: 0.8em;
    padding-bottom: 10px;
`;

const Submit = styled.div`
    padding-top: 80px;
    display: flex;
    justify-content: flex-end;
    padding-right: 40%;
`;

export default ({ name, uni, major, studentNumber, phone, email }) => (
    <>
        <Title>
            <Main>프로필 관리</Main>
            <Sub>내 정보 및 프로필을 편집할 수 있습니다.</Sub>
        </Title>
        <Contents>
            <Question style={{ display: "flex" }}>
                <UserLogo name="홍" size="" font=""></UserLogo>
                <Info>
                    <About>이름</About>
                    <BoxInput placeholder="ex) 홍길동" {...name} width="100%"></BoxInput>
                </Info>
            </Question>
            <Question>
                <About>학교</About>
                <BoxInput placeholder="ex) 한양대학교" {...uni} width="60%"></BoxInput>
            </Question>
            <Question>
                <About>학과</About>
                <BoxInput placeholder="ex) 컴퓨터소프트웨어학부" {...major} width="60%"></BoxInput>
            </Question>
            <Question>
                <About>학번</About>
                <BoxInput placeholder="ex) 2017000000" {...studentNumber} width="60%"></BoxInput>
            </Question>
            <Question>
                <About>연락처</About>
                <BoxInput placeholder="ex) 01012341234" {...phone} width="60%"></BoxInput>
            </Question>
            <Question>
                <About>이메일</About>
                <BoxInput placeholder="ex) abc@naver.com" {...email} width="60%"></BoxInput>
            </Question>
        </Contents>
        <Submit>
            <ProfileButton content="저장" color="gray" hover="orange" />
        </Submit>
    </>
);
