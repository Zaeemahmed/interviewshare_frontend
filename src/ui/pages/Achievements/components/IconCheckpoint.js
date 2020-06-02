import React from 'react';
import { Box } from '../../../components/Base/Base';

export default function IconCheckpoint({ size, children }) {
    return (
        <Box
            borderRadius="50%"
            width={size}
            height={size}
            bg="#191919"
            css={`
                box-shadow: 0px 0px 16px #000000;
            `}
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            {children}
        </Box>
    );
}
