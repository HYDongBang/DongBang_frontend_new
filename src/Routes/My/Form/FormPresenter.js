import React from "react";
import styled from "styled-components";
import ProfileButton from "../../../Components/ProfileButton";
import ClubLogo from "../../../Components/ClubLogo";
import LineInput from "../../../Components/LineInput";
import Loading from "../../../Components/Loading" ;

import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Popup from "reactjs-popup";
import NewFormPresenter from "./NewFormPresenter";



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

const Button = styled.div`
    border:none;
    background-color:transparent;
    text-align:end;
    cursor:pointer;
`;

const Option = styled.div`
    display: flex;
    width:80%;
    justify-content: space-between;
`;

const OptionPlus = styled.div`
    width: 55px;
    font-size: 0.8em;
    margin-top: 15px;
    color: ${props => props.theme.orange};
    cursor:pointer;
    `;

const Submit = styled.div`
    padding-top: 80px;
    display: flex;
    justify-content: flex-end;
    padding-right: 40%;
    padding-bottom: 50px;
`;

const DropdownStyle  = styled.div`
    margin-left: 1%;
    width: 19%;
    color: black;
    border: 1px solid black;
    text-align: center;
    line-height: 1.6em;
    border-radius: 5px;
    
`

const X = styled.div`
cursor: pointer;
position: absolute;
right: -37px;
top: -5px;
font-size: 2.3em;
color: #e5eaee;
`;


const contentStyle ={
    width:"35%",
    height: "25%",
    borderRadius: "15px",
    padding: "25px",
  };
  

export default ({
    data,
    myloading,
    questions,
    setQuestions,
    onDeleteQuestion,
    onDeleteChoice,
    myType,
    myTitle,
    onCreateQuestion,
    plusOption,
    setPlusOption,
    myChoice,
    onCreateChoice,
    setCheck,
    check,
    onUpdateQuestions,
    type, 
    name,
    des
}) => {
    console.log(data);
    const handleInput = e => {
        const key = e.target.getAttribute("data-key");
        const value = e.target.value;
        const index = questions.indexOf(questions.filter(element => element.id == key)[0]);
        setQuestions(prev => {
            prev[index].title = value;
            return prev;
        });
        setCheck(!check);
    };


    const changeType = (e,i) => {
        console.log(e);
        const index = questions.indexOf(questions.filter(element => element.id == i)[0]);
        setQuestions(prev => {
            prev[index].type = e;
            return prev;
        });
        setCheck(!check);
    };

    return(
    <>
        {!myloading && data.readLoggedInUser!==undefined? 
        (<>
            <Title>
                <Main>가입 신청 양식</Main>
                <Sub>동아리 지원 양식을 편집할 수 있습니다.</Sub>
            </Title>
            <Contents>
                <Top>
                    <ClubInfo>
                        <ClubLogo type = {type}/>
                        <TBox>
                            <Text>동아리 이름</Text>
                            <ClubText> {name} </ClubText>
                        </TBox>
                    </ClubInfo>
                    <CBox>
                        <Text>동아리 설명</Text>
                        <ClubText> {des} </ClubText>
                    </CBox>
                </Top>
            {questions.map((question, idx)=>{
                return (
                    <>
                        {question.type === "short" &&
                            <Box>
                                <Inner>
                                    <Wrapper>
                                        <Question  style = {{width: "100%"}}  value = {question.title} onChange={handleInput}  placeholder= {question.title} data-key={question.id}/>
                                        <DropdownStyle >
                                            주관식
                                        </DropdownStyle>
                                    </Wrapper>
                                </Inner>
                                <Button> <FontAwesomeIcon onClick={() => onDeleteQuestion(question.id)} icon={faTrashAlt} style={{ fontSize: "1.1em", marginRight: "5px"}} /></Button>

                               
                            </Box>
                        }
                        {question.type === "multiple" &&
                            <Box>
                                <Inner>
                                    <Wrapper>
                                        <Question style = {{width: "100%"}} value = {question.title} onChange={handleInput} placeholder= {question.title} data-key={question.id}/>
                                        <DropdownStyle >
                                           객관식
                                        </DropdownStyle>

                                    </Wrapper>
                                    <>
                                    {question.choices.map((choice, idx)=>{
                                                return (
                                                        <LineInput value = {choice.subject} marginB="10px" onClick={() => onDeleteChoice(choice.id, question.id)} icon ="delete" placeholder="옵션" width="80%"/>
                                                )
                                            })}
                                    {plusOption === question.id ?
                                        <Option>
                                            <OptionPlus onClick={() => setPlusOption()} >옵션추가</OptionPlus>
                                            <LineInput {...myChoice} icon ="correct" placeholder="추가할 옵션을 적어주세요" width="88%"  onClick={() => onCreateChoice(question.id)}  />
                                        </Option>
                                        : <>
                                            <OptionPlus onClick={() => setPlusOption(question.id)} >옵션추가</OptionPlus>
                                        </> 
                                    }                                          
                                    </>
                                </Inner>
                                <Button > <FontAwesomeIcon  onClick={() => onDeleteQuestion(question.id)} icon={faTrashAlt} style={{ fontSize: "1.1em", marginRight: "5px"}} /> </Button>
                            </Box>
                        }
                    </>
                )
            })}
            </Contents>
            <Submit>
                <Popup
                trigger={<ProfileButton content="추가 " color="darkgray" style={{ marginRight: "15px" }}/>}
                modal
                contentStyle ={contentStyle} 
                lockScroll={true}
                >
                {close =>(
                    <>
                    <X onClick={close}>&times; </X>
                    <NewFormPresenter 
                    myType  ={myType}
                    myTitle ={myTitle}
                    onCreateQuestion={onCreateQuestion}
                    />
                    </>
                )}
                </Popup>
                <ProfileButton onClick={() => onUpdateQuestions()} content="저장" color="orange"></ProfileButton>
            </Submit>
        </>)
        :
        <Loading/>
        }
    </>
);
}
