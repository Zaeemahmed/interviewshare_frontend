import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Box, Text } from '../../../../components/Base/Base';
import Line from '../../components/Line';
import IconCheckpoint from '../../Icons/IconCheckpoint';

export default function FinalDesktop() {
    return (
        <Box id="Final" height="70vh" position="relative">
            <Line
                absolute={true}
                position="vertical"
                length="130px"
                left="50%"
                size="3px"
                transform="translateX(-50%)"
            />
            <IconCheckpoint
                color="green"
                size="30px"
                left="50%"
                transform="translateX(-50%)"
                top="20%"
            />
            <Box
                position="relative"
                top="20%"
                p="20px"
                fontSize="42px"
                lineHeight="46px"
                textAlign="center"
            >
                <Text as="p" color="green">
                    <FormattedMessage defaultMessage="That’s us." />
                </Text>
                <Text as="p">
                    <FormattedMessage
                        defaultMessage="Now tell us about your project and we will schedule a call
                    within 48 hours."
                    />
                </Text>
                <Text as="p" color="green">
                    <FormattedMessage defaultMessage="Tell us about your project" />
                </Text>
            </Box>
            <Box
                as={Link}
                position="absolute"
                bottom="30px"
                color="green"
                left="50%"
                css={`
                    transform: translateX(-50%);
                    text-decoration: none;
                `}
            >
                <FormattedMessage defaultMessage="Back to Home" />
            </Box>
        </Box>
    );
}
