import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// 임시 데이터
const isLoggedIn = true;

const Container = styled.div`
    background-color: ${props => props.theme.orange};
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
                <Link to="/auth">
                    <Text>로그인/회원가입</Text>
                </Link>
            </List>
        )}
    </Container>
);
