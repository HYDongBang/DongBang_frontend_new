import React from "react";
import styled from "styled-components";
import writing from "../Styles/Images/writingWhite.svg"
import painting from "../Styles/Images/paintingWhite.svg"
import team from "../Styles/Images/teamWhite.svg"
import speachBubbleLine from "../Styles/Images/speachBubbleLineWhite.svg"
import basketball from "../Styles/Images/basketballWhite.svg"

const Img = styled.img`
  width: 60px;
  height: 86px;
`;

const Logo = styled.div`
  width: 86px;
  height: 86px;
  border-radius: 38px;
  background-color:${props=>props.theme.indigo};
  text-align:center;
  margin:${props => props.margin};
`;

const ClubLogo =({type, margin}) =>(
  <Logo margin= {margin}>
  {type === "전시창작"&& <Img  src = {painting}/>}
  {type === "교양종교"&& <Img  src = {team}/>}
  {type === "학술"&&  <Img src = {writing}/>}
  {type === "공연예술"&&  <Img src = {speachBubbleLine}/> }
  {type === "체육"&&  <Img src = {basketball}/> }
  </Logo>
);

export default ClubLogo;
