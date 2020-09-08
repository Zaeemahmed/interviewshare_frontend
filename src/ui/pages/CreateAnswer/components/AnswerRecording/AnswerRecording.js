import React, { useState } from 'react';
import { Flex, Box } from '../../../../components/Base/Base';
import { VoiceRecorder } from 'voicerecorder';
import RecordingControls from './RecordingControls';
import Mic from './components/Mic';

const AnswerRecording = ({ upload, src }) => {
    const [stream, setStream] = useState(null);
    const constraints = {
        echoCancellation: true,
        noiseSuppression: true,
        sampleRate: 44100,
    };
    const options = {
        audioBitsPerSecond: 128000,
    };

    const setUpStream = async () => {
        navigator.getUserMedia =
            navigator.getUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.msGetUserMedia ||
            navigator.webkitGetUserMedia;
        navigator.permissions
            .query({ name: 'microphone' })
            .then(async permissionObj => {
                if (permissionObj.state === 'denied') {
                    alert('Microphone access Blocked enable it to continue');
                } else {
                    if (navigator.getUserMedia && window.MediaRecorder) {
                        const stream = await navigator.mediaDevices.getUserMedia(
                            {
                                audio: constraints,
                            }
                        );
                        if (stream) {
                            setStream(stream);
                        } else {
                            setStream(null);
                        }
                    } else {
                        window.alert(
                            'Audio recording APIs not supported by this browser'
                        );
                    }
                }
            });
    };
    return (
        <Flex
            mt="2rem"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
        >
            <Box width="100%">
                {stream ? (
                    <VoiceRecorder
                        audioUpload={upload}
                        options={options}
                        stream={stream}
                    >
                        <RecordingControls src={src} />
                    </VoiceRecorder>
                ) : (
                    <Flex justifyContent="center">
                        <Mic onClick={setUpStream} />
                    </Flex>
                )}
            </Box>
        </Flex>
    );
};

export default AnswerRecording;
