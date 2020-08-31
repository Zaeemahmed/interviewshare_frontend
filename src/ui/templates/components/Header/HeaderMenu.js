import React from 'react';
import { Flex, Box } from '../../../components/Base/Base';
import {Link} from 'react-router-dom'
export default function HeaderMenu() {
    return (
        <Flex alignItems="center">
            <Box
                as={Link}
                to='/registration'
                border="none"
                padding="6px 25px"
                marginRight="10px"
                borderRadius="10px"
                backgroundColor="#3C3E3F"
                color="#A1A5A5"
                fontSize="15px"
            >
                Register
            </Box>
            <Box
                as={Link}
                to="/login"
                border="none"
                padding="6px 25px"
                borderRadius="10px"
                backgroundColor="#3C3E3F"
                color="#A1A5A5"
                fontSize="15px"
            >
                Sign In
            </Box>
        </Flex>
    );
}

