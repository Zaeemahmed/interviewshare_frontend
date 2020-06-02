import React from 'react';
import { Flex, Text } from '../../../components/Base/Base';

export default function CountSection({ number, children }) {
    return (
        <Flex alignItems="top" mb={{ _: '30px', lg: '40px' }}>
            <Text
                fontSize={{ _: '38px', lg: '48px' }}
                lineHeight={{ _: '38px', lg: '48px' }}
                mr={{ _: '15px', lg: '20px' }}
                color="green"
            >
                {number}
            </Text>
            <Text
                fontSize={{ _: '16px', lg: '20px' }}
                lineHeight={{ _: '20px', lg: '26px' }}
                fontWeight="300"
            >
                {children}
            </Text>
        </Flex>
    );
}
