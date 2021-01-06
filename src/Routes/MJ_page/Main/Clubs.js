import React, { useState } from "react";
import styled from "styled-components";
import Popup from "reactjs-popup";

import movieCrop from "../../../Styles/Images/movieCrop.png"
import ClubLogo from "../../../Components/ClubLogo"
import ClubsContainer from "../ClubInfo/ClubsContainer";


const Club = styled.div`
  height: 250px;
  width: 250px;
  text-align: center;
  border-radius: 20px;
  margin: 20px;
  cursor: pointer;
  border: 1px solid #E5EAEE;
  box-shadow: #E5EAEE 0px 3px 3px ;
  overflow:hidden;
  margin: 20px 5%;
`;

const Context = styled.div`
  padding: 50px 10px 10px 10px;
  height:70%;
`;

const ClubType = styled.div`
  margin: 10px auto 15px;
`;

const ClubName = styled.div`
  padding-bottom: 5px;
`;

const ClubText = styled.div`
  font-size: 0.8em;
  line-height: 1.2em;
`;

const ClubImg = styled.img`
  height: 35%;
  width: 100%;
`;

const Position = styled.div`
  position:absolute;
  margin-top:-45px;
  margin-left: 80px;
`;


const X = styled.a`
  cursor:pointer;
  position:absolute;
  right:-30px;
  top: -8px;
  font-size:2.5em;
  color: #E5EAEE;
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
      return (
        
        <>
          {myType === "" && (
            <Popup
              key={club.id}
              trigger={
                <Club>
                  <ClubImg src = {movieCrop}/>
                  <Position>
                     <ClubLogo type = "culture"/>
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
                <Club src = {movieCrop}>
                  <ClubImg/>
                  <Position >
                     <ClubLogo type = "culture"/>
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
