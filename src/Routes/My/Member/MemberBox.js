import React, { useState } from "react";
import styled from "styled-components";
import ProfileButton from "../../../Components/ProfileButton";
import LineInput from "../../../Components/LineInput";
import { useMutation } from "react-apollo-hooks";
import { LEAVE_CLUB, BECOME_ADMINISTRATOR, RESIGN_ADMINISTRATOR, APPOINT_MASTER } from "./MemberQueries";

const Wrapper = styled.div`
    padding: 30px;
    width: 50%;
`;

const Information = styled.div`
    padding: 10px 0px 15px 0px;
`;

const Question = styled.div`
    font-size: 0.85em;
    padding-bottom: 10px;
    padding-left: 5px;
`;

const Radio = styled.div`
    display: flex;
    align-items: center;
    padding-top: 10px;
`;

const RadioLabel = styled.label`
    font-size: 0.75em;
    padding: 0px 7px 0px 3px;
    cursor: pointer;
`;

export default({type, member}) => {
    const [leaveClubMutation] = useMutation(LEAVE_CLUB);
    const [becomeAdministratorMutation] = useMutation(BECOME_ADMINISTRATOR);
    const [resignAdministratorMutation] = useMutation(RESIGN_ADMINISTRATOR);
    const [appointMasterMutation] = useMutation(APPOINT_MASTER);
    const [current, setCurrent] = useState(type);

    const onClickRadio = async e => {
        const currentType = e.target.name;
        const targetType = e.target.value;
        const id = e.target.id;

        if(currentType === "administrator") {
            if(targetType === "member") {
                console.log("운영진에서 멤버로!")
                try {
                    await resignAdministratorMutation({
                        variables: {
                            userId: parseInt(id)
                        }
                    });
                    setCurrent("member");
                } catch (e) {
                    console.log(e.message);
                    alert("다시 시도해 주세요.");
                }
            }
        } else if(currentType === "member") {
            if(targetType === "administrator") {
                console.log("멤버에서 운영진으로!")
                try {
                    await becomeAdministratorMutation({
                        variables: {
                            userId: parseInt(id)
                        }
                    });
                    setCurrent("administrator");
                } catch (e) {
                    console.log(e.message);
                    alert("다시 시도해 주세요.");
                }
            }
        }
    };

    const onClickLeave = async e => {
        const id = e.target.id;
        try {
            await leaveClubMutation({
                variables: {
                    userId: parseInt(id)
                }
            });
            if (current === "administrator") {
                await resignAdministratorMutation({
                    variables: {
                        userId: parseInt(id)
                    }
                });
            }
            alert("탈퇴시켰습니다.");
            window.location.reload();
        } catch (e) {
            console.log(e.message);
            alert("다시 시도해 주세요.");
        }
    };


    return (
        <div style={{display: "flex", padding: "0px 10px"}}>
                <>
                <Wrapper>
                    <Information>
                        <Question>이름</Question>
                        <LineInput placeholder="답변이 없습니다." disabled={true} width="200px" value={member.name}></LineInput>
                    </Information>
                    <Information>
                        <Question>학교 / 학과</Question>
                        <LineInput placeholder="답변이 없습니다." disabled={true} width="200px" value={member.university + "/" + member.major}></LineInput>
                    </Information>
                    <Information>
                        <Question>학번</Question>
                        <LineInput placeholder="답변이 없습니다." disabled={true} width="200px" value={member.studentNumber}></LineInput>
                    </Information>
                </Wrapper>
                <Wrapper>
                    <Information>
                        <Question>이메일 주소</Question>
                        <LineInput placeholder="답변이 없습니다." disabled={true} width="200px" value={member.email}></LineInput>
                    </Information>
                    <Information>
                        <Question>연락처</Question>
                        <LineInput placeholder="답변이 없습니다." disabled={true} width="200px" value={member.phoneNumber}></LineInput>
                    </Information>
                    {current !== "master" && (
                        <Radio>
                            <input type="radio" id={member.id} name={type} value="administrator" checked={current === "administrator"} onChange={onClickRadio}></input>
                            <RadioLabel htmlFor="administrator">운영진</RadioLabel>
                            <input type="radio" id={member.id} name={type} value="member" checked={current === "member"} onChange={onClickRadio}></input>
                            <RadioLabel htmlFor="member">멤버</RadioLabel>
                        </Radio>
                    )}
                    {current === "member" && (
                        <ProfileButton content="탈퇴" color="gray" hover="orange" style={{marginTop: "40px", marginLeft: "100px"}} id={member.id} onClick={onClickLeave}></ProfileButton>
                    )}
                </Wrapper>
                </>
        </div>
    );
};