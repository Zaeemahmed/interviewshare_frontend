import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Box, Text } from '../../../components/Base/Base';

export default function TextWelcome() {
    return (
        <Box>
            <Text
                as="p"
                color="green"
                fontWeight="600"
                lineHeight={{
                    _: '28px',
                    sm: '28px',
                    md: '38px',
                    lg: '45px',
                    xl: '50px',
                    xxl: '72px',
                }}
                fontSize={{
                    _: '28px',
                    sm: '28px',
                    md: '40px',
                    lg: '42px',
                    xl: '45px',
                    xxl: '66px',
                }}
                textAlign="left"
                m={0}
                p={0}
            >
                <FormattedMessage
                    defaultMessage="I create custom {linebreak} software solutions"
                    values={{
                        linebreak: <br />,
                    }}
                />
            </Text>
            <Text
                as="p"
                color="white"
                lineHeight={{
                    _: '24px',
                    sm: '24px',
                    md: '30px',
                    lg: '25px',
                    xl: '25px',
                    xxl: '48px',
                }}
                fontSize={{
                    _: '18px',
                    sm: '14px',
                    md: '20px',
                    lg: '22px',
                    xl: '22px',
                    xxl: '35px',
                }}
                textAlign="left"
                fontWeight="300"
                m={0}
                p={0}
            >
                <FormattedMessage
                    defaultMessage="Digital Transformation of Businesses {linebreak}
                                    Scalable Web & Mobile Apps {linebreak}
                                    Digital Marketing {linebreak}
                                    E-Commerce"
                    values={{
                        linebreak: <br />,
                    }}
                />
            </Text>
        </Box>
    );
}
