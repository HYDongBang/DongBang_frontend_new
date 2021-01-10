import React from "react";
import styled from "styled-components";
import ProfileButton from "../../../Components/ProfileButton";
import { faCheckSquare, faSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

export default ({ applicants, selected, questions, onClickAll, onClickSelect, onClickButton, loading }) => (
    <>
        <Title>
            <Main>지원자 관리</Main>
            <Sub>지원자를 관리할 수 있습니다.</Sub>
        </Title>
        {loading && <div>loading</div>}
        {!loading && (
            <Contents>
                <Num>
                    전체 지원자 <span style={{ color: "#FF7300" }}>{applicants.length}</span> 명
                </Num>
                <Table>
                    <Attributes>
                        {selected.indexOf("all") !== -1 && <FontAwesomeIcon id={"all"} icon={faCheckSquare} style={{ color: "#1D2226", margin: "0px 20px 0px 10px", cursor: "pointer", fontSize: "1.1em" }} onClick={onClickAll} />}
                        {selected.indexOf("all") === -1 && <FontAwesomeIcon id={"all"} icon={faSquare} style={{ color: "#1D2226", margin: "0px 20px 0px 10px", cursor: "pointer", fontSize: "1.1em" }} onClick={onClickAll} />}
                        <Attribute style={{ width: "80px" }}>이름</Attribute>
                        <Attribute>전화번호</Attribute>
                        <Attribute>메일 주소</Attribute>
                        <Attribute style={{ width: "200px" }}>학교/학과</Attribute>
                        <Attribute style={{ width: "100px" }}>학번</Attribute>
                    </Attributes>
                    <Members>
                        {applicants.map(({ id, answers, user: { name, phoneNumber, email, university, major, studentNumber } }) => (
                            <Member key={id}>
                                {selected.indexOf(id.toString()) !== -1 && <FontAwesomeIcon id={id} icon={faCheckSquare} style={{ color: "#1D2226", margin: "0px 20px 0px 10px", cursor: "pointer", fontSize: "1.1em" }} onClick={onClickSelect} />}
                                {selected.indexOf(id.toString()) === -1 && <FontAwesomeIcon id={id} icon={faSquare} style={{ color: "#1D2226", margin: "0px 20px 0px 10px", cursor: "pointer", fontSize: "1.1em" }} onClick={onClickSelect} />}
                                {/*TODO: 이름 누르면 팝업창 trigger 구현 */}
                                <Info style={{ width: "80px" }}>{name}</Info>
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
        )}
        <Submit>
            <ProfileButton content="거절" color="darkgray" style={{ marginRight: "15px" }} onClick={onClickButton}></ProfileButton>
            <ProfileButton content="승낙" color="orange" onClick={onClickButton}></ProfileButton>
        </Submit>
    </>
);
