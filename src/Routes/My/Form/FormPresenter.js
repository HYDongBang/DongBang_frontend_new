import React from "react";
import styled from "styled-components";
import ProfileButton from "../../../Components/ProfileButton";
// import Loading from "../../../Components/";

const Title = styled.div`
    padding-bottom: 35px;
`;

const Main = styled.div`
    font-size: 1.4em;
    font-family: raleBold;
    padding-bottom: 10px;
`;

const Sub = styled.div`
    font-size: 0.8em;
    color: ${props => props.theme.lightGray};
    paddding: 0px 7px;
`;

const Contents = styled.div``;

const Box = styled.div``;

const Inner = styled.div``;

const Wrapper = styled.div``;

const Question = styled.div``;

const Answer = styled.div``;

const Selector = styled.div``;

const Buttons = styled.div``;

const Button = styled.div``;

const Add = styled.div``;

const Submit = styled.div`
    padding-top: 80px;
    display: flex;
    justify-content: flex-end;
    padding-right: 30%;
    padding-bottom: 50px;
`;

export default () => (
    <>
        <Title>
            <Main>가입 신청 양식</Main>
            <Sub>동아리 지원 양식을 편집할 수 있습니다.</Sub>
        </Title>
        <Contents>
            {/*주관식 질문*/}
            <Box>
                <Inner>
                    <Wrapper>
                        <Question></Question>
                        <Answer></Answer>
                    </Wrapper>
                    <Selector></Selector>
                </Inner>
                <Buttons>
                    <Button>삭제</Button>
                    <Button>추가</Button>
                </Buttons>
            </Box>
            {/*객관식 질문*/}
            <Box>
                <Inner>
                    <Wrapper>
                        <Question></Question>
                        <Answer></Answer>
                        <Add></Add>
                    </Wrapper>
                    <Selector></Selector>
                </Inner>
                <Buttons>
                    <Button>삭제</Button>
                    <Button>추가</Button>
                </Buttons>
            </Box>
        </Contents>
        <Submit>
            <ProfileButton content="초기화 " color="darkgray" style={{ marginRight: "15px" }}></ProfileButton>
            <ProfileButton content="저장" color="orange"></ProfileButton>
        </Submit>
    </>
);
