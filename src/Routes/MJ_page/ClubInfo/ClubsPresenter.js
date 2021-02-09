import React from "react";
import styled from "styled-components";
import InfoContainer from "./InfoContainer";
import MTalkContainer from "../ClubTalk/Master/MTalkContainer";
import UTalkContainer from "../ClubTalk/User/UTalkContainer";
import ApplyContainer from "../ClubApply/ApplyContainer";


import { useQuery } from "react-apollo-hooks";
import {LOG_IN} from "./ClubsQuries"

import { toast } from "react-toastify";
import { Scrollbars } from 'react-custom-scrollbars';

import Loading from "../../../Components/Loading";

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

  if(!loading && !cLoading && data){
    if ((action === "Apply" ||  action === "Talk") && !isLoggedIn){
      toast("로그인이 필요합니다");
      setAction("Info")
    }
  
    if (action === "Talk" && isLoggedIn && data.readLoggedInUser.clubMaster !== null &&data.readLoggedInUser.id !== club.master.id){
      console.log(data.readLoggedInUser.id)
      console.log(club.master.id);
      toast("클럽장은 본인의 클럽 Talk에만 참여할 수 있습니다.");
      setAction("Info")
    }
  }
  

    return (
        <Wrapper>
          {!loading && !cLoading && data ?
            <Scrollbars style ={{height:"100%"}}>
            {action === "Info" && (<InfoContainer club = {club} action={action} setAction ={setAction}/>)}
            {action === "MoreInfo" && (<InfoContainer club = {club} action={action} setAction ={setAction}/>)}
            {action === "Talk" && isLoggedIn &&
              <>
                {data.readLoggedInUser.clubMaster !== null && data.readLoggedInUser.id === club.master.id && (<MTalkContainer club = {club} action={action} setAction ={setAction} userEmail = {data.readLoggedInUser.email}/>)}
                {data.readLoggedInUser.clubMaster === null && (<UTalkContainer club = {club} action={action} setAction ={setAction} userEmail = {data.readLoggedInUser.email} cData = {cData}/>)}
              </>
            }
            {action === "Apply" && isLoggedIn && (<ApplyContainer club = {club} action={action} setAction ={setAction}/>)}
            </Scrollbars>
          :
          <Loading marginT = "25%"/>
          }
        </Wrapper>
    )
}