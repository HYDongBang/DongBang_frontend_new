import React, { useState } from "react";
import styled from "styled-components";
import Popup from "reactjs-popup";

import movieCrop from "../../../Styles/Images/movieCrop.png"
import ClubLogo from "../../../Components/ClubLogo"
import ClubsContainer from "../ClubInfo/ClubsContainer";
import headerMovie from "../../../Styles/Images/header_movie.jpg"
import headerLibrary from "../../../Styles/Images/Library_header.jpg"
import headerMuseum from "../../../Styles/Images/header_museum.jpg"
import headerBeach from "../../../Styles/Images/header_beach.jpg"
import headerSports from "../../../Styles/Images/header_sports.jpg"



const Club = styled.div`
  height: 220px;
  width: 220px;
  text-align: center;
  border-radius: 20px;
  cursor: pointer;
  border: 1px solid #E5EAEE;
  box-shadow: #E5EAEE 0px 3px 3px ;
  overflow:hidden;
  margin: 20px;
`;

const Context = styled.div`
  padding: 50px 10px 10px 10px;
  height:70%;
`;

const ClubType = styled.div`
  margin: 7px auto 10px;
  font-family:"spoHanB";
  font-size:0.85em;
  color:${props=>props.theme.orange};
`;

const ClubName = styled.div`
  padding-bottom: 5px;
  font-family:"spoHanB";
  font-size:0.9em;
`;

const ClubText = styled.div`
  font-size: 0.8em;
  line-height: 1.2em;
`;

const ClubImg = styled.img`
  height: 35%;
  width: 100%;
`;

const Logo = styled.img`
  height: 86px;
  width: 86px;
  border-radius: 38px;
  box-shadow: 1px 1px 4px 0px grey;
  overflow: hidden;
`;

const Position = styled.div`
  position:absolute;
  margin-top:-45px;
  margin-left: 65px;
`;


const X = styled.a`
  cursor:pointer;
  position:absolute;
  right:-43px;
  top: -8px;
  font-size:2.5em;
  color: #E5EAEE;
  :hover{
    color: #E5EAEE;
  }
`;


const contentStyle ={
  width:"70%",
  height: "80%",
  borderRadius: "15px",
  padding: "0px",
};

export default  ({ clubs, myType }) => {
  {
    if (!clubs) {
      clubs = [];
    }
    return clubs.map((club) => {
      if (club.content === "1" || club.description === "1") {
        return;
      }
      return (
        <>
          {myType === "" && (
            <Popup
              key={club.id}
              trigger={
                <Club>
                  {club.type === "학술" && <ClubImg src = {headerLibrary}/>}
                  {club.type === "교양종교" && <ClubImg src = {headerBeach}/>}
                  {club.type === "전시창작" && <ClubImg src = {headerMuseum}/>}
                  {club.type === "체육" && <ClubImg src = {headerSports}/>}
                  {club.type === "공연예술" && <ClubImg src = {headerMovie}/>}
                  <Position>
                     <Logo src = {club.logoImage}/>
                  </Position>

                  <Context>
                    <ClubType> {club.type}</ClubType>
                    <ClubName>{club.name}</ClubName>
                    <ClubText>{club.description}</ClubText>
                  </Context>
                </Club>
              }
              modal
              contentStyle ={contentStyle} 
              lockScroll={true}
            >
              {close =>(
                <>
                <X onClick={close}>&times; </X>
                <ClubsContainer club={club} />
                </>
              )}
            </Popup>
          )}

          {myType.indexOf(`${club.type}`) !== -1 && (
            <Popup
              key={club.id}
              trigger={
                <Club >
                  {club.type === "학술" && <ClubImg src = {headerLibrary}/>}
                  {club.type === "교양종교" && <ClubImg src = {headerBeach}/>}
                  {club.type === "전시창작" && <ClubImg src = {headerMuseum}/>}
                  {club.type === "체육" && <ClubImg src = {headerSports}/>}
                  {club.type === "공연예술" && <ClubImg src = {headerMovie}/>}
                  <Position>
                     <Logo src = {club.logoImage}/>
                  </Position>
                  <Context>
                    <ClubType> {club.type}</ClubType>
                    <ClubName>{club.name}</ClubName>
                    <ClubText>{club.description}</ClubText>
                  </Context>
                </Club>
              }
              modal
              contentStyle ={contentStyle}
              lockScroll={true}
            >
              {close =>(
                <>
                <X onClick={close}>&times; </X>
                <ClubsContainer club={club} />
                </>
              )}
            </Popup>
          )}
        </>
      );
    });
  }
};
