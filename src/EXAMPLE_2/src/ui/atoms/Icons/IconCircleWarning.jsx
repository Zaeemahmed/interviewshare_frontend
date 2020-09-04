import React from 'react';
import styled from 'styled-components';
import IconWarning from './IconWarning';

function IconCircleOcean() {
    return (
        <RoundBorder>
            <IconWarning />
        </RoundBorder>
    );
}

const RoundBorder = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: #fff;
    border: 1px solid #f88c2c;
`;

export default IconCircleOcean;
