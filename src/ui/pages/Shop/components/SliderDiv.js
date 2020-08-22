import React from 'react';
import { Box } from '../../../components/Base/Base';
export default function Slider({ children }) {
    return (
        <Box as="div" width="100%" height="100%">
            {children}
        </Box>
    );
}
