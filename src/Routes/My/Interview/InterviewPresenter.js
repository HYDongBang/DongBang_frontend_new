import React from "react";
import styled from "styled-components";
import ProfileButton from "../../../Components/ProfileButton";
// import Loading from "../../../Components/";

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

const Contents = styled.div`
    display: flex;
    width: 70%;
`;

const Applicants = styled.div`
    width: 20%;
    padding-right: 10px;
    overflow-y: auto;
`;

const Menu = styled.div`
    font-family: spoHanB;
    padding-bottom: 15px;
`;

const Applicant = styled.div`
    border: 2px solid ${props => props.theme.lightGray};
    border-radius: 5px;
    padding: 12px 10px;
    font-size: 0.85em;
    line-height: 15px;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    cursor: pointer;
    &:hover {
        border: 2px solid ${props => props.theme.orange};
        transition: 0.1s;
    }
`;

const Name = styled.div``;

const Number = styled.div`
    color: ${props => props.theme.lightGray};
    font-size: 0.8em;
    padding-left: 3px;
`;

const TimeTable = styled.div`
    background: black;
    width: 80%;
`;

const Submit = styled.div`
    padding-top: 80px;
    display: flex;
    justify-content: flex-end;
    padding-right: 30%;
    padding-bottom: 50px;
`;

export default ({ applicants }) => (
    <>
        <Title>
            <Main>면접 타임 테이블</Main>
            <Sub>면접 일정을 작성할 수 있습니다.</Sub>
        </Title>
        <Contents>
            <Applicants>
                <Menu>지원자</Menu>
                {applicants.map(({ name, studentNumber }) => (
                    <Applicant>
                        <Name>{name}</Name>
                        <Number>{studentNumber}</Number>
                    </Applicant>
                ))}
            </Applicants>
            <TimeTable></TimeTable>
        </Contents>
        <Submit>
            <ProfileButton content="초기화" color="darkgray" style={{ marginRight: "15px" }}></ProfileButton>
            <ProfileButton content="저장" color="orange"></ProfileButton>
        </Submit>
    </>
);
