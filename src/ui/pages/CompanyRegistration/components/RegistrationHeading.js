import React from 'react';
import { Box } from '../../../components/Base/Base';

const RegistrationHeading = () => {
    return (
        <Box>
            <Box
                as="h5"
                color="#3C3E3F"
                fontFamily="PT Serif"
                fontSize="1.5rem"
                letterSpacing="0.02em"
                textAlign="center"
            >
                Search for your next candidate
            </Box>
            <Box
                as="p"
                color="#A1A5A5"
                fontFamily="Roboto"
                letterSpacing="0.02em"
            >
                Not public just for invoice
            </Box>
        </Box>
    );
};

export default RegistrationHeading;
