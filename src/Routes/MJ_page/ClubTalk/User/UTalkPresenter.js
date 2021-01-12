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
    margin-top:10px;
    font-size: 1.5em;
`;

const LeftInfo = styled.div`

`;

const ClubType = styled.div`

`;

const LeftButtons = styled.div`
  display:flex;
  width: fit-content;
  margin:40px auto 0px;
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
`;

const Talks = styled.div`
    display: flex;
    flex-direction:column;
    padding:20px;
    height:80%;
`;

const Talk = styled.div`
    margin-bottom:15px;
`;

const DT = styled.div`
    width: fit-content;
    margin-right: 7px;
    margin-left: 7px;
`

const Date = styled.div`
    font-size:0.8em;
`;

const Time = styled.div`
    font-size:0.8em;
`;

const MyBubble = styled.div`
  width: 65%;
  float:right;
  box-shadow: #efefef 4px 4px 3px;
  background-color:#FFEFCC;
  border-radius: 15px 0px 15px 15px;
  padding: 15px;

`;

const OtherBubble = styled.div`
  width: 65%;
  float:left;
  box-shadow: #efefef 4px 4px 3px;
  background-color:#F7F7F7;
  border-radius: 15px 15px 0px 15px;
  padding: 15px;
`;

const Message = styled.form`
    width:100%; 
    height:17%;
    border: 1px solid #D1D1D1;
    border-radius: 10px;
    padding:10px;
    margin:7px;
    display:flex;
`;

const MessageInput = styled.textarea`
    border: none;
    overflow: auto;
    outline: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    font-size: 0.85em;
    resize: none;
    width:90%;
    height:100%;
`;

const SendButton = styled.button`
    width:100px;
    height: 100%;
    background-color:orange;
    border-radius:10px;
    padding:40px 33px;
    background-color: #FF7300;
    color: white;
    border:none;
`;




export default ({club,
     setAction,
     action, 
    userEmail,
    loading,
    data,
    text,
    onSubmit
})=>{
    return (
        <UContents>
            {!loading &&
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
                    <LeftButton onClick={() => setAction("Apply")}>
                    <FontAwesomeIcon  style ={{marginRight:"2%"}} size="1.5x"  icon={faPaperPlane}  />   
                        지원하기
                    </LeftButton>
                </LeftButtons>
            </Left>

            <Right>
                <Talks>
                    {data.readRoomByClubId !== undefined &&
                        <>{data.readRoomByClubId.messages.map((message)=>{
                            return (<>
                            {message.from.email === userEmail ?
                                <Talk>
                                    <MyBubble>
                                        {message.text}
                                    </MyBubble>
                                    <DT style ={{float:"right"}}>
                                        <Date>{message.createdAt}</Date>
                                        <Time>{message.createdAt}</Time>
                                    </DT>
                                </Talk>
                                :
                                <Talk>
                                    <OtherBubble>
                                        {message.text}
                                    </OtherBubble>
                                    <DT style ={{float:"left"}}>
                                        <Date>20.11.09</Date>
                                        <Time>11:56</Time>
                                    </DT>
                                </Talk>
                            }
                            </>)
                        })}</>
                    }
                
                </Talks>
                <Message onSubmit = {onSubmit}> 
                    <MessageInput {...text} type = "text" placeholder = "메시지를 입력해주세요." />
                    <SendButton>전송</SendButton>
                </Message>
            </Right>
            </>
            }
        </UContents>
    )
}
