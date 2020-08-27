import React from 'react';
import { Box } from '../../../components/Base/Base';

export default function Footer() {
    return (
        <Box
            as="footer"
            position="fixed"
            left="0"
            bottom="0"
            width="100%"
            p="10px 0"
            textAlign="center"
            zIndex="10"
        >
            <Box
                as="button"
                width="80%"
                padding="10px 0"
                borderRadius="10px"
                border="none"
                backgroundColor="#31C4BF"
                fontSize="15px"
                color="#3C3E3F"
                fontWeight="900"
            >
                Start Recording
            </Box>
        </Box>
    );
}
