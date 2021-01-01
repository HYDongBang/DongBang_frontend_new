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
    border-right: 2px solid ${props=>props.theme.lightGray};
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
    width: 250px;
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


const Right = styled.div`
    width: 72%;
`;

const Talks = styled.div`
    display: flex;
    flex-direction:column;
    padding:20px;
    height:83%;
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

const Message = styled.div`
    width:100%; 
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
    height:100px;
`;

const SendButton = styled.div`
    width:100px;
    height: 100%;
    background-color:orange;
    border-radius:10px;
    padding:40px 33px;
    background-color: #FF7300;
    color: white;
`;




export default ({club, setAction, action})=>{

    return (
        <UContents>
            <Left>
                <Top>
                    <Filter>전체메시지</Filter>
                </Top>
                <Room>  
                    <RoomTime>20.11.09 13:56</RoomTime>
                    <RoomDesc>
                        <UserLogo name = "홍"/> 
                        <Preview>
                            <Name>홍길동</Name>
                            <TalkPreview>안녕하세요. 질문있습니다. 스쿠버 동아리에 들어가고 싶은데 초보인데 괜찮을까요?</TalkPreview>
                        </Preview>
                    </RoomDesc>
                </Room>
            </Left>

            <Right>
                <Talks>
                    <Talk>
                        <MyBubble>
                            스쿠버 다이빙 동아리에 가입하고 싶은데.. 한번도 배운적이 없어요. 괜찮을까요?
                        </MyBubble>
                        <DT style ={{float:"right"}}>
                            <Date>20.11.09</Date>
                            <Time>11:56</Time>
                        </DT>
                    </Talk>
                    <Talk>
                        <OtherBubble>
                            네, 저희 동아리에 들어오시면 기초부터 장비 사용법까지 알려드립니다. 걱정마세요!
                        </OtherBubble>
                        <DT style ={{float:"left"}}>
                            <Date>20.11.09</Date>
                            <Time>11:56</Time>
                        </DT>
                    </Talk>
                </Talks>
                <Message> 
                    <MessageInput  type = "text" placeholder = "메시지를 입력해주세요." />
                    <SendButton>전송</SendButton>
                </Message>
            </Right>
        </UContents>
    )
}
