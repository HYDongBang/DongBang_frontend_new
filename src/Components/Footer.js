import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = styled.footer`
    width: 100%;
    height: 160px;
    background-color: #f9f9f9;
    cursor: default;
    text-align: center;
`;

const Title = styled.div`
    padding: 20px;
    font-size: 1.6em;
    font-family: 'raleRegular';
    @media ( max-width: 768px ) {
        font-size: 1em;
        font-weight: 600;
    }
`;

const Copy = styled.div`
    padding-bottom: 20px;
    font-size: 0.7em;
    @media ( max-width: 768px ) {
        font-size: 0.5em;
    }
`;

const Git = styled.a`
    color: ${props => props.theme.orange};
    text-decoration: none;
    cursor: pointer;
    &:hover{
        color: ${props => props.theme.orange};
    }
`;

export default () => (
    <Footer>
        <Title>DongBang</Title>
        <Copy>Copyright &copy; 2020-2021 designed by HYDongBang</Copy>
        <Git href="https://github.com/HYDongBang" target="_blank" title = "Git page">
            <FontAwesomeIcon style={{ boxShadow: " #989898 3px 3px 11px 0px", borderRadius: "100%" }} size="2x" icon={faGithub} />
        </Git>
    </Footer>
);
