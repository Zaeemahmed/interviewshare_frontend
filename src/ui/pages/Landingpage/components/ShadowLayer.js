import React from 'react';
import { Box } from '../../../components/Base/Base';

export default function ShadowLayer() {
    return (
        <Box
            bg="rgba(25, 25, 25, 0.64)"
            css={`
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            `}
            position="absolute"
            top="0px"
            left="0px"
            width="100%"
            height="100%"
            zIndex={1}
        />
    );
}
