import React from 'react';
import { Grid } from '@material-ui/core';
import { Box } from '../../../../components/Base/Base';
import ImageMaximilian from '../../../../components/ImageMaximilian';
import TextPartnerInfo from './components/TextPartnerInfo';
import TextPartnerRole from './components/TextPartnerRole';
import TextMeetTheRoles from './components/TextMeetTheRoles';
import RoleStartIconLine from './components/RoleStartIconLine';

export default function PartnerMobile() {
    return (
        <Box
            id="Partner"
            position="relative"
            minHeight="400px"
            mt="4rem"
            height="calc(100vh - 6rem)"
            css={`
                line-height: 1.2rem;
                text-align: center;
            `}
        >
            <Box as={Grid} container alignItems="center">
                <Box as={Grid} item xs={12}>
                    <TextPartnerInfo />
                    <Box as="div">
                        <ImageMaximilian margin="1rem 0" />
                    </Box>
                    <TextPartnerRole />
                </Box>
            </Box>
            <Box as={Grid} container justify="center">
                <TextMeetTheRoles bottom="100px" />
                <RoleStartIconLine size="30px" length="50px" />
            </Box>
        </Box>
    );
}
