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
                        <Pause handleClick={() => setPlaying(false)} />
                    ) : (
                        <Play handleClick={() => setPlaying(true)} />
                    ))}
                {status === 'inactive' ||
                status === 'paused' ||
                status === 'saved' ? (
                    <Mic
                        handleClick={() => {
                            start();
                            setStatus('active');
                        }}
                    />
                ) : (
                    <Pause
                        handleClick={() => {
                            pause();
                            setStatus('paused');
                        }}
                    />
                )}
                {status === 'paused' ||
                    status === 'active' ||
                    (status === 'saved' && (
                        <Stop
                            handleClick={() => {
                                stop();
                                setStatus('saved');
                            }}
                        />
                    ))}
            </Flex>
        </Box>
    );
};

export default RecordingControls;
