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

const CultureLogo = styled.div`
  width: 86px;
  height: 86px;
  border-radius: 38px;
  background-color:${props=>props.theme.indigo};
  text-align:center;
  margin:${props => props.margin};
`;

const VolunteerLogo = styled.div`
  width: 86px;
  height: 86px;
  border-radius: 38px;
  background-color:${props=>props.theme.indiePink};
  text-align:center;
  margin:${props => props.margin};
`;

const AcademicLogo = styled.div`
  width: 86px;
  height: 86px;
  border-radius: 38px;
  background-color:${props=>props.theme.yellow};
  text-align:center;
  margin:${props => props.margin};
`;

const LanguageLogo = styled.div`
  width: 86px;
  height: 86px;
  border-radius: 38px;
  background-color:${props=>props.theme.indigo};
  text-align:center;
  margin:${props => props.margin};
`;

const SportsLogo = styled.div`
  width: 86px;
  height: 86px;
  border-radius: 38px;
  background-color:${props=>props.theme.indigo};
  text-align:center;
  margin:${props => props.margin};
`;

const ClubLogo =({type, margin}) =>(
  <>
  {type === "culture"&& <CultureLogo margin={margin}><Img  src = {painting}/></CultureLogo>}
  {type === "volunteer"&& <VolunteerLogo margin={margin}><Img  src = {team}/></VolunteerLogo>}
  {type === "academic"&& <AcademicLogo margin={margin}> <Img src = {writing}/> </AcademicLogo>}
  {type === "language"&& <LanguageLogo margin={margin}> <Img src = {speachBubbleLine}/> </LanguageLogo>}
  {type === "sports"&& <SportsLogo margin={margin}> <Img src = {basketball}/> </SportsLogo>}
  </>
);

export default ClubLogo;
