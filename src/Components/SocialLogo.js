import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'
//  구글이랑 페이스북 아이콘이.. 왜 안뜨지?
// import { faGoo } from '@fortawesome/free-solid-svg-icons'

const ButtonContainer = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 100%;
  background-color:${props=>props.theme.white};
  border:1px solid #707070;
  box-shadow: #999fa5 0px 3px 6px 0px ;
  text-align:center;
  cursor:pointer;
`;

const SocialLogo =() =>(
    <ButtonContainer/>
  );
  
  export default SocialLogo;
  