import React from "react";
import styled from "styled-components";
// import main from "../Styles/Images/main.jpg"
// import writing from "../Styles/Images/writing.svg"
// import painting from "../Styles/Images/painting.svg"
// import team from "../Styles/Images/team.svg"
// import speachBubbleLine from "../Styles/Images/speachBubbleLine.svg"
// import basketball from "../Styles/Images/basketball.svg"

const CultureLogo = styled.div`
  width: 86px;
  height: 86px;
  border-radius: 38px;
  background-color:${props=>props.theme.indigo};
`;

const VolunteerLogo = styled.div`
  width: 86px;
  height: 86px;
  border-radius: 38px;
  background-color:${props=>props.theme.indiePink};
`;

const AcademicLogo = styled.div`
  width: 86px;
  height: 86px;
  border-radius: 38px;
  background-color:${props=>props.theme.yellow};
`;

const LanguageLogo = styled.div`
  width: 86px;
  height: 86px;
  border-radius: 38px;
  background-color:${props=>props.theme.indigo};
`;

const SportsLogo = styled.div`
  width: 86px;
  height: 86px;
  border-radius: 38px;
  background-color:${props=>props.theme.indigo};
`;

const Test = styled.div`
background-size: 82px;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url("data:../Styles/Images/basketball.svg");
`;
const Img = styled.img`

`;

//이미지가 안먹네.?
/* background-size: 0px;
background-repeat: no-repeat;
background-position: center center; */

//language, sports 색 정해야함.

const ClubLogo =({type}) =>(
  <>
  <Test/>
  {type === "culture"&& <CultureLogo> </CultureLogo>}
  {type === "volunteer"&& <VolunteerLogo/>}
  {type === "academic"&& <AcademicLogo/>}
  {type === "language"&& <LanguageLogo/>}
  {type === "sports"&& <SportsLogo/>}
  </>
);

export default ClubLogo;
