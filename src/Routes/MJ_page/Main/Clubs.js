import React, { useState } from "react";
import styled from "styled-components";
import Popup from "reactjs-popup";
import InfoContainer from "../ClubInfo/InfoContainer";

const Club = styled.div`
  height: 230px;
  width: 15vw;
  text-align: center;
  border-radius: 10px;
  margin: 20px;
  &:hover {
    cursor: pointer;
  }
`;

const Context = styled.div`
  padding: 15px;
  border-top: 1px solid ${(props) => props.theme.gray};
`;

const ClubName = styled.div`
  padding-bottom: 5px;
`;

const ClubText = styled.div`
  font-size: 0.8em;
`;

const ClubImg = styled.img`
  height: 72%;
  width: 100%;
`;

export const Clubs = ({ clubs, myType }) => {
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
                  <ClubImg>
                    <img></img>
                  </ClubImg>

                  <Context>
                    <ClubName>{club.name}</ClubName>
                    <ClubText>{club.bio}</ClubText>
                  </Context>
                </Club>
              }
              modal
            >
              <ClubInfoContainer club={club} />
            </Popup>
          )}

          {myType.indexOf(`${club.type}`) !== -1 && (
            <Popup
              key={club.id}
              trigger={
                <Club>
                  <ClubImg>
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        padding: "7% 25%",
                      }}
                      src={club.logoImage}
                    ></img>
                  </ClubImg>
                  <Context>
                    <ClubName>{club.name}</ClubName>
                    <ClubText>{club.bio}</ClubText>
                  </Context>
                </Club>
              }
              modal
            >
              <ClubInfoContainer club={club} />
            </Popup>
          )}
        </>
      );
    });
  }
};
