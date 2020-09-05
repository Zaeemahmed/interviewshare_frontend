import React, { useState } from 'react';
import { useVoiceRecorder } from 'voicerecorder';
import { Flex, Box } from '../../../../components/Base/Base';
import AudioPlayer from './AudioPlayer';
import Mic from './components/Mic';
import Play from './components/Play';
import Pause from './components/Pause';
import Stop from './components/Stop';

const RecordingControls = ({ src }) => {
    const { start, pause, stop } = useVoiceRecorder();
    const [status, setStatus] = useState('inactive');
    const [playing, setPlaying] = useState(false);
    return (
        <Box width="100%">
            {status === 'saved' && (
                <AudioPlayer
                    src={src}
                    playing={playing}
                    setPlaying={setPlaying}
                />
            )}
            <Flex justifyContent="space-around" alignItems="center">
                {status === 'saved' &&
                    (playing ? (
<<<<<<< HEAD
                        <Pause onClick={() => setPlaying(false)} />
                    ) : (
                        <Play onClick={() => setPlaying(true)} />
=======
                        <Pause handleClick={() => setPlaying(false)} />
                    ) : (
                        <Play handleClick={() => setPlaying(true)} />
>>>>>>> 72ff9bf7a4f9cbdbbaa0d23a34e00bd3b13f1fd0
                    ))}
                {status === 'inactive' ||
                status === 'paused' ||
                status === 'saved' ? (
                    <Mic
                        onClick={() => {
                            start();
                            setStatus('active');
                        }}
                    />
                ) : (
                    <Pause
                        onClick={() => {
                            pause();
                            setStatus('paused');
                        }}
                    />
                )}
                {(status === 'paused' ||
                    status === 'active' ||
                    status === 'saved') && (
                    <Stop
                        onClick={() => {
                            stop();
                            setStatus('saved');
                        }}
                    />
                )}
            </Flex>
        </Box>
    );
};

export default RecordingControls;
