import React from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div`
    background: ${props => props.theme.orange};
    height: 38px;
    width: 100%;
    position: fixed;
`;

const Wrapper = styled.div`
    height: 1000px;
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
            <Header></Header>
            <Wrapper>
                <Menu>hi</Menu>
                <Container>hi</Container>
            </Wrapper>
        </>
    );
};
