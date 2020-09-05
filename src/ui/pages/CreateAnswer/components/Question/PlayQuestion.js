import React, { useState } from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import { Box } from '../../../../components/Base/Base';
import Circle from '../../../../components/Base/Circle';

const PlayQuestion = ({ questionAudio }) => {
    const [playing, setPlaying] = useState(false);
    const play = () => {
        setPlaying(true);
        questionAudio.play();
    };
    const pause = () => {
        setPlaying(false);
        questionAudio.pause();
    };
    return (
        <Box>
            <Circle bgColor="#D6E4F5">
                {!playing ? (
                    <PlayArrowIcon
                        style={{ color: '#2074D5', cursor: 'pointer' }}
                        onClick={play}
                    />
                ) : (
                    <PauseIcon
                        style={{ color: '#2074D5', cursor: 'pointer' }}
                        onClick={pause}
                    />
                )}
            </Circle>
        </Box>
    );
};

export default PlayQuestion;
