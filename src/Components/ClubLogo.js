import React from "react";
import styled from "styled-components";

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

//이미지가 안먹네.?
/* background-size: 0px;
background-repeat: no-repeat;
background-position: center center; */

//language, sports 색 정해야함.

const ClubLogo =({type}) =>(
  <>
  <Test/>
  {type === "culture"&& <CultureLogo/>}
  {type === "volunteer"&& <VolunteerLogo/>}
  {type === "academic"&& <AcademicLogo/>}
  {type === "language"&& <LanguageLogo/>}
  {type === "sports"&& <SportsLogo/>}
  </>
);

export default ClubLogo;
