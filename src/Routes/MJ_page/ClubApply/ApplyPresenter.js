import React, {useState} from "react";
import styled from "styled-components";
import ClubLogo from "../../../Components/ClubLogo";
import LineInput from "../../../Components/LineInput"
import Textarea from "../../../Components/Textarea"


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

const LeftImg = styled.div`

`;

const ClubName = styled.div`
    margin-bottom:10px;
`;

const LeftInfo = styled.div`

`;

const ClubType = styled.div`

`;

const LeftButtons = styled.div`

`;

const LeftButton = styled.div`

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
    margin-bottom:7px
`;


const Desc = styled.div`

`;



export default ({club, setAction, action})=>{

    return (
        <AContents>
        <Left>
            <LeftImg/>
            <LeftInfo>
                <ClubLogo type = "sports"/>
                <ClubType>체육</ClubType>
                <ClubName>HYSCUBA</ClubName>
            </LeftInfo>
            <LeftButtons>
                <LeftButton></LeftButton>
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
                    <Textarea/>
                </QA>
            </QAs>
        </Right>
        </AContents>
    )
}
