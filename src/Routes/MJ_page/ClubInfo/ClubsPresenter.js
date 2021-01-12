import React from "react";
import styled from "styled-components";
import InfoContainer from "./InfoContainer";
import MTalkContainer from "../ClubTalk/Master/MTalkContainer";
import UTalkContainer from "../ClubTalk/User/UTalkContainer";
import ApplyContainer from "../ClubApply/ApplyContainer";

import { useQuery } from "react-apollo-hooks";
import {LOG_IN} from "./ClubsQuries"

import { toast } from "react-toastify";

const Wrapper = styled.div`
  background: white;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  overflow-y: auto;
  border-radius: 15px;
`;



export default ({ action, setAction, club, loading, data, cLoading, cData }) => {
  const {
    data: { isLoggedIn }
  } = useQuery(LOG_IN);

  if ((action === "Apply" ||  action === "Talk") && !isLoggedIn){
    toast("로그인이 필요합니다");
    setAction("Info")
  }

    return (
        <Wrapper>
          {!loading && !cLoading && data &&
          <>
            {action === "Info" && (<InfoContainer club = {club} action={action} setAction ={setAction}/>)}
            {action === "MoreInfo" && (<InfoContainer club = {club} action={action} setAction ={setAction}/>)}
            {action === "Talk" && isLoggedIn &&
              <>
                {data.readLoggedInUser.clubMaster !== null && (<MTalkContainer club = {club} action={action} setAction ={setAction} userEmail = {data.readLoggedInUser.email}/>)}
                {data.readLoggedInUser.clubMaster === null && (<UTalkContainer club = {club} action={action} setAction ={setAction} userEmail = {data.readLoggedInUser.email} cData = {cData}/>)}
              </>
            }
            {action === "Apply" && isLoggedIn && (<ApplyContainer club = {club} action={action} setAction ={setAction}/>)}
          </>
          }
        </Wrapper>
    )
}