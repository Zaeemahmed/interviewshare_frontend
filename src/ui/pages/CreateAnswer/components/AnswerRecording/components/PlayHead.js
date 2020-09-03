import React from 'react';
import { Box } from '../../../../../components/Base/Base';

const playHead = ({ percentage }) => {
    return (
        <Box
            position="relative"
            height="16px"
            width="16px"
            borderRadius="50%"
            backgroundColor="#2074D5"
            style={{ left: `${percentage}%` }}
        />
    );
};

export default playHead;
