import React from "react";
import styled from 'styled-components';

const Select = styled.select`
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
    
    &:hover {
        border-color: #646cff;
    }

    &:focus,
    &:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
    }
`;

const LanguageSelector = ({ value, onChange }) => (
    <Select value={value} onChange={onChange}>
        <option value="python">Python</option>
        <option value="go">Go</option>
        <option value="javascript">JavaScript</option>
    </Select>
);

export default LanguageSelector;
