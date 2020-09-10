import React from 'react';
import { Box, Text } from '../../../../../components/Base/Base';

const ShopText = () => {
    return (
        <Box
            lineHeight="14px"
            fontSize="24px"
            fontFamily="PT Serif"
            fontWeight="bold"
            fontStyle="normal"
            color="#282A2A"
            letterSpacing="0.08em"
        >
            <Text as="p">Our sales</Text>
            <Text as="p">team ate a clown!</Text>
            <Text as="p">check out our shop</Text>
        </Box>
    );
};

export default ShopText;
