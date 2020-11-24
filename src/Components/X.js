import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* 
size: em 단위로 
*/
const X = ({ size="2.5em", onClick}) => (
    <FontAwesomeIcon icon={faTimes} style={{ color: "#FFFFFF", fontSize: size, cursor: "pointer" }} onClick={onClick} />
);

X.propTypes = {
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

export default X;