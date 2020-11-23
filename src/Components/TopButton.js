import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const ButtonContainer = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 100%;
  background-color:${props=>props.theme.orange};
  color:${props=>props.theme.white};
  text-align:center;
`;

const TopButton =() =>(
    <ButtonContainer>
        <FontAwesomeIcon style ={{marginTop:"23%"}} size="2x" icon={faArrowUp}/>
    </ButtonContainer>
  );
  
  export default TopButton;
  