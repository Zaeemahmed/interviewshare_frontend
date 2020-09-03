import React, { useState } from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import { Box, Flex, Text } from '../../../../components/Base/Base';
import Circle from '../../../../components/Base/Circle';
import PlayQuestion from './PlayQuestion';

const Question = ({ source }) => {
    return (
        <Box
            backgroundColor="#EFF0F0"
            padding="5%"
            borderRadius="0px 32px 32px 32px"
        >
            <Flex justifyContent="space-between">
                <Text
                    color="#3C3E3F"
                    fontFamily="Roboto"
                    width="50%"
                    lineHeight="22px"
                >
                    What have you been doing for past two years?
                </Text>
                <PlayQuestion source={source} />
            </Flex>
        </Box>
    );
};

export default Question;
