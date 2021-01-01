import React from "react";
import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect,
  } from "react-router-dom";
import styled from "styled-components";
import Main from "./Main";

const Header = styled.div`
    height: 38px;
    width: 100%;
    position: fixed;
`;

const Wrapper = styled.div`
    height:100%;
    width: 100%;
`;

const Menu = styled.div`
    background: ${props => props.theme.inputTagGray};
    display: inline-block;
    height: 100%;
    width: 35%;
`;

const Container = styled.div`
    background: ${props => props.theme.white};
    display: inline-block;
    height: 100%;
    width: 65%;
`;

export default () => {
    return (
        <>
            <Header/>
            <Wrapper>
                <Switch>
                <Route path="/" exact component={Main} />
                {/* <Route path="/auth" component={Auth} />
                <Route path="/profile" component={Profile} /> */}
                {/* <Route path="/clubInfo:id" component={ClubInfo} /> */}
                <Redirect path="*" to="/" />
                </Switch>
            </Wrapper>
        </>
    );
}