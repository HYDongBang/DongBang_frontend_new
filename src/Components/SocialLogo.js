import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

const Container = styled.div`
display:flex;
`;
const ButtonContainer = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 100%;
  background-color:${props=>props.theme.white};
  box-shadow: #999fa5 0px 3px 6px 0px ;
  text-align:center;
  cursor:pointer;
  padding:11px;
  margin: 7px;
`;

const SocialLogo =() =>(
  <Container>
    <ButtonContainer>
      <FontAwesomeIcon style ={{color:"#3B5998"}}size="2x" icon={faFacebook}/>
    </ButtonContainer>
    <ButtonContainer>
      <FontAwesomeIcon style ={{color:"#FFD400"}} size="2x" icon={faComment}/>
    </ButtonContainer>
    <ButtonContainer>
      <FontAwesomeIcon style ={{color:"#176BEF"}} size="2x" icon={faGoogle}/>
    </ButtonContainer>
  </Container>
);
  
  export default SocialLogo;
  