import React from "react";
import styled from "styled-components";
import InfoContainer from "./InfoContainer";
import MTalkContainer from "../ClubTalk/Master/MTalkContainer";
import UTalkContainer from "../ClubTalk/User/UTalkContainer";
import ApplyContainer from "../ClubApply/ApplyContainer";

const Wrapper = styled.div`
  background: white;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  overflow-y: auto;
  border-radius: 15px;
`;

export default ({ action, setAction, club, loading, data }) => {
    return (
        <Wrapper>
          {!loading && data &&
          <>
            {action === "Info" && (<InfoContainer club = {club} action={action} setAction ={setAction}/>)}
            {action === "MoreInfo" && (<InfoContainer club = {club} action={action} setAction ={setAction}/>)}
            {action === "Talk" &&
              <>
                {data.readLoggedInUser.clubMaster !== null && data.readLoggedInUser.clubMaster.id === club.id && (<MTalkContainer club = {club} action={action} setAction ={setAction}/>)}
                {data.readLoggedInUser.clubMaster === null && (<UTalkContainer club = {club} action={action} setAction ={setAction}/>)}
              </>
            }
            {action === "Apply" && (<ApplyContainer club = {club} action={action} setAction ={setAction}/>)}
          </>
          }
        </Wrapper>
    )
}