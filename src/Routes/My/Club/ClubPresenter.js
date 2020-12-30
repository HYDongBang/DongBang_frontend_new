import React from "react";
import styled from "styled-components";
import BoxInput from "../../../Components/BoxInput";
import Textarea from "../../../Components/Textarea";
import ProfileButton from "../../../Components/ProfileButton";
import { faInstagramSquare, faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

const Category = styled.div`
    display: flex;
    align-items: center;
`;

const Select = styled.div`
    font-size: 0.55em;
    border-radius: 20px;
    background-color: ${props => props.theme.lightGray};
    padding: 20px 10px 20px 10px;
    text-align: center;
    height: 60px;
    width: 60px;
    margin-right: 10px;
    cursor: pointer;
`;

const Question = styled.div`
    padding: 15px 0px;
`;

const About = styled.div`
    font-family: spoHanB;
    font-size: 0.8em;
    padding-bottom: 10px;
`;

const Container = styled.div`
    -webkit-appearance: none;
    -webkit-border-radius: 0;
    border: 1px solid ${props => props.theme.lightGray};
    border-radius: 5px;
    padding: 7px 10px;
    width: 60%;
`;

const File = styled.div`
    display: flex;
`;

const Label = styled.label`
    cursor: pointer;
    font-size: 0.8em;
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.lightGray};
    border-radius: 0px 10px 10px 0px;
    margin-left: -8px;
    padding: 10px;
    &:hover {
        background-color: ${props => props.theme.orange};
        transition: 0.3s;
    }
`;

const Addition = styled.div`
    padding-top: 60px;
`;

const Description = styled.div`
    font-size: 0.95em;
    padding-bottom: 15px;
    font-family: spoHanB;
`;

const Info = styled.div`
    border-top: 2px solid ${props => props.theme.darkGray};
    border-bottom: 2px solid ${props => props.theme.darkGray};
    padding: 10px 0px;
    width: 60%;
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    width: 50%;
`;

const Radio = styled.div`
    display: flex;
    align-items: center;
    padding-top: 5px;
`;

const RadioLabel = styled.label`
    font-size: 0.75em;
    padding: 0px 7px 0px 3px;
    cursor: pointer;
`;

const SnsLogo = styled.div`
    display: flex;
    padding-top: 5px;
`;

const Right = styled.div`
    width: 50%;
`;

const Submit = styled.div`
    padding-top: 80px;
    display: flex;
    justify-content: flex-end;
    padding-right: 40%;
    padding-bottom: 50px;
`;

export default ({ name, short, long, logo, image, facebook, instagram, meeting, people, phone, email }) => (
    <>
        <Title>
            <Main>동아리 정보 관리</Main>
            <Sub>동아리 정보를 편집할 수 있습니다.</Sub>
        </Title>
        <Contents>
            <Category>
                <Select>
                    카테고리
                    <br />
                    선택
                </Select>
                <Question>
                    <About>동아리 이름</About>
                    <BoxInput placeholder="동아리 이름을 적어주세요." {...name} width="300px"></BoxInput>
                </Question>
            </Category>
            <Question>
                <About>동아리 한줄 소개</About>
                <BoxInput placeholder="간단한 동아리 소개를 입력해 주세요." {...short} width="60%"></BoxInput>
            </Question>
            <Question>
                <About>동아리 설명글</About>
                <Container>
                    <Textarea placeholder="동아리를 설명할 수 있는 자세한 글을 작성해주세요." {...long} width="100%" height="150px"></Textarea>
                </Container>
            </Question>
            <Question>
                <About>동아리 로고</About>
                <File>
                    <BoxInput placeholder="동아리 로고" {...logo} width="20%" disabled={true}></BoxInput>
                    <Label htmlFor="logo">업로드</Label>
                    <input type="file" id="logo" style={{display: "none"}}></input>
                </File>
            </Question>
            <Question>
                <About>동아리 대표 이미지</About>
                <File>
                    <BoxInput placeholder="동아리 대표 이미지" {...image} width="20%" disabled={true}></BoxInput>
                    <Label htmlFor="image">업로드</Label>
                    <input type="file" id="image" style={{display: "none"}}></input>
                </File>
            </Question>
        </Contents>
        <Addition>
            <Description>동아리 추가 정보 입력</Description>
            <Info>
                <Left>
                    <Question>
                        <About>뒷풀이 여부</About>
                        <Radio>
                            <input type="radio" id="yesParty" name="party" value="yesParty"></input>
                            <RadioLabel htmlFor="yesParty">있음</RadioLabel>
                            <input type="radio" id="noParty" name="party" value="noParty"></input>
                            <RadioLabel htmlFor="noParty">없음</RadioLabel>
                        </Radio>
                    </Question>
                    <Question>
                        <About>동아리 회합일정</About>
                        <BoxInput placeholder="회합 일정을 입력해주세요." {...meeting} width="90%"></BoxInput>
                    </Question>
                    <Question>
                        <About>동아리 연락처</About>
                        <BoxInput placeholder="문의가능한 연락처를 입력해주세요." {...phone} width="90%"></BoxInput>
                    </Question>
                    <Question>
                        <SnsLogo>
                            <FontAwesomeIcon icon={faInstagramSquare} style={{height: "34px", width: "34px", zIndex: "50"}}/>
                            <BoxInput placeholder="인스타그램 주소를 넣어주세요." {...instagram} width="77%"></BoxInput>
                        </SnsLogo>
                    </Question>
                </Left>
                <Right>
                    <Question>
                        <About>연합 여부</About>
                        <Radio>
                            <input type="radio" id="yesUnion" name="union" value="yesUnion"></input>
                            <RadioLabel htmlFor="yesUnion">있음</RadioLabel>
                            <input type="radio" id="noUnion" name="union" value="noUnion"></input>
                            <RadioLabel htmlFor="noUnion">없음</RadioLabel>
                        </Radio>
                    </Question>
                    <Question>
                        <About>동아리 인원수</About>
                        <BoxInput placeholder="인원수를 입력해주세요." {...people} width="90%"></BoxInput>
                    </Question>
                    <Question>
                        <About>동아리 메일 주소</About>
                        <BoxInput placeholder="메일 주소를 입력해주세요." {...email} width="90%"></BoxInput>
                    </Question>
                    <Question>
                        <SnsLogo>
                            <FontAwesomeIcon icon={faFacebookSquare} style={{height: "34px", width: "34px", zIndex: "50"}}/>
                            <BoxInput placeholder="페이스북 주소를 넣어주세요." {...facebook} width="78%"></BoxInput>
                        </SnsLogo>
                    </Question>
                </Right>
            </Info>
        </Addition>
        <Submit>
            <ProfileButton content="저장" color="gray" hover="orange"></ProfileButton>
        </Submit>
    </>
);
