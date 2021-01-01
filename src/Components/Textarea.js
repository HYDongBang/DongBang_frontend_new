import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Input = styled.textarea`
    border: none;
    overflow: auto;
    outline: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    font-size: 0.85em;
    font-family: raleR;
    resize: none;
`;

const Textarea = ({ placeholder, required = true, value, onChange, type = "text", width = "auto", height = "auto", disabled = false }) => (
    <Input placeholder={placeholder} required={required} value={value} onChange={onChange} type={type} disabled={disabled} style={{ width: width, height: height }}></Input>
);

Textarea.propTypes = {
    placeholder: PropTypes.string.isRequired,
    required: PropTypes.bool,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired
};

export default Textarea;
