import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Text } from '../../../components/Base/Base';

export default function TextLogo() {
    return (
        <Box
            as={Link}
            to="/"
            css={`
                text-decoration: none;
            `}
        >
            <Text
                as="h1"
                color="green"
                fontSize={{
                    _: '19px',
                    sm: '19px',
                    md: '28px',
                    lg: '22px',
                    xl: '22px',
                    xxl: '44px',
                }}
                lineHeight={{
                    _: '16px',
                    sm: '16px',
                    md: '16px',
                    lg: '44px',
                    xl: '44px',
                    xxl: '44px',
                }}
                fontWeight="400"
            >
                Maximilian Garmatsch
            </Text>
        </Box>
    );
}
