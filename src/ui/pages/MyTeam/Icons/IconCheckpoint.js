import React from 'react';
import { Box } from '../../../components/Base/Base';

export default function IconCheckpoint({
    size,
    color,
    left,
    top,
    right,
    bottom,
    transform,
    absolute,
    children,
}) {
    return (
        <Box
            position={absolute ? 'absolute' : 'relative'}
            left={left || 'auto'}
            right={right || 'auto'}
            bottom={bottom || 'auto'}
            top={top || 'auto'}
            width={size}
            height={size}
            borderRadius="50%"
            bg={color}
            style={{
                transform: `${transform}`,
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            {children}
        </Box>
    );
}
