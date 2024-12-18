import React from 'react';
import styled from 'styled-components';

const Pre = styled.pre`
    margin-bottom: 10px;
    font-family: monospace;
    font-weight: 500;
    font-size: 1.1rem;

    color: ${(props) => props.status === 'error' ? '#EA2C2C' : '#4CE84C'};

    &:last-child {
        margin-bottom: 0;
    }
`;

const Result = ({ result }) => (
    <div>
        <h2>Output:</h2>
        {result.output.split('\n').map((line, index) => (
            <Pre key={index} status={result.status}>
            {line}
            </Pre>
        ))}
    </div>
);

export default Result;