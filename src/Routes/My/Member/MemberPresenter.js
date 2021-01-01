import React from "react";
import styled from "styled-components";
import ProfileButton from "../../../Components/ProfileButton";
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
    overflow-x: ;
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
    width: 60%;
    display: flex;
    flex-wrap: wrap;
`;

const Box = styled.div`
    border: 1px solid ${props => props.theme.lightGray};
    border-radius: 5px;
    padding: 9px 12px;
    display: flex;
    justify-content: space-between;
    width: 30%;
    margin-right: 10px;
    margin-bottom: 10px;
    min-width: 180px;
`;

const Name = styled.div`
    cursor: pointer;
    font-size: 0.85em;
`;

const Edit = styled.div`
    cursor: pointer;
`;

const Submit = styled.div`
    padding-top: 80px;
    display: flex;
    justify-content: flex-end;
    padding-right: 40%;
    padding-bottom: 50px;
`;

export default ({ president, manager, member }) => (
    <>
        <Title>
            <Main>멤버 관리</Main>
            <Sub>동아리 멤버를 관리할 수 있습니다.</Sub>
        </Title>
        <Contents>
            <Members>
                <Rank>회장단</Rank>
                <List>
                    {president.map(({ name }) => (
                        <Box>
                            <Name>{name}</Name>
                            <Edit>
                                <FontAwesomeIcon icon={faPen} />
                            </Edit>
                        </Box>
                    ))}
                </List>
            </Members>
            <Members>
                <Rank>운영진</Rank>
                <List>
                    {manager.map(({ name }) => (
                        <Box>
                            <Name>{name}</Name>
                            <Edit>
                                <FontAwesomeIcon icon={faPen} />
                            </Edit>
                        </Box>
                    ))}
                </List>
            </Members>
            <Members>
                <Rank>멤버</Rank>
                <List>
                    {member.map(({ name }) => (
                        <Box>
                            <Name>{name}</Name>
                            <Edit>
                                <FontAwesomeIcon icon={faPen} />
                            </Edit>
                        </Box>
                    ))}
                </List>
            </Members>
        </Contents>
        <Submit>
            <ProfileButton content="저장" color="gray" hover="orange"></ProfileButton>
        </Submit>
    </>
);
