import React from "react";
import styled from "styled-components";
import ProfileButton from "../../../Components/ProfileButton";
import ClubLogo from "../../../Components/ClubLogo";
import BoxInput from "../../../Components/BoxInput";
import LineInput from "../../../Components/LineInput";
// import Loading from "../../../Components/";

import {READ_CLUB} from "./FormQueries"
import { useQuery } from "react-apollo-hooks";

import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    padding: 0px 7px;
`;

const Contents = styled.div``;

const Top = styled.div`
`;

const ClubInfo = styled.div`
    display:flex;
`;

const Text = styled.div`
    margin-bottom: 10px;
    font-size: 0.9em;
`;

const TBox = styled.div`
    width:60%;
    margin: 10px 20px;
`;

const ClubText = styled.div`
    -webkit-appearance: none;
    -webkit-border-radius: 0;
    font-size: 0.85em;
    font-family: raleRegular;
    border: 1px solid ${props => props.theme.lightGray};
    border-radius: 5px;
    padding: 7px 10px;
    width:60%;
`;

const CBox = styled.div`
    margin-top: 20px;

`;

const Box = styled.div`
    border: 1px solid ${props => props.theme.lightGray};
    padding: 10px;
    border-radius: 5px;
    margin-top:20px;
    width: 60%;
`;

const Inner = styled.div``;

const Wrapper = styled.div``;

const Question = styled.input`
    -webkit-appearance: none;
    -webkit-border-radius: 0;
    font-size: 0.85em;
    font-family: raleRegular;
    border:none;
    background-color:#F7F7F7;
    border-radius: 5px;
    padding: 7px 10px;
    width:80%;
`;

const Selector = styled.div``;

const Buttons = styled.div`
    display:flex;
    flex-direction: row-reverse;
    border-top: 1px solid ${props => props.theme.lightGray};
    margin-top: 15px;
    padding-top: 15px;
`;

const Button = styled.button`
    margin-left: 10px;
    border:none;
    background-color:white;
`;

const Options = styled.div``;

const OptionPlus = styled.div``;

const Submit = styled.div`
    padding-top: 80px;
    display: flex;
    justify-content: flex-end;
    padding-right: 40%;
    padding-bottom: 50px;
`;

export default ({
    select,
    setSelect,
    uLoading,
    uData,
}) => {
    const {loading:cLoading, data:cData} = useQuery(READ_CLUB, {variables:{id: uData === undefined || uData.readLoggedInUser.clubMaster.id}});
    const password2 = "123";
    return(
    <>
        {!cLoading && !uLoading&&
        <>
            <Title>
                <Main>가입 신청 양식</Main>
                <Sub>동아리 지원 양식을 편집할 수 있습니다.</Sub>
            </Title>
            <Contents>
                <Top>
                    <ClubInfo>
                        <ClubLogo type = "culture"/>
                        <TBox>
                            <Text>동아리 이름</Text>
                            <ClubText> {cData.readClub.name} </ClubText>
                        </TBox>
                    </ClubInfo>
                    <CBox>
                        <Text>동아리 설명</Text>
                        <ClubText> {cData.readClub.description} </ClubText>
                    </CBox>
                </Top>
            {cData.readClub.questions.map((question, idx)=>{
                const qTitle = question.title;
                console.log(qTitle)
                return (
                    <>
                        {question.type === "short" &&
                            <Box onClick={() => setSelect(question.id)}>
                                <Inner>
                                    <Wrapper>
                                        <div> {question.title} </div>
                                        <Question {...question} placeholder="질문"/>
                                    </Wrapper>
                                    <Selector></Selector>
                                </Inner>
                                {select === question.id &&
                                    <Buttons>
                                        <Button> <FontAwesomeIcon icon={faTrashAlt} style={{ fontSize: "1.1em", marginRight: "5px"}} />질문삭제</Button>
                                        <Button> <FontAwesomeIcon icon={faPlusSquare} style={{ fontSize: "1.1em", marginRight: "5px"}} />질문추가</Button>
                                    </Buttons>
                                } 
                            </Box>
                        }
                        {question.type === "multiple" &&
                            <Box onClick={() => setSelect(question.id)}>
                                <Inner>
                                    <Wrapper>
                                        <Question placeholder="질문"/>
                                    </Wrapper>
                                    <Options>
                                        <LineInput {...question.title} icon ="delete" placeholder="옵션" width="60%"/>
                                        <OptionPlus>옵션추가</OptionPlus>
                                    </Options>
                                </Inner>
                                {select === question.id &&
                                    <Buttons>
                                        <Button> <FontAwesomeIcon icon={faTrashAlt} style={{ fontSize: "1.1em", marginRight: "5px"}} />질문삭제</Button>
                                        <Button> <FontAwesomeIcon icon={faPlusSquare} style={{ fontSize: "1.1em", marginRight: "5px"}} />질문추가</Button>
                                    </Buttons>
                                }
                            </Box>
                        }
                    </>
                )
            })}
            </Contents>
            <Submit>
                <ProfileButton content="추가 " color="darkgray" style={{ marginRight: "15px" }}></ProfileButton>
                <ProfileButton content="저장" color="orange"></ProfileButton>
            </Submit>
        </>
        }
    </>
);
}
