import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

/* 위에 3줄은 IOS에 대응 */
const Input = styled.input`
    -webkit-appearance: none;
    -webkit-border-radius: 0;
    font-size: 0.85em;
    font-family: raleRegular;
    border: 1px solid ${props => props.theme.lightGray};
    border-radius: 5px;
    padding: 7px 10px;
`;

/* 
required: input 태그가 채워져야 하는지
*/
const BoxInput = ({ placeholder, required = true, value, onChange, type = "text", width = "auto", disabled = false }) => (
    <Input placeholder={placeholder} required={required} value={value} onChange={onChange} style={{ width: width }} type={type} disabled={disabled} />
);

BoxInput.propTypes = {
    placeholder: PropTypes.string.isRequired,
    required: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string,
    width: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
};

export default BoxInput;
