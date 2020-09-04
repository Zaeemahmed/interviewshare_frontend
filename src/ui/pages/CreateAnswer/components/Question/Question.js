import React from 'react';
import { Box, Flex, Text } from '../../../../components/Base/Base';
import PlayQuestion from './PlayQuestion';

const Question = ({ source }) => {
    const questionAudio = new Audio('http://alexkatz.me/codepen/music/interlude.mp3');
    return (
        <Box
            backgroundColor="#EFF0F0"
            p="5%"
            borderRadius="0px 32px 32px 32px"
        >
            <Flex justifyContent="space-between" alignItems="center" p="5px">
                <Text
                    color="#3C3E3F"
                    fontFamily="Roboto"
                    fontSize="14px"
                    width="65%"
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
