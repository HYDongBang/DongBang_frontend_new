import React from "react";
import styled from "styled-components";
import Popup from "reactjs-popup";
import ProfileButton from "../../../Components/ProfileButton";
import LineInput from "../../../Components/LineInput";
import { faCheckSquare, faSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loading from "../../../Components/Loading";

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
    overflow-y: auto;
`;

const Num = styled.div`
    font-family: spoHanB;
    font-size: 1.1em;
`;

const Table = styled.div`
    padding: 20px 0px;
    overflow-x: auto;
`;

const Attributes = styled.div`
    display: flex;
    width: 70%;
    padding: 15px 0px;
`;

const Attribute = styled.div`
    font-size: 1.1em;
    color: ${props => props.theme.darkGray};
    width: 130px;
`;

const Members = styled.div`
    width: 70%;
`;

const Member = styled.div`
    display: flex;
    align-items: center;
    padding: 15px 0px;
    border-top: 1px solid ${props => props.theme.lightGray};
`;

const Info = styled.div`
    font-size: 0.85em;
    width: 130px;
    padding-right: 7px;
    line-height: 20px;
`;

const Submit = styled.div`
    padding-top: 80px;
    display: flex;
    justify-content: flex-end;
    padding-right: 30%;
    padding-bottom: 50px;
`;

const X = styled.div`
    cursor: pointer;
    position: absolute;
    right: -37px;
    top: -5px;
    font-size: 2.3em;
    color: #e5eaee;
`;

const Wrapper = styled.div`
    padding: 20px;
    overflow-y: auto;
`;

const List = styled.div`
    padding-bottom: 20px;
`;

const Question = styled.div`
    padding: 10px 0px;
    font-size: 0.85em;
`;

export default ({ applicants, selected, questions, onClickAll, onClickSelect, onSubmit, loading }) => (
    <>
        <Title>
            <Main>지원자 관리</Main>
            <Sub>지원자를 관리할 수 있습니다.</Sub>
        </Title>
        {loading && <Loading></Loading>}
        {!loading && (
            <form onClick={onSubmit}>
                <Contents>
                    <Num>
                        전체 지원자 <span style={{ color: "#FF7300" }}>{applicants.length}</span> 명 <span style={{ paddingLeft: "5px", fontSize: "0.8em", color: "lightGray", fontFamily: "spoHanR"}}>지원자 이름을 누르면 지원서를 볼 수 있습니다.</span>
                    </Num>
                    <Table>
                        <Attributes>
                            {/* 
                        // 전부 선택 버튼 잘 안되서 일단 주석 처리
                        {selected.indexOf("all") !== -1 && <FontAwesomeIcon id={"all"} icon={faCheckSquare} style={{ color: "#1D2226", margin: "0px 20px 0px 10px", cursor: "pointer", fontSize: "1.1em" }} onClick={onClickAll} />}
                        {selected.indexOf("all") === -1 && <FontAwesomeIcon id={"all"} icon={faSquare} style={{ color: "#1D2226", margin: "0px 20px 0px 10px", cursor: "pointer", fontSize: "1.1em" }} onClick={onClickAll} />}
                        */}
                            <div style={{ padding: "0px 22px" }}></div>
                            <Attribute style={{ width: "80px" }}>이름</Attribute>
                            <Attribute>전화번호</Attribute>
                            <Attribute>메일 주소</Attribute>
                            <Attribute style={{ width: "200px" }}>학교/학과</Attribute>
                            <Attribute style={{ width: "100px" }}>학번</Attribute>
                        </Attributes>
                        <Members>
                            {applicants.map(({ id, answers, user: { name, phoneNumber, email, university, major, studentNumber } }) => (
                                <Member key={id}>
                                    {selected.indexOf(id.toString()) !== -1 && (
                                        <FontAwesomeIcon
                                            id={id}
                                            icon={faCheckSquare}
                                            style={{ color: "#1D2226", margin: "0px 20px 0px 10px", cursor: "pointer", fontSize: "1.1em" }}
                                            onClick={onClickSelect}
                                        />
                                    )}
                                    {selected.indexOf(id.toString()) === -1 && (
                                        <FontAwesomeIcon
                                            id={id}
                                            icon={faSquare}
                                            style={{ color: "#1D2226", margin: "0px 20px 0px 10px", cursor: "pointer", fontSize: "1.1em" }}
                                            onClick={onClickSelect}
                                        />
                                    )}
                                    <Popup
                                        trigger={<Info style={{ width: "80px", cursor: "pointer" }}>{name}</Info>}
                                        modal
                                        contentStyle={{ width: "800px", height: "450px", border: "none", borderRadius: "10px" }}
                                        lockScroll={true}
                                    >
                                        {close => (
                                            <>
                                                <X onClick={close}>&times; </X>
                                                <Wrapper>
                                                    {answers.map(({ id, idx, type, answer }, index) => (
                                                        <List key={id}>
                                                            <Question>{questions[index].title}</Question>
                                                            <LineInput placeholder="답변이 없습니다." disabled={true} width="200px" value={answer}></LineInput>
                                                        </List>
                                                    ))}
                                                </Wrapper>
                                            </>
                                        )}
                                    </Popup>
                                    <Info>{phoneNumber}</Info>
                                    <Info>{email}</Info>
                                    <Info style={{ width: "200px" }}>
                                        {university}/{major}
                                    </Info>
                                    <Info style={{ width: "100px" }}>{studentNumber}</Info>
                                </Member>
                            ))}
                        </Members>
                    </Table>
                </Contents>
                <Submit>
                    <ProfileButton content="거절" id="reject" color="darkgray" style={{ marginRight: "15px" }}></ProfileButton>
                    <ProfileButton content="승낙" id="accept" color="orange"></ProfileButton>
                </Submit>
            </form>
        )}
    </>
);
