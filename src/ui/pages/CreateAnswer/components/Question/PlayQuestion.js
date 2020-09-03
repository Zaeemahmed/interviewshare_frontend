import React, { useState } from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import { Box } from '../../../../components/Base/Base';
import Circle from '../../../../components/Base/Circle';

const PlayQuestion = ({ source }) => {
    const [playing, setPlaying] = useState(false);
    const questionAudio = new Audio(
        'http://alexkatz.me/codepen/music/interlude.mp3'
    );
    const play = () => {
        questionAudio.play();
        setPlaying(true);
    };
    const pause = () => {
        questionAudio.pause();
        setPlaying(false);
    };
    return (
        <Box>
            <Circle bgColor="#D6E4F5">
                {!playing ? (
                    <PlayArrowIcon
                        style={{ color: '#2074D5' }}
                        onClick={play}
                    />
                ) : (
                    <PauseIcon
                        style={{ color: '#2074D5' }}
                        onClick={pause}
                    />
                )}
            </Circle>
        </Box>
    );
};

export default PlayQuestion;
