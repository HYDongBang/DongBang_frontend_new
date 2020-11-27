import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

//현재 폰트가 잘 안먹힘..
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
`;

const Copy = styled.div`
    padding-bottom: 20px;
    font-size: 0.7em;
`;

const Git = styled.a`
    color: ${props => props.theme.orange};
    text-decoration: none;
    cursor: pointer;
`;

export default () => (
    <Footer>
        <Title>DongBang</Title>
        <Copy>Copyright &copy; 2020 designed by HYDongBang</Copy>
        <Git href="https://github.com/HYDongBang">
            <FontAwesomeIcon style={{ boxShadow: " #989898 3px 3px 11px 0px", borderRadius: "100%" }} size="2x" icon={faGithub} />
        </Git>
    </Footer>
);
