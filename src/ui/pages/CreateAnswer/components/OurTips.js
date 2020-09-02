import React from 'react';
import { Box, Text } from '../../../components/Base/Base';
import Tip from './Tip';

const OurTips = () => {
    return (
        <Box
            backgroundColor="#EFF0F0"
            padding="5%"
            borderRadius="8px"
            mt="2rem"
        >
            <Text color="#A1A5A5" font-weight="bold" fontFamily="Roboto">
                OUR TIPS
            </Text>
            <Tip tip="Describe the technology"/>
            <Tip tip="Describe your team (the sizes and roles your team had)"/>
            <Tip tip="Describe Your achievements"/>
        </Box>
    );
};

export default OurTips;
