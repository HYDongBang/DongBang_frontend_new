import React from "react";
import styled from "styled-components";

import main from "../../../Styles/Images/main.jpg"
import writing from "../../../Styles/Images/writing.svg"
import painting from "../../../Styles/Images/painting.svg"
import team from "../../../Styles/Images/team.svg"
import speachBubbleLine from "../../../Styles/Images/speachBubbleLine.svg"
import basketball from "../../../Styles/Images/basketball.svg"

import Clubs from "./Clubs"


const Wrapper = styled.div`
    width:100%;
    height:100%;
`;

const MainImg = styled.img`
    width: 100%;
`;

const MainContents = styled.div`
    width: 80%;
    height:100%;
    margin: 0 auto;
`;

const Categories = styled.div`
    height: 200px;
    width: 1000px;
    padding: 30px 0;
    margin-left:17%;
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-context: space-between;
`;

const Category = styled.div`
    width: 120px;
    height: 120px;
    background-color:#F7F8F9;
    border-radius:100%;
    cursor:pointer;
    border: ${props => props.checked &&  "3px solid #FF7300" };
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    padding: 20%;
`;

const AllImg = styled.div`
    width: 100%;
    height: 100%;
    font-size:2em;
    text-align:center;
    padding-top: 32%;
    color: ${props => props.checked &&  "#FF7300" };
`;

const Text = styled.div`
    width: 120px;
    text-align:center;
    margin-top:20px;
    color: ${props => props.checked &&  "#FF7300" };
`;


const ClubContainer = styled.div`

    width: 100%;
`;

export default ({
    myType,
    setType,
}) => {
    const clubs = [
        {
        name: "안녕",
        bio:"반가워"
        }
    ]
    return (
    <Wrapper> 
        <MainImg src={main}/>
        <MainContents>
            <Categories>
                {myType === "" ? (
                    <Category onClick={() => setType("")} checked="true">
                        <AllImg checked="true"> ALL </AllImg>
                        <Text checked="true">모두보기</Text>
                    </Category>
                ):(
                    <Category onClick={() => setType("")}>
                        <AllImg> ALL </AllImg>
                        <Text>모두보기</Text>
                    </Category>
                )}

                {myType === "문화예술공연" ? (
                    <Category onClick={() => setType("")} checked="true">
                        <Img src = {painting} />
                        <Text checked="true">문화/예술/공연</Text>
                    </Category>
                ) : (
                    <Category onClick={() => setType("문화예술공연")}>
                        <Img src = {painting}/>
                        <Text>문화/예술/공연</Text>
                    </Category>
                )}

                {myType === "봉사사회활동" ? (
                    <Category onClick={() => setType("")} checked="true">
                        <Img src = {team} />
                        <Text checked="true">봉사/사회활동</Text>
                    </Category>
                ) : (
                    <Category onClick={() => setType("봉사사회활동")}>
                        <Img src = {team} />
                        <Text >봉사/사회활동</Text>
                    </Category>
                )}

                {myType === "학술교양종교" ? (
                    <Category onClick={() => setType("")} checked="true">
                        <Img src = {writing} />
                        <Text checked="true">학술/교양/종교</Text>
                    </Category>
                ) : (
                    <Category onClick={() => setType("학술교양종교")}>
                        <Img  src = {writing} />
                        <Text>학술/교양/종교</Text>
                    </Category>
                )}   

                {myType === "어학친목" ? (
                    <Category onClick={() => setType("")} checked="true">
                        <Img src = {speachBubbleLine} />
                        <Text checked="true">어학/친목</Text>
                    </Category>
                ) : (
                    <Category onClick={() => setType("어학친목")}>
                        <Img src = {speachBubbleLine} />
                        <Text>어학/친목</Text>
                    </Category>
                )}
                
                {myType === "체육" ? (
                    <Category onClick={() => setType("")} checked="true">
                        <Img src = {basketball}/>
                        <Text checked="true">체육</Text>
                    </Category>
                ) : (
                    <Category onClick={() => setType("체육")}>
                        <Img src = {basketball}  />
                        <Text>체육</Text>
                    </Category>
                )}   
            </Categories>
            <ClubContainer>
                <Clubs
                    // clubs={word.length < 1 ? data.allClub : filterDisplay}
                    clubs = {clubs}
                    myType={myType}
                />
            </ClubContainer>
        </MainContents>
    </Wrapper>
  );
}
