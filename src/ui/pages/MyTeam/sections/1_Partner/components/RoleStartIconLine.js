import React from 'react';
import IconCheckpoint from '../../../Icons/IconCheckpoint';
import Line from '../../../components/Line';

export default function RoleStartIconLine({ size, length }) {
    return (
        <>
            <IconCheckpoint
                absolute={true}
                left="50%"
                bottom={length}
                transform="translateX(-50%)"
                color="white"
                size={size}
            />
            <Line
                absolute={true}
                position="vertical"
                length={length}
                transform="translateX(-50%)"
                bottom="0px"
                size="3px"
                left="50%"
            />
        </>
    );
}
