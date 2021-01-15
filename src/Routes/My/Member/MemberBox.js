import React from "react";
import styled from "styled-components";
import ProfileButton from "../../../Components/ProfileButton";
import LineInput from "../../../Components/LineInput";

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

export default({type, list, onClickRadio, onClickLeave}) => {
    return (
        <div style={{display: "flex", padding: "0px 10px"}}>
                <>
                <Wrapper>
                    <Information>
                        <Question>이름</Question>
                        <LineInput placeholder="답변이 없습니다." disabled={true} width="200px" value={list.name}></LineInput>
                    </Information>
                    <Information>
                        <Question>학교 / 학과</Question>
                        <LineInput placeholder="답변이 없습니다." disabled={true} width="200px" value={list.university + "/" + list.major}></LineInput>
                    </Information>
                    <Information>
                        <Question>학번</Question>
                        <LineInput placeholder="답변이 없습니다." disabled={true} width="200px" value={list.studentNumber}></LineInput>
                    </Information>
                </Wrapper>
                <Wrapper>
                    <Information>
                        <Question>이메일 주소</Question>
                        <LineInput placeholder="답변이 없습니다." disabled={true} width="200px" value={list.email}></LineInput>
                    </Information>
                    <Information>
                        <Question>연락처</Question>
                        <LineInput placeholder="답변이 없습니다." disabled={true} width="200px" value={list.phoneNumber}></LineInput>
                    </Information>
                    <Radio>
                        <input type="radio" id="master" name={type} value="master" checked={type === "master"} onChange={onClickRadio}></input>
                        <RadioLabel htmlFor="master">회장</RadioLabel>
                        <input type="radio" id="administrator" name={type} value="administrator" checked={type === "administrator"} onChange={onClickRadio}></input>
                        <RadioLabel htmlFor="administrator">운영진</RadioLabel>
                        <input type="radio" id="member" name={type} value="member" checked={type === "member"} onChange={onClickRadio}></input>
                        <RadioLabel htmlFor="member">멤버</RadioLabel>
                    </Radio>
                    <ProfileButton content="탈퇴" color="gray" hover="orange" style={{marginTop: "20px", marginLeft: "100px"}} id={list.id} onClick={onClickLeave}></ProfileButton>
                </Wrapper>
                </>
        </div>
    );
};