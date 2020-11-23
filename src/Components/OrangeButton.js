import React from "react";
import styled from "styled-components";

//현재 폰트가 잘 안먹힘.. 
const ButtonContainer = styled.div`
  width: 256px;
  height: 59px;
  border-radius: 38px;
  background-color:${props=>props.theme.orange};
  text-align:center;
  line-height:3.5;
  font-family:'raleBold';
  color:${props=>props.theme.white};
`;


const OrangeButton =({type, content}) =>(
    <ButtonContainer>{content}</ButtonContainer>
  );
  
  export default OrangeButton;
  
