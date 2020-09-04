import React from 'react';
import { Box, Flex, Text } from '../../../../components/Base/Base';
import PlayQuestion from './PlayQuestion';

const Question = ({ source }) => {
    const questionAudio = new Audio('http://alexkatz.me/codepen/music/interlude.mp3');
    return (
        <Box
            backgroundColor="#EFF0F0"
            padding="5%"
            borderRadius="0px 32px 32px 32px"
        >
            <Flex justifyContent="space-between" alignItems="center">
                <Text
                    color="#3C3E3F"
                    fontFamily="Roboto"
                    width="50%"
                    lineHeight="22px"
                >
                    What have you been doing for past two years?
                </Text>
                <PlayQuestion questionAudio={questionAudio} />
            </Flex>
        </Box>
    );
};

export default Question;
