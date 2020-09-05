import React from 'react';
import { Text } from '../../../components/Base/Base';

const RegistrationHeading = () => {
    return (
        <>
            <Text
                as="h4"
                color="#3C3E3F"
                fontFamily="PT Serif"
                fontSize="1.5rem"
                letterSpacing="0.02em"
            >
                Search for your next candidate
            </Text>
            <Text
                as="p"
                color="#A1A5A5"
                fontFamily="Roboto"
                letterSpacing="0.02em"
            >
                Not public just for invoice
            </Text>
        </>
    );
};

export default RegistrationHeading;
