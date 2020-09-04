import React from 'react';
import styled from 'styled-components';
import { Spin } from 'antd';

const SpinnerOverlay = () => (
    <SpinnerBackground>
        <Spin />
    </SpinnerBackground>
);

const SpinnerBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
`;

export default SpinnerOverlay;
