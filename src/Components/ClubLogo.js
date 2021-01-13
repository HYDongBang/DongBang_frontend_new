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
`;

const VolunteerLogo = styled.div`
  width: 86px;
  height: 86px;
  border-radius: 38px;
  background-color:${props=>props.theme.indiePink};
  text-align:center;
`;

const AcademicLogo = styled.div`
  width: 86px;
  height: 86px;
  border-radius: 38px;
  background-color:${props=>props.theme.yellow};
  text-align:center;
`;

const LanguageLogo = styled.div`
  width: 86px;
  height: 86px;
  border-radius: 38px;
  background-color:${props=>props.theme.indigo};
  text-align:center;
`;

const SportsLogo = styled.div`
  width: 86px;
  height: 86px;
  border-radius: 38px;
  background-color:${props=>props.theme.indigo};
  text-align:center;
`;

const ClubLogo =({type}) =>(
  <>
  {type === "culture"&& <CultureLogo><Img  src = {painting}/></CultureLogo>}
  {type === "volunteer"&& <VolunteerLogo><Img  src = {team}/></VolunteerLogo>}
  {type === "academic"&& <AcademicLogo> <Img src = {writing}/> </AcademicLogo>}
  {type === "language"&& <LanguageLogo> <Img src = {speachBubbleLine}/> </LanguageLogo>}
  {type === "sports"&& <SportsLogo> <Img src = {basketball}/> </SportsLogo>}
  </>
);

export default ClubLogo;
