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

//중간에 이미지 넣는건 이미지 받고 나서 진행할 예정.
/* background-size: 0px;
background-repeat: no-repeat;
background-position: center center; */

//language, sports 색 정해야함.

const ClubLogo =({type}) =>(
  <>
  {type === "culture"&& <CultureLogo/>}
  {type === "volunteer"&& <VolunteerLogo/>}
  {type === "academic"&& <AcademicLogo/>}
  {type === "language"&& <LanguageLogo/>}
  {type === "sports"&& <SportsLogo/>}
  </>
);

export default ClubLogo;
