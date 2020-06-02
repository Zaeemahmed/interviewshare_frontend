import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { Box, Text } from '../../components/Base/Base';

export default function CookieMessageMobile({ acceptCookie }) {
    return (
        <Box
            position="absolute"
            maxHeight="40%"
            bottom="0"
            left="0"
            border="1px solid #0DE99A"
            bg="rgba(25, 25, 25, 0.64)"
            fontSize="16px"
            lineHeight="16px"
            fontWeight="300"
            color="green"
            zIndex="10"
            p="20px"
            css={`
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            `}
        >
            <FormattedMessage
                defaultMessage="
                    <header>This site uses cookies.</header>
                    We use our own cookies and those of third parties
                    to improve our services, customize our website,
                    improve users experience in our website, identify and solve
                    problems, measure the usage, compile statistics. {linebreak}
                    View our cookie <policy>policy</policy>."
                values={{
                    header: chunks => (
                        <Text fontSize="20px" fontWeight="400">
                            {chunks}
                            <br />
                            <br />
                        </Text>
                    ),
                    linebreak: <br />,
                    policy: chunks => (
                        <Text
                            as={Link}
                            to="/impressum"
                            css={`
                                text-decoration: none;
                                color: white;
                            `}
                            color="white"
                        >
                            {chunks}
                        </Text>
                    ),
                }}
            />
            <br />
            <Box
                as="button"
                bg="#222"
                css={`
                    box-shadow: 0px 0px 16px #000000;
                `}
                borderRadius="12px"
                border="none"
                fontSize="20px"
                color="green"
                p="10px 15px"
                mt="10px"
                onClick={acceptCookie}
            >
                Accept
            </Box>
        </Box>
    );
}
