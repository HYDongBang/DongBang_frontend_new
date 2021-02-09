import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";
import Profile from "./Profile";
import Club from "./Club";
import Member from "./Member";
import Applicant from "./Applicant";
import Interview from "./Interview";
import Form from "./Form";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = styled.div`
    background: ${props => props.theme.orange};
    height: 38px;
    width: 100%;
    position: fixed;
`;

const Wrapper = styled.div`
    min-height: 1000px;
    width: 100%;
    display: flex;
`;

const Menu = styled.div`
    background: ${props => props.theme.inputTagGray};
    min-height: 1000px;
    width: 30%;
    text-align: right;
    font-family: 'NanumGothicR';
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
    font-size: 0.95em;
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
    padding-top: 100px;
    padding-left: 70px;
`;

const toggle = {};

export default ({ match }) => {
    const GET_CLUB = gql`
        query readLoggedInUser {
            readLoggedInUser {
                id
                clubMaster {
                    id
                }
            }
        }
    `;
    const href = match.path;
    const [menu, setMenu] = useState(href);
    const getClubQuery = useQuery(GET_CLUB);
    const [isMaster, setIsMaster] = useState();

    useEffect(() => {
        if (getClubQuery.data) {
            setIsMaster(getClubQuery.data.readLoggedInUser.clubMaster);
        }
    }, [getClubQuery.data]);

    return (
        <>
            <Header></Header>
            {!getClubQuery.loading && (
                <Wrapper>
                    <Menu>
                        <List>
                            <Link onClick={() => setMenu("/profile")} to="/profile">
                                <Element>프로필 관리</Element>
                            </Link>
                            { isMaster !== null && (
                                <>
                                    <Link onClick={() => setMenu("/club")} to="/club">
                                        <Element>동아리 정보 관리</Element>
                                    </Link>
                                    <Element>멤버 / 지원자 관리</Element>
                                    <Toggle>
                                        <Link onClick={() => setMenu("/member")} to="/member">
                                            <Sub>멤버 관리</Sub>
                                        </Link>
                                        <Link onClick={() => setMenu("/applicant")} to="/applicant">
                                            <Sub>지원자 관리</Sub>
                                        </Link>
                                        <Link onClick={() => setMenu("/interview")} to="/interview">
                                            <Sub>면접 타임 테이블</Sub>
                                        </Link>
                                        <Link onClick={() => setMenu("/form")} to="/form">
                                            <Sub>가입신청 양식</Sub>
                                        </Link>
                                    </Toggle>
                                </>
                            )}
                            <Element>회원 탈퇴</Element>
                        </List>
                    </Menu>
                    <Container>
                        <Route exact path={"/profile"} component={Profile} />
                        { isMaster !== null && (
                            <>
                                <Route path={"/club"} component={Club} />
                                <Route path={"/member"} component={Member} />
                                <Route path={"/applicant"} component={Applicant} />
                                <Route path={"/interview"} component={Interview} />
                                <Route path={"/form"} component={Form} />
                            </>
                        )}
                    </Container>
                </Wrapper>
            )}
        </>
    );
};
