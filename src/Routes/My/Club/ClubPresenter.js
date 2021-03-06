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

import Loading from "../../../Components/Loading";

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

const Plus = styled.div`
    cursor: pointer;
    text-align: center;
    width: 30px;
    height: 30px;
    border: 2px solid ${props => props.theme.lightGray};
    border-radius: 5px;
    font-size: 1.3em;
    color: ${props => props.theme.lightGray};
    &:hover {
        border: 2px solid ${props => props.theme.orange};
        color: ${props => props.theme.orange};
        transition: 0.2s;
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

const X = styled.div`
    cursor: pointer;
    position: absolute;
    right: -30px;
    top: -8px;
    font-size: 2.5em;
    color: #e5eaee;
`;

const Modal = styled.div`
    padding: 10px;
`;

const Add = styled.div`
    padding-left: 630px;
`;

const Button = styled.div`
    width: 110px;
    height: 35px;
    border-radius: 5px;
    background-color: ${props => props.theme.orange};
    color: ${props => props.theme.white};
    text-align: center;
    line-height: 1.7;
    font-size: 0.9em;
    cursor: pointer;
    padding: 5px 30px;
    border: none;
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
    title,
    postContent,
    postImage,
    onImgClick,
    onSubmit,
    onFileUpload,
    onClickRadio,
    onClickPost,
    loading
}) => (
    <>
        <Title>
            <Main>동아리 정보 관리</Main>
            <Sub>동아리 정보를 편집할 수 있습니다.</Sub>
        </Title>
        {loading && <Loading></Loading>}
        {!loading && (
            <form onSubmit={onSubmit} encType="multipart/form-data">
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
                                    {type.value === "공연/예술" && <SelectedImg src={painting}></SelectedImg>}
                                    {type.value === "전시창작" && <SelectedImg src={team}></SelectedImg>}
                                    {type.value === "교양/종교" && <SelectedImg src={writing}></SelectedImg>}
                                    {type.value === "학술" && <SelectedImg src={speachBubbleLine}></SelectedImg>}
                                    {type.value === "체육" && <SelectedImg src={basketball}></SelectedImg>}
                                </SelectImg>
                            }
                            modal
                            contentStyle={{ background: "none", border: "none" }}
                            lockScroll={true}
                        >
                            {close => (
                                <Wrapper>
                                    <Tag>
                                        <ImgContainer id="공연/예술" onClick={e => onImgClick(close, e.target.id)}>
                                            <Img id="공연/예술" src={painting}></Img>
                                        </ImgContainer>
                                        <Text>문화/예술/공연</Text>
                                    </Tag>
                                    <Tag>
                                        <ImgContainer id="전시창작" onClick={e => onImgClick(close, e.target.id)}>
                                            <Img id="전시창작" src={team}></Img>
                                        </ImgContainer>
                                        <Text>전시창작</Text>
                                    </Tag>
                                    <Tag>
                                        <ImgContainer id="교양/종교" onClick={e => onImgClick(close, e.target.id)}>
                                            <Img id="교양/종교" src={writing}></Img>
                                        </ImgContainer>
                                        <Text>교양/종교</Text>
                                    </Tag>
                                    <Tag>
                                        <ImgContainer id="학술" onClick={e => onImgClick(close, e.target.id)}>
                                            <Img id="학술" src={speachBubbleLine}></Img>
                                        </ImgContainer>
                                        <Text>학술</Text>
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
                            <Label htmlFor="logoImage">업로드</Label>
                            <input type="file" id="logoImage" style={{ display: "none" }} onChange={onFileUpload}></input>
                        </File>
                    </Question>
                    <Question>
                        <About>동아리 대표 이미지</About>
                        <File>
                            <BoxInput placeholder="동아리 대표 이미지" {...clubImage} width="20%" disabled={true}></BoxInput>
                            <Label htmlFor="clubImage">업로드</Label>
                            <input type="file" id="clubImage" style={{ display: "none" }} onChange={onFileUpload}></input>
                        </File>
                    </Question>
                    <Question>
                        <About>동아리 활동 컨텐츠 추가</About>
                        <Popup
                            trigger={<Plus>+</Plus>}
                            modal
                            contentStyle={{ width: "800px", height: "450px", border: "none", padding: "10px 20px", borderRadius: "10px" }}
                            lockScroll={true}
                        >
                            {close => (
                                <>
                                    <X onClick={close}>&times; </X>
                                    <Modal>
                                        <Question>
                                            <About>제목</About>
                                            <BoxInput placeholder="제목을 적어주세요." {...title} width="700px"></BoxInput>
                                        </Question>
                                        <Question>
                                            <About>내용</About>
                                            <Container style={{width: "700px"}}>
                                                <Textarea placeholder="간단한 글을 작성해주세요." {...postContent} width="100%" height="150px"></Textarea>
                                            </Container>
                                        </Question>
                                        <Question>
                                            <File>
                                                <BoxInput placeholder="컨텐츠 이미지" {...postImage} width="20%" disabled={true}></BoxInput>
                                                <Label htmlFor="postImage">업로드</Label>
                                                <input type="file" id="postImage" style={{ display: "none" }} onChange={onFileUpload}></input>
                                            </File>
                                        </Question>
                                        <Add>
                                            <Button id={"post"} onClick={onClickPost}>추가</Button>
                                        </Add>
                                    </Modal>
                                </>
                            )}
                        </Popup>
                    </Question>
                </Contents>
                <Addition>
                    <Description>동아리 추가 정보 입력</Description>
                    <Info>
                        <Left>
                            <Question>
                                <About>뒷풀이 여부</About>
                                {party.value === true && (
                                    <Radio>
                                        <input type="radio" id="yesParty" name="party" value="yesParty" checked onChange={onClickRadio}></input>
                                        <RadioLabel htmlFor="yesParty">있음</RadioLabel>
                                        <input type="radio" id="noParty" name="party" value="noParty" onChange={onClickRadio}></input>
                                        <RadioLabel htmlFor="noParty">없음</RadioLabel>
                                    </Radio>
                                )}
                                {party.value === false && (
                                    <Radio>
                                        <input type="radio" id="yesParty" name="party" value="yesParty" onChange={onClickRadio}></input>
                                        <RadioLabel htmlFor="yesParty">있음</RadioLabel>
                                        <input type="radio" id="noParty" name="party" value="noParty" checked onChange={onClickRadio}></input>
                                        <RadioLabel htmlFor="noParty">없음</RadioLabel>
                                    </Radio>
                                )}
                                {party.value === null && (
                                    <Radio>
                                        <input type="radio" id="yesParty" name="party" value="yesParty" checked onChange={onClickRadio}></input>
                                        <RadioLabel htmlFor="yesParty">있음</RadioLabel>
                                        <input type="radio" id="noParty" name="party" value="noParty" onChange={onClickRadio}></input>
                                        <RadioLabel htmlFor="noParty">없음</RadioLabel>
                                    </Radio>
                                )}
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
                                    <BoxInput placeholder="인스타그램 주소를 넣어주세요." {...instagramUrl} width="77%" type="url" required={false}></BoxInput>
                                </SnsLogo>
                            </Question>
                        </Left>
                        <Right>
                            <Question>
                                <About>연합 여부</About>
                                {isUnion.value === true && (
                                    <Radio>
                                        <input type="radio" id="yesUnion" name="union" value="yesUnion" checked onChange={onClickRadio}></input>
                                        <RadioLabel htmlFor="yesUnion">있음</RadioLabel>
                                        <input type="radio" id="noUnion" name="union" value="noUnion" onChange={onClickRadio}></input>
                                        <RadioLabel htmlFor="noUnion">없음</RadioLabel>
                                    </Radio>
                                )}
                                {isUnion.value === false && (
                                    <Radio>
                                        <input type="radio" id="yesUnion" name="union" value="yesUnion" onChange={onClickRadio}></input>
                                        <RadioLabel htmlFor="yesUnion">있음</RadioLabel>
                                        <input type="radio" id="noUnion" name="union" value="noUnion" checked onChange={onClickRadio}></input>
                                        <RadioLabel htmlFor="noUnion">없음</RadioLabel>
                                    </Radio>
                                )}
                                {isUnion.value === null && (
                                    <Radio>
                                        <input type="radio" id="yesUnion" name="union" value="yesUnion" checked onChange={onClickRadio}></input>
                                        <RadioLabel htmlFor="yesUnion">있음</RadioLabel>
                                        <input type="radio" id="noUnion" name="union" value="noUnion" onChange={onClickRadio}></input>
                                        <RadioLabel htmlFor="noUnion">없음</RadioLabel>
                                    </Radio>
                                )}
                            </Question>
                            <Question>
                                <About>동아리 인원수</About>
                                <BoxInput placeholder="인원수를 입력해주세요." {...numberOfMembers} width="90%" type="number"></BoxInput>
                            </Question>
                            <Question>
                                <About>동아리 메일 주소</About>
                                <BoxInput placeholder="메일 주소를 입력해주세요." {...email} width="90%" type="email" required={false}></BoxInput>
                            </Question>
                            <Question>
                                <SnsLogo>
                                    <FontAwesomeIcon icon={faFacebookSquare} style={{ height: "34px", width: "34px", zIndex: "50" }} />
                                    <BoxInput placeholder="페이스북 주소를 넣어주세요." {...facebookUrl} width="78%" type="url" required={false}></BoxInput>
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
