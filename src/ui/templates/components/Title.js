import React from 'react';
import { Box, Text } from '../../components/Base/Base';

export default function Title({ text }) {
    return (
        <Box
            width="100%"
            height={{ _: '40px', lg: '20px' }}
            mt={{ _: '50px', lg: '40px' }}
            mb={{ _: '10px', lg: '40px' }}
        >
            <Text
                as="h1"
                textAlign={{ _: 'left', lg: 'center' }}
                fontSize={{ _: '28px', lg: '38px' }}
                lineHeight={{ _: '28px', lg: '48px' }}
                color="green"
            >
                {text}
            </Text>
        </Box>
    );
}
