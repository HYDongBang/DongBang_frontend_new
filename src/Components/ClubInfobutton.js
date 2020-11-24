import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'


const ButtonContainer = styled.div`
  width: 163px;
  height: 52px;
  border-radius: 5px;
  background-color:${props=>props.theme.white};
  box-shadow: #999fa5 0px 3px 6px 0px ;
  text-align:center;
  font-size: 22px;
  line-height:2.2;
  cursor:pointer;
`;


const ClubInfoButton =({content}) =>(
    <ButtonContainer>
        {content === "지원하기" && <>
            <FontAwesomeIcon  style ={{marginRight:"2%"}} size="1.5x" icon={faComments} />   
            {content}
        </>}
        {content === "실시간 톡" && <>
            <FontAwesomeIcon  style ={{marginRight:"2%"}} size="1.5x" icon={faPaperPlane} />   
            {content}
        </>}
        {content === "동아리소개" && <>
            <FontAwesomeIcon  style ={{marginRight:"2%"}} size="1.5x" icon={faUserFriends} />   
            {content}
        </>}
    </ButtonContainer>
  );
  
  export default ClubInfoButton;
  
