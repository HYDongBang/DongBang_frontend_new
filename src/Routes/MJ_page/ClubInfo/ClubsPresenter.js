import React from "react";
import styled from "styled-components";
import InfoContainer from "./InfoContainer";
import MTalkContainer from "../ClubTalk/Master/MTalkContainer";
import UTalkContainer from "../ClubTalk/User/UTalkContainer";


export default ({ action, setAction, club }) => {
    return (
        <>
        {action === "Info" && (<InfoContainer club = {club} action={action} setAction ={setAction}/>)}
        {action === "MoreInfo" && (<InfoContainer club = {club} action={action} setAction ={setAction}/>)}
        {action === "Talk" && (<UTalkContainer club = {club} action={action} setAction ={setAction}/>)}
        </>
    )
}