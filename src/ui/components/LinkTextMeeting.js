import React from 'react';
import { FormattedMessage } from 'react-intl';
import theme from '../../config/theme';
import { Box, Text } from './Base/Base';

export default function LinkTextMeeting() {
    return (
        <Box
            as="a"
            href="https://calendly.com/maximilian-garmatsch"
            target="_blank"
            fontWeight="300"
            css={`
                text-decoration: none;
            `}
        >
            <Text
                color="green"
                border={'1px solid ' + theme.colors.green}
                borderRadius="4px"
                padding={{ sm: '8px', lg: '12px' }}
            >
                <FormattedMessage defaultMessage="Schedule a meeting" />
            </Text>
        </Box>
    );
}
