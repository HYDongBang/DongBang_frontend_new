import React from "react";
import styled from "styled-components";

//현재 폰트가 잘 안먹힘.. 
const ButtonContainer = styled.button`
  width: ${props => props.width || "220px" };
  height: ${props => props.height || "50px" };
  border-radius: 38px;
  background-color:${props=>props.theme.orange};
  text-align:center;
  line-height:2.6;
  font-size:1.1em;
  font-family:raleBold;
  color:${props=>props.theme.white};
  cursor:pointer;
  border:none;
`;


const OrangeButton =({content, width, height, onClick}) =>(
    <ButtonContainer width= {width} height={height} onClick = {onClick}>{content}</ButtonContainer>
  );
  
  export default OrangeButton;
  
