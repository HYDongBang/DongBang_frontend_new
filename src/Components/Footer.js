import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-solid-svg-icons'

//현재 폰트가 잘 안먹힘.. 
const Footer = styled.footer`
  width: 100%;
  height: 160px;
  background-color:${props=>props.theme.orange};
  cursor:default;
`;
const Git = styled.a`
  width: 50px;
  height: 60px;
  background-color:${props=>props.theme.black};
  cursor:pointer;
`;

export default () =>
   <Footer>
       <div>
         <Git href="#"/>
         <a href="#" class="linkedin"></a>
         <a href="#" class="facebook"></a>
         <a href="#" class="skype"></a>
         <a href="#" class="flickr"></a>
         <div>Copyright &copy; 2020 designed by DongBang</div>
       </div>
   </Footer>
;
