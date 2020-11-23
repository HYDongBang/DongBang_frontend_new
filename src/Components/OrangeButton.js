import React from "react";
import styled from "styled-components";


const ButtonContainer = styled.div`
  width: 256px;
  height: 59px;
  border-radius: 38px;
  background-color:${props=>props.theme.orange};
  text-align:center;
`;


const OrangeButton =({type, content}) =>(
    <ButtonContainer>{content}</ButtonContainer>
  );
  
  export default OrangeButton;
  