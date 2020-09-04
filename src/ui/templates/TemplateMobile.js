import React from 'react';
import { Box } from '../components/Base/Base';
import Header from './components/Header/Header';

export default function TemplateMobile({ children, mobileFooter }) {
    return (
        <Box padding="25px">
            <Box height="50px">
                <Header />
            </Box>
            <Box height="540px">{children}</Box>
            <Box left="0" bottom="0" width="100%" height="50px">
                {mobileFooter}
            </Box>
        </Box>
    );
}
