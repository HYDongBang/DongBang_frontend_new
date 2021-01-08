import React from "react";
import styled from "styled-components";
import Popup from "reactjs-popup";
import BoxInput from "../../../Components/BoxInput";
import Textarea from "../../../Components/Textarea";
import ProfileButton from "../../../Components/ProfileButton";
import { faInstagramSquare, faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import writing from "../../../Styles/Images/writing.svg";
import painting from "../../../Styles/Images/painting.svg";
import team from "../../../Styles/Images/team.svg";
import speachBubbleLine from "../../../Styles/Images/speachBubbleLine.svg";
import basketball from "../../../Styles/Images/basketball.svg";

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

const SelectImg = styled.div`
    font-size: 0.55em;
    border-radius: 20px;
    background-color: ${props => props.theme.lightGray};
    text-align: center;
    height: 60px;
    width: 60px;
    margin-right: 10px;
    cursor: pointer;
`;

const SelectedImg = styled.img`
    width: 70%;
    height: 70%;
    margin-top: 10px;
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

const Wrapper = styled.div`
    display: flex;
`;

const Tag = styled.div`
    padding: 0px 20px;
`;

const ImgContainer = styled.div`
    cursor: pointer;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    border: 2px solid ${props => props.theme.white};
    background: ${props => props.theme.white};
    text-align: center;
    line-height: 9;
    &:hover {
        border: 2px solid ${props => props.theme.orange};
        transition: 0.3s;
    }
`;

const Img = styled.img`
    width: 60%;
    height: 60%;
`;

const Text = styled.div`
    color: ${props => props.theme.white};
    padding-top: 20px;
    font-size: 0.9em;
    text-align: center;
`;

export default ({
    name,
    type,
    description,
    content,
    clubImage,
    logoImage,
    partyDay,
    party,
    numberOfMembers,
    isUnion,
    email,
    phoneNumber,
    instagramUrl,
    facebookUrl,
    onImgClick,
    onSubmit,
    loading
}) => (
    <>
        <Title>
            <Main>동아리 정보 관리</Main>
            <Sub>동아리 정보를 편집할 수 있습니다.</Sub>
        </Title>
        {loading && <div>loading</div>}
        {!loading && (
            <form onSubmit={onSubmit}>
                <Contents>
                    <Category>
                        <Popup
                            trigger={
                                <SelectImg>
                                    {type.value === "" && (
                                        <div style={{ marginTop: "20px" }}>
                                            카테고리
                                            <br />
                                            선택
                                        </div>
                                    )}
                                    {type.value === "문화예술공연" && <SelectedImg src={painting}></SelectedImg>}
                                    {type.value === "봉사사회활동" && <SelectedImg src={team}></SelectedImg>}
                                    {type.value === "학술교양종교" && <SelectedImg src={writing}></SelectedImg>}
                                    {type.value === "어학친목" && <SelectedImg src={speachBubbleLine}></SelectedImg>}
                                    {type.value === "체육" && <SelectedImg src={basketball}></SelectedImg>}
                                </SelectImg>
                            }
                            modal
                            contentStyle={{ background: "none", border: "none" }}
                        >
                            {close => (
                                <Wrapper>
                                    <Tag>
                                        <ImgContainer id="문화예술공연" onClick={e => onImgClick(close, e.target.id)}>
                                            <Img id="문화예술공연" src={painting}></Img>
                                        </ImgContainer>
                                        <Text>문화/예술/공연</Text>
                                    </Tag>
                                    <Tag>
                                        <ImgContainer id="봉사사회활동" onClick={e => onImgClick(close, e.target.id)}>
                                            <Img id="봉사사회활동" src={team}></Img>
                                        </ImgContainer>
                                        <Text>봉사/사회활동</Text>
                                    </Tag>
                                    <Tag>
                                        <ImgContainer id="학술교양종교" onClick={e => onImgClick(close, e.target.id)}>
                                            <Img id="학술교양종교" src={writing}></Img>
                                        </ImgContainer>
                                        <Text>학술/교양/종교</Text>
                                    </Tag>
                                    <Tag>
                                        <ImgContainer id="어학친목" onClick={e => onImgClick(close, e.target.id)}>
                                            <Img id="어학친목" src={speachBubbleLine}></Img>
                                        </ImgContainer>
                                        <Text>어학/친목</Text>
                                    </Tag>
                                    <Tag>
                                        <ImgContainer id="체육" onClick={e => onImgClick(close, e.target.id)}>
                                            <Img id="체육" src={basketball}></Img>
                                        </ImgContainer>
                                        <Text>체육</Text>
                                    </Tag>
                                </Wrapper>
                            )}
                        </Popup>
                        <Question>
                            <About>동아리 이름</About>
                            <BoxInput placeholder="동아리 이름을 적어주세요." {...name} width="300px"></BoxInput>
                        </Question>
                    </Category>
                    <Question>
                        <About>동아리 한줄 소개</About>
                        <BoxInput placeholder="간단한 동아리 소개를 입력해 주세요." {...description} width="60%"></BoxInput>
                    </Question>
                    <Question>
                        <About>동아리 설명글</About>
                        <Container>
                            <Textarea placeholder="동아리를 설명할 수 있는 자세한 글을 작성해주세요." {...content} width="100%" height="150px"></Textarea>
                        </Container>
                    </Question>
                    <Question>
                        <About>동아리 로고</About>
                        <File>
                            <BoxInput placeholder="동아리 로고" {...logoImage} width="20%" disabled={true}></BoxInput>
                            <Label htmlFor="logo">업로드</Label>
                            {/* TODO: onChange 로 파일 업로드시 이름 변경*/}
                            <input type="file" id="logo" style={{ display: "none" }}></input>
                        </File>
                    </Question>
                    <Question>
                        <About>동아리 대표 이미지</About>
                        <File>
                            <BoxInput placeholder="동아리 대표 이미지" {...clubImage} width="20%" disabled={true}></BoxInput>
                            <Label htmlFor="image">업로드</Label>
                            <input type="file" id="image" style={{ display: "none" }}></input>
                        </File>
                    </Question>
                </Contents>
                <Addition>
                    <Description>동아리 추가 정보 입력</Description>
                    <Info>
                        <Left>
                            <Question>
                                {/*TODO: 라디오 인풋 선택지 변경 */}
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
                                <BoxInput placeholder="회합 일정을 입력해주세요." {...partyDay} width="90%"></BoxInput>
                            </Question>
                            <Question>
                                <About>동아리 연락처</About>
                                <BoxInput placeholder="문의가능한 연락처를 입력해주세요." {...phoneNumber} width="90%" type="tel"></BoxInput>
                            </Question>
                            <Question>
                                <SnsLogo>
                                    <FontAwesomeIcon icon={faInstagramSquare} style={{ height: "34px", width: "34px", zIndex: "50" }} />
                                    <BoxInput placeholder="인스타그램 주소를 넣어주세요." {...instagramUrl} width="77%" type="url"></BoxInput>
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
                                <BoxInput placeholder="인원수를 입력해주세요." {...numberOfMembers} width="90%" type="number"></BoxInput>
                            </Question>
                            <Question>
                                <About>동아리 메일 주소</About>
                                <BoxInput placeholder="메일 주소를 입력해주세요." {...email} width="90%" type="email"></BoxInput>
                            </Question>
                            <Question>
                                <SnsLogo>
                                    <FontAwesomeIcon icon={faFacebookSquare} style={{ height: "34px", width: "34px", zIndex: "50" }} />
                                    <BoxInput placeholder="페이스북 주소를 넣어주세요." {...facebookUrl} width="78%" type="url"></BoxInput>
                                </SnsLogo>
                            </Question>
                        </Right>
                    </Info>
                </Addition>
                <Submit>
                    <ProfileButton content="저장" color="gray" hover="orange"></ProfileButton>
                </Submit>
            </form>
        )}
    </>
);
