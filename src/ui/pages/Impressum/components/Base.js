import React from 'react';
import { Text } from '../../../components/Base/Base';

export function H1({ children }) {
    return (
        <Text
            as="h1"
            mb="35px"
            mt="50px"
            fontSize="24px"
            lineHeight="24px"
            color="white"
        >
            {children}
        </Text>
    );
}

export function H2({ children }) {
    return (
        <Text as="h2" mb="10px" fontSize="16px" lineHeight="22px" color="white">
            {children}
        </Text>
    );
}

export function P({ children }) {
    return (
        <Text as="p" mb="20px" fontSize="16px" lineHeight="22px" color="green">
            {children}
        </Text>
    );
}
