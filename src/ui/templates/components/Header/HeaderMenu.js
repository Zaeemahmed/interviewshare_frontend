import React, { useContext } from 'react';
import { Flex, Box } from '../../../components/Base/Base';
import Icon from '../../../components/PortfolioIcons/Icon';
import { SizeContext } from '../../../../context/SizeContext';
import LinkTextMeeting from '../../../components/LinkTextMeeting';

export default function HeaderMenu() {
    return (
        <Flex alignItems="center">
            <Box
                as="button"
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
                as="button"
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
