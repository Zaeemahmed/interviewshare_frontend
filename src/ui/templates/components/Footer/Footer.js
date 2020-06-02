import React from 'react';
import { Box } from '../../../components/Base/Base';
import LinkTextMeeting from '../../../components/LinkTextMeeting';

export default function Footer() {
    return (
        <Box
            as="footer"
            position="fixed"
            left="0"
            bottom="0"
            width="100%"
            height="40px"
            bg="#191919"
            fontSize="20px"
            p="10px 0"
            textAlign="center"
            zIndex="10"
        >
            <LinkTextMeeting />
        </Box>
    );
}
