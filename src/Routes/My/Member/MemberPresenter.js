import React from "react";
import styled from "styled-components";
import Popup from "reactjs-popup";
import ProfileButton from "../../../Components/ProfileButton";
import LineInput from "../../../Components/LineInput";
import MemberBox from "./MemberBox";
import { faPen } from "@fortawesome/free-solid-svg-icons";
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

const Members = styled.div`
    padding-bottom: 30px;
`;

const Rank = styled.div`
    font-size: 0.85em;
    font-family: spoHanB;
    padding: 10px 0px 13px 0px;
`;

const List = styled.div`
    width: 70%;
    display: flex;
    flex-wrap: wrap;
`;

const Box = styled.div`
    border: 1px solid ${props => props.theme.lightGray};
    border-radius: 5px;
    padding: 9px 12px;
    display: flex;
    justify-content: space-between;
    width: 23%;
    margin-right: 10px;
    margin-bottom: 10px;
    min-width: 120px;
    align-items: center;
`;

const Info = styled.div`
    display: flex;
    align-items: flex-end;
`;

const Name = styled.div`
    font-size: 0.85em;
`;

const StudentNumber = styled.div`
    font-size: 0.7em;
    color: ${props => props.theme.lightGray};
    padding: 0px 2px;
`;

const Edit = styled.div`
    cursor: pointer;
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
    right: -30px;
    top: -8px;
    font-size: 2.5em;
    color: #e5eaee;
`;

export default ({ master, administrator, member, onClickRadio, onClickLeave, loading }) => (
    <>
        <Title>
            <Main>멤버 관리</Main>
            <Sub>동아리 멤버를 관리할 수 있습니다.</Sub>
        </Title>
        {loading && <div>loading</div>}
        {!loading && (
        <Contents>
            <Members>
                <Rank>회장</Rank>
                <List>
                        <Box>
                            <Info>
                                <Name>{master.name}</Name>
                                <StudentNumber>{master.studentNumber}</StudentNumber>
                            </Info>
                            <Popup
                                trigger={<Edit><FontAwesomeIcon icon={faPen} /></Edit>}
                                modal
                                contentStyle={{ width: "600px", height: "300px", border: "none", borderRadius: "10px"}}
                            >
                                {close => (
                                    <>
                                    <X onClick={close}>&times; </X>
                                    <MemberBox type="master" list={master} onClickRadio={onClickRadio} onClickLeave={onClickLeave}></MemberBox>
                                    </>
                                )}
                            </Popup>
                        </Box>
                </List>
            </Members>
            <Members>
                <Rank>운영진</Rank>
                <List>
                    {administrator.map(list => {
                        return (
                            <Box key={list.id}>
                                <Info>
                                    <Name>{list.name}</Name>
                                    <StudentNumber>{list.studentNumber}</StudentNumber>
                                </Info>
                                <Popup
                                    trigger={<Edit><FontAwesomeIcon icon={faPen} /></Edit>}
                                    modal
                                    contentStyle={{ width: "600px", height: "300px", border: "none", borderRadius: "10px"}}
                                >
                                    {close => (
                                        <>
                                        <X onClick={close}>&times; </X>
                                        <MemberBox type="administrator" list={list} onClickRadio={onClickRadio} onClickLeave={onClickLeave}></MemberBox>
                                        </>
                                    )}
                                </Popup>
                            </Box>
                    )})}
                </List>
            </Members>
            <Members>
                <Rank>멤버</Rank>
                <List>
                    {member.map(list => (
                        <Box key={list.id}>
                            <Info>
                                <Name>{list.name}</Name>
                                <StudentNumber>{list.studentNumber}</StudentNumber>
                            </Info>
                            <Popup
                                trigger={<Edit><FontAwesomeIcon icon={faPen} /></Edit>}
                                modal
                                contentStyle={{ width: "600px", height: "300px", border: "none", borderRadius: "10px"}}
                            >
                                {close => (
                                    <>
                                    <X onClick={close}>&times; </X>
                                    <MemberBox type="member" list={list} onClickRadio={onClickRadio} onClickLeave={onClickLeave}></MemberBox>
                                    </>
                                )}
                            </Popup>
                        </Box>
                    ))}
                </List>
            </Members>
        </Contents>
        )}
    </>
);
