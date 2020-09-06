import React from 'react';
import { Flex, Box } from '../../../components/Base/Base';
import { Link } from 'react-router-dom';
export default function HeaderMenu() {
    return (
        <Flex alignItems="center">
            <Box
                as={Link}
                to="/registration"
                border="none"
                padding="6px 25px"
                mr="10px"
                bg="#3C3E3F"
                color="#A1A5A5"
                fontSize="15px"
                style={{ borderRadius: '10px' }}
            >
                Register
            </Box>
            <Box
                as={Link}
                to="/login"
                border="none"
                padding="6px 25px"
                bg="#3C3E3F"
                color="#A1A5A5"
                fontSize="15px"
                style={{ borderRadius: '10px' }}
            >
                Sign In
            </Box>
        </Flex>
    );
}
