import React from "react";
import styled from "styled-components";
import ProfileButton from "../../../Components/ProfileButton";
import ClubLogo from "../../../Components/ClubLogo";
import BoxInput from "../../../Components/BoxInput";
import LineInput from "../../../Components/LineInput";
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
    padding: 0px 7px;
`;

const Contents = styled.div``;

const Top = styled.div`
`;

const ClubInfo = styled.div`
    display:flex;
`;

const Text = styled.div`
    margin-bottom: 10px;
    font-size: 0.9em;
`;

const TBox = styled.div`
    width:60%;
    margin: 10px 20px;
`;

const CBox = styled.div`
    margin-top: 20px;

`;

const Box = styled.div`
    border: 1px solid ${props => props.theme.lightGray};
    padding: 10px;
    border-radius: 5px;
    margin-top:20px;
    width: 60%;
`;

const Inner = styled.div``;

const Wrapper = styled.div``;

const Question = styled.input`
    -webkit-appearance: none;
    -webkit-border-radius: 0;
    font-size: 0.85em;
    font-family: raleRegular;
    border:none;
    background-color:#F7F7F7;
    border-radius: 5px;
    padding: 7px 10px;
    width:80%;
`;

const Selector = styled.div``;

const Buttons = styled.div`
    display:flex;
    flex-direction: row-reverse;
    border-top: 1px solid ${props => props.theme.lightGray};
    margin-top: 15px;
    padding-top: 15px;
`;

const Button = styled.div`
    margin-left: 10px;
`;

const Options = styled.div``;

const OptionPlus = styled.div``;

const Submit = styled.div`
    padding-top: 80px;
    display: flex;
    justify-content: flex-end;
    padding-right: 40%;
    padding-bottom: 50px;
`;

export default ({
    select,
    setSelect
}) => {
    
    return(
    <>
        <Title>
            <Main>가입 신청 양식</Main>
            <Sub>동아리 지원 양식을 편집할 수 있습니다.</Sub>
        </Title>

        <Contents>
            <Top>
                <ClubInfo>
                    <ClubLogo type = "culture"/>
                    <TBox>
                        <Text>동아리 이름</Text>
                        <BoxInput placeholder="동아리명" width="45%"> 동아리명 </BoxInput>
                    </TBox>
                </ClubInfo>
                <CBox>
                    <Text>동아리 설명</Text>
                    <BoxInput placeholder="동아리 한줄 설명" width="60%">hi </BoxInput>
                </CBox>
            </Top>
            {/*주관식 질문*/}
            <Box onClick={() => setSelect(1)}>
                <Inner>
                    <Wrapper>
                        <Question placeholder="질문"/>
                    </Wrapper>
                    <Selector></Selector>
                </Inner>
                {select === 1 &&
                    <Buttons>
                        <Button>질문삭제</Button>
                        <Button>질문추가</Button>
                    </Buttons>
                }
            </Box>
            {/*객관식 질문*/}
            <Box onClick={() => setSelect(2)}>
                <Inner>
                    <Wrapper>
                        <Question placeholder="질문"/>
                    </Wrapper>
                    <Options>
                        <LineInput icon ="delete" placeholder="옵션"  width="60%"/>
                        <OptionPlus>옵션추가</OptionPlus>
                    </Options>
                </Inner>
                {select === 2 &&
                    <Buttons>
                        <Button>질문삭제</Button>
                        <Button>질문추가</Button>
                    </Buttons>
                }
            </Box>
        </Contents>
        <Submit>
            <ProfileButton content="질문추가 " color="darkgray" style={{ marginRight: "15px" }}></ProfileButton>
            <ProfileButton content="저장" color="orange"></ProfileButton>
        </Submit>
    </>
);}
