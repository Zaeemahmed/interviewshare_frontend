import React, { useEffect, useState } from 'react';
import { Box } from '../../../components/Base/Base';
import CookieMessageMobile from '../../../templates/components/CookieMessageMobile';
import ShadowLayer from './ShadowLayer';

export default function BackgroundLayerMobile({ children }) {
    return (
        <Box
            css={`
                background-size: cover;
            `}
            position="absolute"
            left="0"
            top="60px"
            height="calc(100% - 120px)"
            width="100%"
            zIndex={1}
        >
            {children}
        </Box>
    );
}
