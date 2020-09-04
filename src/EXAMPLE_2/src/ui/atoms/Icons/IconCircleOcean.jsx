import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import IconOcean from './IconOcean';

function IconCircleOcean({ color }) {
    return (
        <RoundBorder color={color}>
            <IconOcean color={color} />
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
    ${props =>
        props.color &&
        css`
            border: 1px solid ${props.color};
        `}
`;

IconCircleOcean.propTypes = {
    color: PropTypes.string,
};

export default IconCircleOcean;
