import React from 'react';
import { Grid } from '@material-ui/core';
import { Box } from '../../../../components/Base/Base';
import ImageMaximilian from '../../../../components/ImageMaximilian';
import TextPartnerInfo from './components/TextPartnerInfo';
import TextPartnerRole from './components/TextPartnerRole';
import TextMeetTheRoles from './components/TextMeetTheRoles';
import RoleStartIconLine from './components/RoleStartIconLine';

export default function PartnerDesktop() {
    return (
        <Box
            id="Partner"
            position="relative"
            minHeight="calc(100vh - 240px)"
            fontSize="28px"
            css={`
                line-height: 36px;
            `}
        >
            <Box as={Grid} container justify="center">
                <Box as="div">
                    <ImageMaximilian size="300px" margin="0 2rem" />
                </Box>
                <Box>
                    <TextPartnerInfo />
                    <br />
                    <TextPartnerRole />
                </Box>
            </Box>
            <Box as={Grid} container justify="center">
                <TextMeetTheRoles bottom="120px" />
                <RoleStartIconLine size="50px" length="70px" />
            </Box>
        </Box>
    );
}
