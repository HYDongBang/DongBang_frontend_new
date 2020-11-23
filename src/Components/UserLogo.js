import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`

  width: ${props => props.size || "64px" };
  height: ${props => props.size || "64px" };
  border-radius: 100%;
  background-color:${props=>props.theme.indigo};
  color:${props=>props.theme.white};
  text-align:center;
  font-size:${props => props.font || "30px" }; 
  line-height:2.1  ;
`;
 
// size에 들어가는 값!
// 톡 - 64px  > 기본값
// 프로필 관리 - 126px 
// 헤더 - 55px 
// 멤버관리, 지원자 관리, 타임테이블 - 50px 

//font에 들어가는 값
//톡 - 30px > 기본값
// 프로필 관리 - 59px 
// 헤더 - 26px 
// 멤버관리, 지원자 관리, 타임테이블 - 22px 
const UserLogo  =({name, size, font}) =>(
    <ButtonContainer size = {size} font = {font}>
        {name}
    </ButtonContainer>
  );
  

  export default UserLogo;
  