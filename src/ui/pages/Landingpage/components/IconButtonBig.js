import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '../../../components/Base/Base';

export default function IconButtonBig({ to, children, newTab = false }) {
    return (
        <Box
            as={Link}
            to={to}
            target={newTab ? '_blank' : '_self'}
            css={`
                text-decoration: none;
            `}
        >
            <Box
                as="div"
                width="100%"
                minHeight="100%"
                css={`
                    box-shadow: 0px 0px 6px #0cd58c;
                `}
                bg="#0DE99A"
                borderRadius="12px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                color="#222222"
                fontSize="18px"
                fontWeight="500"
            >
                {children}
            </Box>
        </Box>
    );
}
