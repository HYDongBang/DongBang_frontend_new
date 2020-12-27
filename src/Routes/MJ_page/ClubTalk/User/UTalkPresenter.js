import React, {useState} from "react";
import styled from "styled-components";

import ScubaCrop from "../../../../Styles/Images/Scuba_Crop.jpg"
import ClubLogo from "../../../../Components/ClubLogo";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const UContents = styled.div`
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

const Talks = styled.div`

`;

const Talk = styled.div`

`;

const Date = styled.div`

`;

const Time = styled.div`

`;

const MyBubble = styled.div`

`;

const OtherBubble = styled.div`

`;

const Message = styled.div`

`;

const MessageInput = styled.div`

`;

const SendButton = styled.div`

`;

export default ({club, setAction, action})=>{

    return (
        <UContents>
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
                    <LeftButton onClick={() => setAction("Apply")}>
                    <FontAwesomeIcon  style ={{marginRight:"2%"}} size="1.5x"  icon={faPaperPlane}  />   
                        지원하기
                    </LeftButton>
                </LeftButtons>
            </Left>

            <Right>
                <Talks>
                    <Talk>
                        <Date>20.11.09</Date>
                        <Time>11:56</Time>
                        <MyBubble>
                            스쿠버 다이빙 동아리에 가입하고 싶은데.. 한번도 배운적이 없어요. 괜찮을까요?
                        </MyBubble>
                    </Talk>
                    <Talk>
                        <Date>20.11.09</Date>
                        <Time>12:56</Time>
                        <OtherBubble>
                            네, 저희 동아리에 들어오시면 기초부터 장비 사용법까지 알려드립니다. 걱정마세요!
                        </OtherBubble>
                    </Talk>
                </Talks>
                <Message> 
                    <MessageInput/>
                    <SendButton />
                </Message>
            </Right>
        </UContents>
    )
}
