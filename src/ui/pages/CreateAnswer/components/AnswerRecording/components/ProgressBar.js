import React from 'react';
import { Flex } from '../../../../../components/Base/Base';
import Time from './Time';
import Playhead from './Playhead';

const ProgressBar = ({ duration, currentTime, onTimeUpdate }) => {
    const percentage = ((currentTime / duration) * 100).toFixed(2);
    const moveSeek = e => {
        const newPlayHeadPosition =
            e.clientX - e.target.getBoundingClientRect().left;
        const progressToDurationRatio = duration / e.target.offsetWidth;
        const newTime = progressToDurationRatio * newPlayHeadPosition;
        onTimeUpdate(newTime);
    };

    return (
        <Flex
            width="100%"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
        >
            <Flex
                borderRadius="5px"
                margin="0 20px"
                height="6px"
                alignItems="center"
                cursor="pointer"
                width="100%"
                style={{
                    background: `linear-gradient(to right, #2074D5 ${percentage}%, #E0E1E1 0)`,
                }}
                onClick={e => {
                    moveSeek(e);
                }}
            >
                <Playhead percentage={percentage} />
            </Flex>
            <Flex justifyContent="space-between" width="100%" mt="15px">
                <Time time={currentTime} />
                <Time time={duration} />
            </Flex>
        </Flex>
    );
};

export default ProgressBar;
