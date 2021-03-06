import React from "react";
import styled from "styled-components";

import main from "../../../Styles/Images/main.jpg"
import writing from "../../../Styles/Images/writing.svg"
import writingOrange from "../../../Styles/Images/writingOrange.svg"
import painting from "../../../Styles/Images/painting.svg"
import paintingOrange from "../../../Styles/Images/paintingOrange.svg"
import team from "../../../Styles/Images/team.svg"
import teamOrange from "../../../Styles/Images/teamOrange.svg"
import speachBubbleLine from "../../../Styles/Images/speachBubbleLine.svg"
import speachBubbleLineOrange from "../../../Styles/Images/speachBubbleLineOrange.svg"
import basketball from "../../../Styles/Images/basketball.svg"
import basketballOrange from "../../../Styles/Images/basketballOrange.svg"

import Clubs from "./Clubs"
import Loading from "../../../Components/Loading";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import Popup from "reactjs-popup";
import UTalksContainer from "../ClubTalk/User/UTalksContainer";



const Wrapper = styled.div`
    width:100%;
    height:100%;
`;

const MainImg = styled.img`
    max-width: 100%;
    max-height: 100%;
`;

const MainContents = styled.div`
    width: 100%;
    height:100%;
    padding: 0 20%;
`;

const Categories = styled.div`
    width: 100%;
    padding: 10% 0;
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
`;

const Category = styled.div`
    width: 12%;
    height: 12%;
    cursor: pointer;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    padding: 20%;
    background-color:${props => props.checked ? "#FFFFFF" : "#F7F8F9" };
    border-radius:25%;
    cursor:pointer;
    border: ${props => props.checked &&  "1.5px solid #FF7300" };
`;

const AllImg = styled.div`
    width: 100%;
    height: 100%;
    padding: 29%;
    font-size:3vw;
    border-radius:100%;
    justify-content: center;
    align-items: center;
    display: flex;
    background-color:${props => props.checked ? "#FFFFFF" : "#F7F8F9" };
    border: ${props => props.checked &&  "1.5px solid #FF7300" };
    color: ${props => props.checked &&  "#FF7300" };
`;

const Text = styled.div`
    font-size: 1.2vw;
    text-align:center;
    @media ( max-width: 768px ) {
        padding: 15% 16%;
    }
    padding: 15% 0;
    color: ${props => props.checked &&  "#FF7300" };
`;

const ClubContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const SearchBar = styled.input`
    width: 50%;
    position:absolute;
    margin-top: 13%;
    margin-left: 25%;
    color: ${props => props.checked};
    @media ( max-width: 768px ) {
        padding: 1.3% 1.5%;
        font-size: 1.8vw;
    }
    @media ( min-width: 768px ) {
        padding: 0.6% 1.5%;
        font-size: 1.3vw;
    }
    border:none;
    border-radius: 5px;
    box-shadow: #757575 1px 1px 6px 2px;
`

const TalkPlus = styled.div`
    width: 65px;
    height: 65px;
    background-color: ${props => props.theme.orange};
    position:fixed;
    bottom: 30px;
    right:30px;
    border-radius:100%;
    color:white;
    text-align:center;

`;

const X = styled.div`
    cursor: pointer;
    position: absolute;
    right: -37px;
    top: -5px;
    font-size: 2.3em;
    @media ( max-width: 768px ) {
        font-size: 1.5em;
    }
    color: #e5eaee;
`;


const contentStyle ={
  width:"70%",
  height: "80%",
  borderRadius: "15px",
  padding: "0px",
};


export default ({
    myType,
    setType,
    word,
    setWord,
    filterDisplay,
    setFilterDisplay,
    loading,
    data,
    uLoading,
    uData,
    handleChange,
    isLoggedIn,
    check,
    setCheck   
}) => {
    if(!uLoading && uData){
        console.log(uData)
    }
    return (
    <Wrapper> 
    <SearchBar
          value={word}
          placeholder="찾으려는 동아리 명을 입력해주세요."
          onChange={(e) => handleChange(e.target.value)}
    />
        <MainImg src={main}/>
        <MainContents>
            <Categories>
                {myType === "" ? (
                    <Category onClick={() => setType("")}>
                        <AllImg checked={true}>ALL</AllImg>
                        <Text>모두보기</Text>
                    </Category>
                ):(
                    <Category onClick={() => setType("")}>
                        <AllImg>ALL</AllImg>
                        <Text>모두보기</Text>
                    </Category>
                )}

                {myType === "전시창작" ? (
                    <Category onClick={() => setType("")}>
                        <Img checked={true} src = {paintingOrange} />
                        <Text checked={true}>전시창작</Text>
                    </Category>
                ) : (
                    <Category onClick={() => setType("전시창작")}>
                        <Img src = {painting}/>
                        <Text>전시창작</Text>
                    </Category>
                )}

                {myType === "교양종교" ? (
                    <Category onClick={() => setType("")} >
                        <Img checked="true" src = {teamOrange} />
                        <Text checked="true">교양/종교</Text>
                    </Category>
                ) : (
                    <Category onClick={() => setType("교양종교")}>
                        <Img src = {team} />
                        <Text >교양/종교</Text>
                    </Category>
                )}

                {myType === "학술" ? (
                    <Category onClick={() => setType("")}>
                        <Img  checked={true} src = {writingOrange} />
                        <Text checked={true}>학술</Text>
                    </Category>
                ) : (
                    <Category onClick={() => setType("학술")}>
                        <Img  src = {writing} />
                        <Text>학술</Text>
                    </Category>
                )}   

                {myType === "공연예술" ? (
                    <Category onClick={() => setType("")}>
                        <Img checked={true} src = {speachBubbleLineOrange} />
                        <Text checked={true}>공연예술</Text>
                    </Category>
                ) : (
                    <Category onClick={() => setType("공연예술")}>
                        <Img src = {speachBubbleLine} />
                        <Text>공연예술</Text>
                    </Category>
                )}
                
                {myType === "체육" ? (
                    <Category onClick={() => setType("")} >
                        <Img checked={true} src = {basketballOrange}/>
                        <Text checked={true}>체육</Text>
                    </Category>
                ) : (
                    <Category onClick={() => setType("체육")}>
                        <Img src = {basketball}  />
                        <Text>체육</Text>
                    </Category>
                )}   
            </Categories>
            <ClubContainer>
                {!loading && data ? 
                    <Clubs
                    clubs={word.length < 1 ? data.readAllClubs : filterDisplay}
                    myType={myType}
                    />
                    :
                    <Loading marginT="10%"/>
                }
            </ClubContainer>
        </MainContents>
        {isLoggedIn && !uLoading && uData.readLoggedInUser && uData.readLoggedInUser.clubMaster ===null &&
            (<Popup
                trigger={<TalkPlus><FontAwesomeIcon  style ={{fontSize:"2em", marginTop: "13px"}}icon={faComments}/></TalkPlus>}
                modal
                contentStyle ={contentStyle} 
                lockScroll={true}
                >
                {close =>(
                    <>
                    <X onClick={close}>&times; </X>
                    <UTalksContainer/>
                    </>
                )}
            </Popup>)
        }
    </Wrapper>
  );
}
