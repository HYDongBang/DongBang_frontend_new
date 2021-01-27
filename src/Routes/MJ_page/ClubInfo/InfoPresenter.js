import React from "react";
import styled from "styled-components";
import ClubLogo from "../../../Components/ClubLogo";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons'

import { useQuery } from "react-apollo-hooks";
import {READ_CLUB} from "./InfoQueries"

const OrangeButton = styled.div`
  width: 220px;
  height: 50px;
  border-radius: 38px;
  background-color:${props=>props.theme.orange};
  text-align:center;
  line-height:2.6;
  font-size:1.1em;
  font-family:raleBold;
  color:${props=>props.theme.white};
  cursor:pointer;
`;

const HeaderImg = styled.img`
    width:100%;
    height:45%;
    overflow:hidden;
`;

const Buttons = styled.div`
  position:absolute;
  top:15px;
  display:flex;
  right:30px;
`;

const Club = styled.div`
    text-align:center;
    width:fit-content;
    margin: 5px auto 0px;
`;

const Type = styled.div`
 margin:8px;
 color: ${props=>props.theme.indigo};
`;

const Name = styled.div`
 margin:5px;
 font-size:1.2em;
`;

const Desc = styled.div`
 padding: 25px 7% 0px 7%;
 line-height: 1.5em;
 font-size:0.9em;
`;

const ClubInfo = styled.div`
    justify-content:space-between;
    display:flex;
    padding: 0px 7%;
    line-height:2em;
`;

const LeftInfo = styled.div`
    float:left;
    display:flex;
`;

const RightInfo = styled.div`
    float:right;
    display:flex;
`;

const Tag = styled.div`
color: ${props=>props.theme.orange};
margin-right:5px;
`;

const Icon = styled.a`
    margin-left:10px;
    color:  ${props=>props.theme.black};
`;


const Info = styled.div`
margin-right:15px;
`;

const Line = styled.div`
margin: 15px auto;
height:1px;
width: 86%;
background-color:black;
`;

const MLine = styled.div`
margin: 25px auto;
height:18px;
background-color:#F7F7F7;
`;

const Activities = styled.div`
    width:86%;
    margin:auto;
    display:flex;
`;

const Activity = styled.div`
    width:50%;
    height: 30%;
    padding:2%;
`;


const ActImg = styled.img`
    width: 100%;
`;

const ActTitle = styled.div`
    margin:15px 0;
    font-size: 1.2em;
`;

const ActDes = styled.div`
    line-height:1.3em;
    font-size:0.8em;
`;

const ButtonContainer = styled.div`
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



export default ({club, setAction, action})=>{

const { loading, data } = useQuery(READ_CLUB, {variables:{id: club.id}});
let clubContent;

if (!loading && data.readClub) {
    const content = data.readClub.content;
    clubContent = content.split("\n").map(function (item, idx) {
      return (
        <span key={idx}>
          {item}
          <br />
        </span>
      );
    });
}

return (
    <>
    {!loading && data.readClub &&
    (
        <>
        <HeaderImg src = {data.readClub.clubImage}>
        </HeaderImg>
        <Club>
            <ClubLogo margin="auto" type = "sports"/>
            <Type>{data.readClub.type}</Type>
            <Name>{data.readClub.name}</Name>
        </Club>
        <Buttons>
            <ButtonContainer onClick={() => setAction("Talk")} >
                <FontAwesomeIcon  style ={{marginRight:"2%",fontSize:"1.2em"}} icon={faComments} />   
                실시간 톡
            </ButtonContainer>

            <ButtonContainer onClick={() => setAction("Apply")} >
                <FontAwesomeIcon  style ={{marginRight:"2%",fontSize:"1.2em"}}   icon={faPaperPlane}  />   
                지원하기
            </ButtonContainer>
        </Buttons>

        <Desc> 
          {clubContent}
        </Desc>

        <Line/>

        <ClubInfo>
            <LeftInfo>
                <Tag>회합일정</Tag> <Info>{data.readClub.partyDay}</Info>
                <Tag>뒷풀이</Tag> <Info>{data.readClub.party?"있음":"없음"}</Info>
                <Tag>인원수</Tag> <Info>{data.readClub.numberOfMembers}명</Info>
                <Tag>연합여부</Tag> <Info>{data.readClub.isUnion?"연합":"비연합"}</Info>
            </LeftInfo>
            <RightInfo>
                <Tag>메일</Tag> <Info>{data.readClub.email}</Info>
                <Tag>연락처</Tag> <Info>{data.readClub.phoneNumber}</Info>
                <Icon href = {data.readClub.facebookUrl} target="_blank" title="페이스북">
                    <FontAwesomeIcon style={{fontSize:"1.8em"}} icon={faFacebookSquare}/>
                </Icon> 
                <Icon href = {data.readClub.instagramUrl} target="_blank" title="인스타그램">
                    <FontAwesomeIcon style={{fontSize:"1.8em"}} icon={faInstagramSquare}/>
                </Icon> 
            </RightInfo>
        </ClubInfo>

        {action === "Info" && (
                <div style={{margin:"10px auto", width:"220px"}}>
                <OrangeButton onClick={() => setAction("MoreInfo")}>동아리 활동 보기</OrangeButton>
                </div>)}
        {action === "MoreInfo" && (
            <>
                <MLine/>
                <Activities >
                    {data.readClub.posts.map((post)=>{
                        return(
                        <Activity>
                            <ActImg src = {post.fileUrl}/>
                            <ActTitle>
                                {post.title}
                            </ActTitle>
                            <ActDes>
                                {post.content}
                            </ActDes>
                        </Activity>
                        )
                    })}
                </Activities>
            </>
            )}

        </>         
    ) }
</>
)
}