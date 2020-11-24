import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Input = styled.input``;

const BoxInput = ({ placeholder, required = true, value, onChange, type = "text", width = "auto", disabled = false }) => (
    <Input placeholder={placeholder} required={required} value={value} onChange={onChange} type={type} disabled={disabled} style={{ width: width }}></Input>
);

BoxInput.propTypes = {
    placeholder: PropTypes.string.isRequired,
    required: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string,
    width: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired
};

export default BoxInput;
