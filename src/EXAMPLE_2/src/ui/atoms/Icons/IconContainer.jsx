import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

function IconContainer({ color, children }) {
    return <RoundBorder color={color}>{children}</RoundBorder>;
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

IconContainer.propTypes = {
    color: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default IconContainer;
