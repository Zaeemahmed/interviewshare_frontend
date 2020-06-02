import React from 'react';
import { Box } from '../../../components/Base/Base';

export default function Line({
    absolute,
    position,
    length,
    bottom,
    left,
    right,
    top,
    transform,
    size = '2px',
}) {
    return (
        <Box
            position={absolute ? 'absolute' : 'relative'}
            borderLeft={
                position === 'vertical' ? `${size} dashed #0DE99A` : 'none'
            }
            borderTop={
                position === 'horizontal' ? `${size} dashed #0DE99A` : 'none'
            }
            width={position === 'horizontal' ? length : '0px'}
            height={position === 'vertical' ? length : '0px'}
            bottom={bottom || 'auto'}
            left={left || 'auto'}
            right={right || 'auto'}
            top={top || 'auto'}
            style={{
                transform: { transform },
            }}
        />
    );
}
