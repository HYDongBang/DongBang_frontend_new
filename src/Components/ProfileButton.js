import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.button`
    width: 110px;
    height: 35px;
    border-radius: 5px;
    background-color: ${props => props.color === "orange" && "#FF7300"};
    background-color: ${props => props.color === "darkgray" && "#484C4F"};
    background-color: ${props => props.color === "gray" && "#D1D1D1"};
    color: ${props => props.theme.white};
    text-align: center;
    font-size: 0.9em;
    cursor: pointer;
    padding: 5px 30px;
    border: none;
    &:hover {
        background-color: ${props => props.hover === "orange" && "#FF7300"};
        transition: 0.1s;
    }
`;

//color -  gray, darkgray, orange 있음
const ProfileButton = ({ content, color, hover, style }) => (
    <ButtonContainer color={color} hover={hover} style={style}>
        {content}
    </ButtonContainer>
);

export default ProfileButton;
