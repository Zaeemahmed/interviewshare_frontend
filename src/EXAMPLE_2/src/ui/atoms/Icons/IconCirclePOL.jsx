import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import IconPol from './IconPol';

function IconCirclePOL({ color }) {
    return (
        <RoundBorder color={color}>
            <IconPol color={color} />
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

IconCirclePOL.propTypes = {
    color: PropTypes.string,
};

export default IconCirclePOL;
