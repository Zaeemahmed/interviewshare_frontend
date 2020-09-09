import React, { Fragment } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { SCREEN_XS_WIDTH } from '@/config/MediaQuery';

function Logo() {
    const isXS = useMediaQuery({ maxWidth: SCREEN_XS_WIDTH });

    const Name = styled.div`
        margin-top: 0px;
        margin-left: 25px;
        font-size: ${isXS ? '15px' : '20px'};
        color: black;
        overflow: hidden;
        font-weight: 700;
    `;

    return (
        <Fragment>
            <Image />
            <Name>DASHPORT</Name>
        </Fragment>
    );
}

const Image = styled.div`
    background-image: url('/assets/dashport_icon_positiv.png');
    background-size: contain;
    background-repeat: no-repeat;
    width: 19px;
    height: 16px;
    margin-top: 24px;
    float: left;
    line-height: 14px;
`;

export default Logo;
