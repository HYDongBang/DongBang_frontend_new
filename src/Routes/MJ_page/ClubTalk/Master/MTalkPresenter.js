import React, {useState} from "react";
import styled from "styled-components";

import UserLogo from "../../../../Components/UserLogo";

const UContents = styled.div` 
    display:flex;
    padding:20px;
    width:100%;
    height:100%;
`;

const Left = styled.div`
    width:28%;
`;

const Top = styled.div`
    padding: 20px 0px;
    font-size: 1.2em;
`;

const Filter = styled.div`

`;

const Room = styled.div`
    border-bottom: 2px solid ${props=>props.theme.lightGray};
    border-top: 2px solid ${props=>props.theme.lightGray};
    padding: 10px;
    display: flex;
    height: 120px;
    flex-direction: column;
`;

const RoomTime = styled.div`
    font-size: 0.8em;
    color: ${props=>props.theme.lightGray};
    text-align: right;
    margin-bottom: 10px;
`;

const RoomDesc = styled.div`
    display:flex;
`;

const Preview = styled.div`
    width: 60%;
    margin-left: 15px;
`;

const Name = styled.div`
    color: ${props=>props.theme.indigo};
    font-size: 1.1em;
    margin-bottom: 10px;
`;

const TalkPreview = styled.div`
    -webkit-line-clamp:2;
    text-overflow:ellipsis;
    line-height:1.2em;
    display:-webkit-box;
    -webkit-box-orient: vertical;
    overflow:hidden;
`;


const Line = styled.div`
    width: 2px;
    height:100%;
    background-color: ${props=>props.theme.lightGray};
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
     rooms,
     room,
     roomsLoading,
     roomLoading,
     rid,
    setRid,
    userEmail,
    myText,
    onSubmit
    })=>{
    return (
        <UContents>
            {!roomsLoading && !roomLoading && <>
                <Left>
                <Top>
                    <Filter>전체메시지</Filter>
                </Top>
                {rooms !== undefined &&
                        <>{rooms.readRooms.map((myroom)=>{
                            return(<Room onClick={() => setRid(myroom.id)}>  
                                <RoomTime>{myroom.updatedAt}</RoomTime>
                                <RoomDesc>
                                    <UserLogo name = "홍"/> 
                                    <Preview>
                                        <Name>hi</Name>
                                        <TalkPreview>{myroom.recentMessage.text}</TalkPreview>
                                    </Preview>
                                </RoomDesc>
                            </Room>)
                        })
                        }</>}
            </Left>
            <Line/>

            <Right>
                <Talks>
                {room.readRoom !== undefined &&
                        <>{room.readRoom.messages.map((message)=>{
                            console.log(message);
                           return( <>
                           {message.from.email === userEmail ?
                            (<Talk>
                                <MyBubble>
                                    {message.text}
                                </MyBubble>
                                <DT style ={{float:"right"}}>
                                    <Date>20.11.09</Date>
                                    <Time>11:56</Time>
                                </DT>
                            </Talk>)
                            :
                            (<Talk>
                                <OtherBubble>
                                    {message.text}
                                </OtherBubble>
                                <DT style ={{float:"left"}}>
                                    <Date>20.11.09</Date>
                                    <Time>11:56</Time>
                                </DT>
                            </Talk>)
                        }
                        </>)
                        })
                        }</>}

                </Talks>
                <Message onSubmit = {onSubmit}> 
                    <MessageInput {...myText} type = "text" placeholder = "메시지를 입력해주세요." />
                    <SendButton>전송</SendButton>
                </Message>
            </Right>
            </>}
            
        </UContents>
    )
}
