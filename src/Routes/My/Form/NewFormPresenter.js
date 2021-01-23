import React from "react";
import styled from "styled-components";
import LineInput from "../../../Components/LineInput";
import ProfileButton from "../../../Components/ProfileButton";


import { Dropdown} from "react-bootstrap"

const Text = styled.div`
    font-size:1.2em;
    margin-bottom: 20px;
`;

const Inner = styled.form``;

const Wrapper = styled.div`
    margin-bottom: 10px;
    display:flex;
    `;

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

const Options = styled.div``;

const OptionPlus = styled.div`
    display: flex;
    flex-direction: row-reverse;
    width: 80%;
    font-size: 0.8em;
    margin-top: 10px;
    color: ${props => props.theme.darkGray};
    `;



const DropdownStyle ={
    width: "100%",
    backgroundColor: "transparent",
    color: "black",
    border: "1px solid black",
    "&:focus":{
        boxShadow: "0 0 0 0.2rem rgb(255 200 162)"
    },
}

export default ({
    myType,
    myTitle,
    onCreateQuestion
}) => {
    console.log(myTitle.value)

return (
    <form onSubmit= {onCreateQuestion}>
        <Text> 가입신청 양식 추가 </Text>
        <Wrapper>
            <Question {...myTitle}  style = {{width: "100%"}} placeholder="질문" />
            <Dropdown style ={{width:"19%",paddingLeft:"1%"}}>
                <Dropdown.Toggle style ={DropdownStyle}>{myType.value === "short"? "주관식": "객관식"}</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => myType.setValue("short")} >주관식</Dropdown.Item>
                    <Dropdown.Item onClick={() => myType.setValue("multiple")}>객관식</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Wrapper>
        <ProfileButton content="저장" color="orange" style ={{float:"right"}}></ProfileButton>
        


    </form>


)

}
