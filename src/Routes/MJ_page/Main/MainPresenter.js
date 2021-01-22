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

import { useQuery } from "react-apollo-hooks";
import {READ_ALL_CLUBS} from "./MainQueries"
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
    width: 100%;
    height: 500px;
`;

const MainContents = styled.div`
    width: 100%;
    height:100%;
    padding: 0 20%;
`;

const Categories = styled.div`
    height: 200px;
    width: 100%;
    padding: 30px;
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
`;

const Category = styled.div`
    width: 90px;
    height: 90px;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    padding: 20%;
    background-color:${props => props.checked ? "#FFFFFF" : "#F7F8F9" };
    border-radius:25%;
    cursor:pointer;
    border: ${props => props.checked &&  "2px solid #FF7300" };
`;

const AllImg = styled.div`
    width: 100%;
    height: 100%;
    font-size:1.7em;
    text-align:center;
    padding-top: 32%;
    border-radius:25%;
    background-color:${props => props.checked ? "#FFFFFF" : "#F7F8F9" };
    border: ${props => props.checked &&  "2px solid #FF7300" };
    color: ${props => props.checked &&  "#FF7300" };
`;

const Text = styled.div`
    width: 110px;
    text-align:center;
    margin-top:15px;
    margin-left:-10px;
    color: ${props => props.checked &&  "#FF7300" };
`;


const ClubContainer = styled.div`
    min-height:600px;
    width: 100%;
    display: inline-flex;
    flex-wrap: wrap;
    justify-content:space-between;
`;

const SearchBar = styled.input`
    width: 40%;
    height: 50px;
    position:absolute;
    margin-top: 150px;
    margin-left: 30%;
    color: ${props => props.checked};
    font-size: 1em;
    padding: 10px;
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

const X = styled.a`
  cursor:pointer;
  position:absolute;
  right:-30px;
  top: -8px;
  font-size:2.5em;
  color: #E5EAEE;
  :hover{
    color: #E5EAEE;
  }
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
}) => {

  const { loading, data } = useQuery(READ_ALL_CLUBS);

    const handleChange = (e) => {
        setWord(e);
    
        let oldList = data.readAllClubs.map((club) => {
          return {
            id: club.id,
            name: club.name,
            type: club.type,
            description: club.description,
            logoImage: club.logoImage,
            clubImage: club.clubImage,
          };
        });
    
        if (word !== "") {
          let newList = [];
          newList = oldList.filter((club) => club.name.includes(word));
          setFilterDisplay(newList);
        } else {
          setFilterDisplay(data.readAllClubs);
        }
      };
 
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
                    <Category onClick={() => setType("")}>
                        <Img checked="true" src = {paintingOrange} />
                        <Text checked="true">문화/예술/공연</Text>
                    </Category>
                ) : (
                    <Category onClick={() => setType("문화예술공연")}>
                        <Img src = {painting}/>
                        <Text>문화/예술/공연</Text>
                    </Category>
                )}

                {myType === "봉사사회활동" ? (
                    <Category onClick={() => setType("")} >
                        <Img checked="true" src = {teamOrange} />
                        <Text checked="true">봉사/사회활동</Text>
                    </Category>
                ) : (
                    <Category onClick={() => setType("봉사사회활동")}>
                        <Img src = {team} />
                        <Text >봉사/사회활동</Text>
                    </Category>
                )}

                {myType === "학술교양종교" ? (
                    <Category onClick={() => setType("")}>
                        <Img  checked="true" src = {writingOrange} />
                        <Text checked="true">학술/교양/종교</Text>
                    </Category>
                ) : (
                    <Category onClick={() => setType("학술교양종교")}>
                        <Img  src = {writing} />
                        <Text>학술/교양/종교</Text>
                    </Category>
                )}   

                {myType === "어학친목" ? (
                    <Category onClick={() => setType("")}>
                        <Img checked="true" src = {speachBubbleLineOrange} />
                        <Text checked="true">어학/친목</Text>
                    </Category>
                ) : (
                    <Category onClick={() => setType("어학친목")}>
                        <Img src = {speachBubbleLine} />
                        <Text>어학/친목</Text>
                    </Category>
                )}
                
                {myType === "체육" ? (
                    <Category onClick={() => setType("")} >
                        <Img checked="true" src = {basketballOrange}/>
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
        <Popup
              trigger={<TalkPlus><FontAwesomeIcon  style ={{fontSize:"2em", marginTop: "13px"}}icon={faComments}/></TalkPlus>}
              modal
              contentStyle ={contentStyle} 
            >
              {close =>(
                <>
                <X onClick={close}>&times; </X>
                <UTalksContainer/>
                </>
              )}
        </Popup>
    </Wrapper>
  );
}
