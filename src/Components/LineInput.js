import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { faEnvelope, faEyeSlash, faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
    border-bottom: 2px solid ${props => props.theme.lightGray};
    padding: 3px 7px;
    font-family: "raleRegular";
    display: flex;
`;

/* 위에 3줄은 IOS에 대응 */
const Input = styled.input`
    appearance: none;
    -webkit-appearance: none;
    -webkit-border-radius: 0;
    border: none;
    background: ${props => props.theme.white};
    font-size: 0.85em;
    float: left;
    flex-grow: 1;
    &:focus {
        outline: none;
    }
`;

const Button = styled.div`
    display: inline-block;
    cursor: pointer;
    color: ${props => props.theme.lightGray};
    font-size: 0.9em;
    border: 1px solid ${props => props.theme.lightGray};
    padding: 5px 10px;
    border-radius: 6px;
    &:hover {
        background: ${props => props.theme.orange};
        border: 1px solid ${props => props.theme.orange};
        color: ${props => props.theme.white};
        transition: all 0.3s;
    }
`;

/* 
required: input 태그가 채워져야 하는지
onClick: icon 클릭시
icon: icon 종류(mail, pw, certification, delete), 필요없다면 null
*/
const LineInput = ({ placeholder, required = true, value, onChange, onClick, icon = null, type = "text", width = "auto", disabled = false, marginB }) => (
    <Container style={{ width: width, marginBottom:marginB }}>
        <Input placeholder={placeholder} required={required} value={value} onChange={onChange} type={type} disabled={disabled} />
        {icon === "mail" && <FontAwesomeIcon icon={faEnvelope} style={{ color: "#FF7300", fontSize: "1.1em", cursor: "pointer" }} />}
        {icon === "pw" && <FontAwesomeIcon icon={faEyeSlash} style={{ color: "#FF7300", fontSize: "1em", cursor: "pointer" }} onClick={onClick} />}
        {icon === "certification" && <Button onClick={onClick}>인증번호 받기</Button>}
        {icon === "check" && <Button onClick={onClick}>인증하기</Button>}
        {icon === "delete" && <FontAwesomeIcon icon={faTimes} style={{ color: "#D1D1D1", fontSize: "1em", cursor: "pointer" }} onClick={onClick} />}
        {icon === "correct" && <FontAwesomeIcon icon={faCheck} style={{ color: "#D1D1D1", fontSize: "1em", cursor: "pointer" }} onClick={onClick} />}
    </Container>
);

LineInput.propTypes = {
    placeholder: PropTypes.string.isRequired,
    required: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    icon: PropTypes.string,
    type: PropTypes.string,
    width: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired
};

export default LineInput;
