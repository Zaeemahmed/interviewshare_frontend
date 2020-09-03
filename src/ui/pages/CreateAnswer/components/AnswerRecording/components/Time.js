import React from 'react';
import { Box, Text } from '../../../../../components/Base/Base';

const generateFormattedTime = currentTime => {
    const intSeconds = parseInt(currentTime, 10);
    let hours = Math.floor(intSeconds / 3600);
    let minutes = Math.floor((intSeconds - hours * 3600) / 60);
    let seconds = intSeconds - hours * 3600 - minutes * 60;

    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    return {
        hrs: hours,
        mins: minutes,
        secs: seconds,
    };
};

const Timer = ({ time }) => {
    const { hrs, mins, secs } = generateFormattedTime(time);
    return (
        <Box>
            <Text fontFamily="Roboto" fontSize="14px" color="#777D7D">
                {hrs.toString()}:{mins.toString()}:{secs.toString()}
            </Text>
        </Box>
    );
};

export default Timer;
