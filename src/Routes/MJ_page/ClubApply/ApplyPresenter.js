import React, {useState} from "react";
import styled from "styled-components";
import ClubLogo from "../../../Components/ClubLogo";
import LineInput from "../../../Components/LineInput"
import Textarea from "../../../Components/Textarea"

import ScubaCrop from "../../../Styles/Images/Scuba_Crop.jpg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'



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
    margin-bottom:10px;
    font-size: 1.5em;
`;

const LeftInfo = styled.div`

`;

const ClubType = styled.div`

`;

const LeftButtons = styled.div`
  display:flex;
  margin-top:40px;
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

const Right = styled.div`
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

`;

const QA = styled.div`
    margin-bottom: 30px;
`;


const Question = styled.div`
    margin-bottom:7px;
`;


const Desc = styled.div`

`;



export default ({club, setAction, action})=>{

    return (
        <AContents>
        <Left>
            <LeftImg src = {ScubaCrop}/>
            <LeftInfo>
                <ClubLogo type = "sports"/>
                <ClubType>체육</ClubType>
                <ClubName>HYSCUBA</ClubName>
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

        <Right>    
            <Top>
                <Title>지원하기</Title>
                <Desc>동아리에 지원하기 위해서 아래 내용을 작성해주세요</Desc>
            </Top>
            <QAs>
                <QA>
                    <Question>이름</Question>
                    <LineInput/>
                </QA>
                <QA>
                    <Question>이름</Question>
                    <Textarea width = "100%" height="110px"/>
                </QA>
            </QAs>
        </Right>
        </AContents>
    )
}
