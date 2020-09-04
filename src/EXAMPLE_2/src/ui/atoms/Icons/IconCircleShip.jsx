import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import IconShip from './IconShip';

function IconCircleShip({ style, color }) {
    color = color || 'black';

    return (
        <RoundBorder style={style}>
            <IconShip color={color} />
        </RoundBorder>
    );
}

const RoundBorder = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    width: 32px;
    border-radius: 50%;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.12);
`;

IconCircleShip.propTypes = {
    color: PropTypes.string,
};

export default IconCircleShip;
