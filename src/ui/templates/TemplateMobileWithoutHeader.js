import React from 'react';
import { Box } from '../components/Base/Base';

export default function TemplateMobileWithOutHeader({ children, mobileFooter }) {
    return (
        <Box p="25px">
            <Box p="10px 0px">
                {children}
            </Box>
            {mobileFooter && (
                <Box left="0" bottom="0" width="100%" height="50px">
                    {mobileFooter}
                </Box>
            )}
        </Box>
    );
}