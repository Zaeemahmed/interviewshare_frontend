import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from 'antd';

function IconCircleFile({ style }) {
    return (
        <RoundBorder style={style}>
            <Icon type="file" style={{ color: 'black' }} />
        </RoundBorder>
    );
}

const RoundBorder = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    width: 32px;
    border-radius: 50%;
    background-color: #fff;
    font-size: 18px;
    border: 1px solid rgba(0, 0, 0, 0.12);
`;

IconCircleFile.propTypes = {
    color: PropTypes.string,
};

export default IconCircleFile;
