import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  width: 137px;
  height: 45px;
  border-radius: 5px;
  background-color:${props => props.color === "orange" && "#FF7300" }; 
  background-color:${props => props.color === "darkgray" && "#484C4F" }; 
  background-color:${props => props.color === "gray" && "#D1D1D1" }; 
  color:${props=>props.theme.white};
  text-align:center;
  font-size: 18px;
  line-height:2.3;
`;

//color -  gray, darkgray, orange 있음
const ProfileButton =({content, color}) =>(
    <ButtonContainer color = {color}>
        {content}
    </ButtonContainer>
  );
  
  export default ProfileButton;
  
