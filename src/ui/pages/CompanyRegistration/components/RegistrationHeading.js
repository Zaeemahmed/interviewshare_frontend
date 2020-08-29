import React from 'react';
import { Box } from '../../../components/Base/Base';

const RegistrationHeading = () => {
    return (
        <Box>
            <Box
                as="h4"
                color="#3C3E3F"
                fontFamily="PT Serif"
                fontSize="1.5rem"
                letterSpacing="0.02em"
                marginLeft="3rem"
            >
                Search for your next candidate
            </Box>
            <Box
                as="p"
                color="#A1A5A5"
                fontFamily="Roboto"
                letterSpacing="0.02em"
                marginLeft="3rem"
            >
                Not public just for invoice
            </Box>
        </Box>
    );
};

export default RegistrationHeading;
