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

import {DropdownButton, Dropdown} from "react-bootstrap"


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
    display:flex;
    flex-direction:column;
`;

const Inner = styled.div``;

const Wrapper = styled.div`
    margin-bottom: 10px;
    display:flex;
    `;

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

const Selector = styled.div`
    border: 1px solid black;
    border-radius: 5px;
    margin-left: 10px;
    width: 18%;
    `;

const Buttons = styled.div`
    display:flex;
    flex-direction: row-reverse;
    border-top: 1px solid ${props => props.theme.lightGray};
    margin-top: 15px;
    padding-top: 15px;
`;

const Button = styled.div`
    border:none;
    background-color:transparent;
    text-align:end;
`;

const Options = styled.div``;

const OptionPlus = styled.div`
    display: flex;
    flex-direction: row-reverse;
    width: 80%;
    font-size: 0.8em;
    margin-top: 10px;
    color: ${props => props.theme.darkGray};
    `;

const Submit = styled.div`
    padding-top: 80px;
    display: flex;
    justify-content: flex-end;
    padding-right: 40%;
    padding-bottom: 50px;
`;

const DropdownStyle ={
    width: "100%",
    backgroundColor: "transparent",
    color: "black",
    border: "1px solid black",
    "&:focus":{
        boxShadow: "0 0 0 0.2rem rgb(255 200 162)"
    },

}

export default ({
    Loading,
    questions,
    setQuestions,
    name,
    description,
    onDeleteQuestion,
    onDeleteChoice
}) => {
    const handleInput = e => {
        const key = e.target.getAttribute("data-key");
        const value = e.target.value;
        const index = questions.indexOf(questions.filter(element => element.id == key)[0]);
        setQuestions(prev => {
            prev[index].title = value;
            return prev;
        });
        console.log(questions);

    };


    return(
    <>
        {!Loading && 
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

                            <ClubText> {name.value} </ClubText>
                        </TBox>
                    </ClubInfo>
                    <CBox>
                        <Text>동아리 설명</Text>
                        <ClubText> {description.value} </ClubText>
                    </CBox>
                </Top>
            {questions.map((question, idx)=>{
                return (
                    <>
                        {question.type === "short" &&
                            <Box>
                                <Inner>
                                    <Wrapper>
                                        <Question value = {question.title}  style = {{width: "100%"}}onChange={handleInput} placeholder="질문" data-key={question.id}/>
                                        <Dropdown style ={{width:"19%",paddingLeft:"1%"}}>
                                            <Dropdown.Toggle style ={DropdownStyle}>주관식</Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item>주관식</Dropdown.Item>
                                                <Dropdown.Item>객관식</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Wrapper>
                                </Inner>
                                <Button> <FontAwesomeIcon onClick={() => onDeleteQuestion(question.id)} icon={faTrashAlt} style={{ fontSize: "1.1em", marginRight: "5px"}} /></Button>

                               
                            </Box>
                        }
                        {question.type === "multiple" &&
                            <Box>
                                <Inner>
                                    <Wrapper>
                                        <Question value = {question.title}  style = {{width: "100%"}} onChange={handleInput} placeholder="질문" data-key={question.id}/>
                                        <Dropdown style ={{width:"19%",paddingLeft:"1%"}}>
                                            <Dropdown.Toggle style ={DropdownStyle}>객관식</Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item>주관식</Dropdown.Item>
                                                <Dropdown.Item>객관식</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Wrapper>

                                    {question.choices.map((choice, idx)=>{
                                            return (
                                                <Options>
                                                    <LineInput value = {choice.subject} onClick={() => onDeleteChoice(choice.id)} icon ="delete" placeholder="옵션" width="80%"/>
                                                    <OptionPlus>옵션추가</OptionPlus>
                                                </Options>
                                            )
                                        })}
                                </Inner>
                                {/* 함수 안되게 해놓기 위해.. */}
                                {/* <Button > <FontAwesomeIcon  onClick={() => onDeleteQuestion(question.id)} icon={faTrashAlt} style={{ fontSize: "1.1em", marginRight: "5px"}} /> </Button> */}
                                <Button > <FontAwesomeIcon  icon={faTrashAlt} style={{ fontSize: "1.1em", marginRight: "5px"}} /> </Button>
                               
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
