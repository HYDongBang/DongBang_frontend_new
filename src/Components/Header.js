import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Popup from "reactjs-popup";
import AuthContainer from "../Routes/MJ_page/Auth/AuthContainer"

// 임시 데이터
const isLoggedIn = false;

const Container = styled.div`
    z-index: 100;
    padding: 11px;
    display: flex;
    justify-content: space-between;
    position: fixed;
    width: 100%;
`;

const Icon = styled.div`
    color: ${props => props.theme.white};
    font-weight: 600;
    font-size: 0.9em;
    font-family: spoHanB;
`;

const List = styled.div`
    display: flex;
    align-items: center;
`;

const Text = styled.div`
    color: ${props => props.theme.white};
    padding-left: 10px;
    cursor: pointer;
    font-size: 0.5em;
    font-family: spoHanB;
`;

const contentStyle ={
    width:"45%",
    height: "65%",
    borderRadius: "15px",
    padding: "0px",
  };


  const X = styled.a`
  cursor:pointer;
  position:absolute;
  right:-30px;
  top: -8px;
  font-size:2.5em;
  color: #E5EAEE;
`;


export default () => (
    <Container>
        <Link to="/">
            <Icon>DongBang 동방</Icon>
        </Link>
        {isLoggedIn ? (
            <List>
                <Link to="/profile">
                    <Text>마이페이지</Text>
                </Link>
                <Text>로그아웃</Text>
            </List>
        ) : (
            <List>
                <Popup 
                trigger={
                    <Text>로그인/회원가입</Text>
                  }
                  modal
                  contentStyle = {contentStyle}>
                    {close =>(
                        <>
                        <X onClick={close}>&times; </X>
                        <AuthContainer/>
                        </>
                    )}
                </Popup>
            </List>
        )}
    </Container>
);
