import React from "react";
import styled from "styled-components";
import ClubLogo from "../../../Components/ClubLogo";
import LineInput from "../../../Components/LineInput"
import Textarea from "../../../Components/Textarea"
import OrangeButton from "../../../Components/OrangeButton"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'

import { Scrollbars } from 'react-custom-scrollbars';


const AContents = styled.div`
    display:flex;
    padding:20px;
    width:100%;
    height:100%;
`;

const Left = styled.div`
    width:28%;
    text-align:center;
    border-right: 2px solid ${props=>props.theme.lightGray};
`;

const LeftImg = styled.img`
    width:80%;
    border-radius: 15px;
    margin-bottom: 40px;
`;

const ClubName = styled.div`
    margin:10px;
    font-size: 1.3em;
`;

const LeftInfo = styled.div`

`;

const ClubType = styled.div`

`;

const LeftButtons = styled.div`
  display:flex;
  width: fit-content;
  margin:40px auto 0px;
  position:absolute;
  bottom: 50px;
  width: 27%;
  padding: 0px 2.3%;
`;

const LeftButton = styled.div`
  width: 125px;
  height: 40px;
  border-radius: 5px;
  background-color:${props=>props.theme.white};
  box-shadow: #999fa5 0px 3px 6px 0px ;
  text-align:center;
  line-height:2.2;
  cursor:pointer;
  margin:2px;
`;

const Right = styled.form`
    width: 72%;
    padding:30px 13%;
`;

const Top = styled.div`
    text-align:center;
    margin-bottom:40px;
`;

const Title = styled.div`
    font-size: 1.8em;
    margin-bottom: 15px;
`;

const QAs = styled.div`
    height:70%;
`;

const QA = styled.div`
    margin-bottom: 30px;
`;


const Question = styled.div`
    margin-bottom:15px;
    font-size: 1.1em;
`;

const Choices = styled.div`
    width: 100%;
    display: flex;
`;


const Desc = styled.div`
    font-size: 0.8em;
    color: ${props => props.theme.lightGray};
`;

const Tarea = styled.div`
    width: 100%;
    padding:20px;
    height:150px;
    border: 1px solid ${props=>props.theme.lightGray};
`;


export default ({club, setAction, action, loading, data, onSubmit, myanswers, setMyAnswers, myApplication})=>{
    const handleInput = (e, idx) => {
        myanswers[idx] = e;
        if (e !== "") {
          console.log(myanswers);
        }
      };

    return (
        <AContents>
            {!loading && data.readClub &&(
                <>
                <Left>
                <LeftImg src = {club.logoImage}/>
                <LeftInfo>
                    <div style ={{margin:"auto", width:"fit-content", marginBottom:"13px"}}>
                    <ClubLogo type = "sports"/>
                    </div>
                    <ClubType>{club.type}</ClubType>
                    <ClubName>{club.name}</ClubName>
                </LeftInfo>
                <LeftButtons>
                    <LeftButton onClick={() => setAction("Info")} >
                        <FontAwesomeIcon  style ={{marginRight:"2%"}} size="1.5x" icon={faUserFriends}  />   
                        동아리 소개
                    </LeftButton>
                    <LeftButton onClick={() => setAction("Talk")}>
                        <FontAwesomeIcon  style ={{marginRight:"2%"}} size="1.5x" icon={faComments} />   
                        실시간 톡
                    </LeftButton>
                </LeftButtons>
            </Left>

            <Right onSubmit={myApplication, onSubmit}>    
                <Top>
                    <Title>지원하기</Title>
                    <Desc>동아리에 지원하기 위해서 아래 내용을 작성해주세요</Desc>
                </Top>
                <QAs>
                    <Scrollbars style ={{height:"100%"}}>
                        {data.readClub.questions.map((question, idx)=>{
                            return(
                            <>
                            {question.type ==="short" && 
                                <QA>
                                    <Question>{question.title}</Question>
                                    <LineInput onChange={(e) => handleInput(e.target.value, idx)}/>
                                </QA>
                            }
                            {question.type ==="long" && 
                                <QA>
                                <Question>{question.title}</Question>
                                    <Tarea>
                                        <Textarea width = "100%" height="100%" onChange={(e) => handleInput(e.target.value, idx)}/>
                                    </Tarea>
                                </QA>
                            }
                            {question.type ==="multiple" && 
                                <QA>
                                <Question>{question.title}</Question>
                                    <Choices>
                                        {question.choices.map((choice)=>(
                                            <label style={{ marginBottom: "5px", marginRight:"10px" }}>
                                                <input
                                                style={{ marginBottom: "5px", marginRight:"10px" }}
                                                type="radio"
                                                value={choice.subject}
                                                onChange={(e) => handleInput(e.target.value, idx)}
                                                ></input>
                                                {choice.subject}
                                            </label>
                                        ))}
                                    </Choices>    

                                </QA>
                            }
                            </>
                            )
                        })}
                    </Scrollbars>
                </QAs>
                <div style = {{width:"fit-content", margin:"auto"}}>
                    <OrangeButton content ="지원하기"/>
                </div>
            </Right>
            </>
            )}
        
        </AContents>
    )
}
