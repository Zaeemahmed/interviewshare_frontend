import React from 'react';
import styled from 'styled-components';
import { Layout, Row, Col } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import { SCREEN_XS_WIDTH } from '@/config/MediaQuery';
import UserMenu from './UserMenu/UserMenu';
import Logo from './Logo';
import Navigation from './Navigation';

function LayoutHeader() {
    const isXS = useMediaQuery({ maxWidth: SCREEN_XS_WIDTH });
    const third = { span: 8 };

    return (
        <HeaderSt padding={isXS ? 10 : 40}>
            <HeaderInnerSt>
                <Row>
                    <LogoColSt xs={third} md={third}>
                        <Link to="/orders">
                            <Logo />
                        </Link>
                    </LogoColSt>
                    <NavigationColSt xs={third} md={third}>
                        <Navigation />
                    </NavigationColSt>
                    <UserMenuColSt xs={third} md={third}>
                        <UserMenu />
                    </UserMenuColSt>
                </Row>
            </HeaderInnerSt>
        </HeaderSt>
    );
}

const HeaderSt = styled(Layout.Header)`
    background-color: white !important;
    box-shadow: 0px 0px 5px 0px rgba(128, 128, 128, 0.4);
    padding-right: ${props => props.padding}px;
    padding-left: ${props => props.padding}px;
`;

const HeaderInnerSt = styled.div`
    max-width: 1120px;
    margin: 0 auto;
`;

const NavigationColSt = styled(Col)`
    text-align: center;
`;

const UserMenuColSt = styled(Col)`
    text-align: right;
`;

const LogoColSt = styled(Col)`
    overflow: hidden;
`;

export default LayoutHeader;
