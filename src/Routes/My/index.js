import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";
import Profile from "./Profile";
import Club from "./Club";
import Member from "./Member";
import Applicant from "./Applicant";
import Interview from "./Interview";
import Form from "./Form";

const Header = styled.div`
    background: ${props => props.theme.orange};
    height: 38px;
    width: 100%;
    position: fixed;
`;

const Wrapper = styled.div`
    height: 1000px;
    width: 100%;
    font-family: raleBold;
    display: flex;
`;

const Menu = styled.div`
    background: ${props => props.theme.inputTagGray};
    height: 100%;
    width: 30%;
    text-align: right;
`;

const List = styled.div`
    padding-top: 100px;
    padding-right: 20px;
    display: inline-block;
`;

const Element = styled.div`
    padding: 10px 13px;
    width: 170px;
    text-align: left;
    color: ${props => props.theme.darkGray};
    cursor: pointer;
    margin: 7px 0px;
    transition: 0.1s;
    &:hover {
        color: white;
        border-radius: 7px;
        background: ${props => props.theme.orange};
    }
`;

const Toggle = styled.div``;

const Sub = styled.div`
    padding: 8px 25px;
    width: 170px;
    text-align: left;
    color: ${props => props.theme.darkGray};
    cursor: pointer;
    margin: 5px 0px;
    transition: 0.1s;
    font-size: 0.8em;
    &:hover {
        color: white;
        border-radius: 7px;
        background: ${props => props.theme.orange};
    }
`;

const Container = styled.div`
    background: ${props => props.theme.white};
    height: 100%;
    width: 70%;
`;

const toggle = {};

export default ({ match }) => {
    const href = match.path;
    const [menu, setMenu] = useState(href);
    return (
        <>
            <Header></Header>
            <Wrapper>
                <Menu>
                    <List>
                        <Link onClick={() => setMenu("/profile")} to="/profile">
                            {/* TODO: 해당 페이지에 있으면 즉 state가 해당 페이지를 가리키면 style적용*/}
                            <Element>프로필 관리</Element>
                        </Link>
                        <Element>동아리 정보 관리</Element>
                        {/* TODO: 세번째 메뉴에 hover시 toggle 메뉴 나오게 이벤트 추가*/}
                        <Element>멤버 / 지원자 관리</Element>
                        <Toggle>
                            <Sub>멤버 관리</Sub>
                            <Sub>지원자 관리</Sub>
                            <Sub>면접 타임 테이블</Sub>
                            <Sub>가입신청 양식</Sub>
                        </Toggle>
                        <Element>회원 탈퇴</Element>
                    </List>
                </Menu>
                <Container>
                    {/*<Route exact path={match.path} component={Profile} />
                    <Route path={'/clubProfile'} component={Club} />
                    <Route path={'/member'} component={Member} />
                    <Route path={'/applicant'} component={Applicant} />
                    <Route path={'/interview'} component={Interview} />
                    <Route path={'/form'} component={Form} />*/}
                </Container>
            </Wrapper>
        </>
    );
};
