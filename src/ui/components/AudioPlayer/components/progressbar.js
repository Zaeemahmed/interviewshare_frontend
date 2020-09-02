import React from 'react';
import { Flex } from '../../../components/Base/Base';
import Timer from './timer';
import Playhead from './Playhead';

const ProgressBar = ({ duration, currentTime, onTimeUpdate }) => {
    const percentage = ((currentTime / duration) * 100).toFixed(2);
    const moveSeek = e => {
        const offsetWidth = e.target.offsetWidth;
        const newPlayHeadPosition =
            e.clientX - e.target.getBoundingClientRect().left;
        console.log(
            e.clientX,
            e.target.getBoundingClientRect().left,
            e.target.offsetWidth
        );
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
                <Timer time={currentTime} />
                <Timer time={duration} />
            </Flex>
        </Flex>
    );
};

export default ProgressBar;
