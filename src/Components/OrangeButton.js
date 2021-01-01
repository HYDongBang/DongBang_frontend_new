import React from "react";
import styled from "styled-components";

//현재 폰트가 잘 안먹힘.. 
const ButtonContainer = styled.div`
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
`;


const OrangeButton =({content, width, height}) =>(
    <ButtonContainer width= {width} height={height}>{content}</ButtonContainer>
  );
  
  export default OrangeButton;
  
