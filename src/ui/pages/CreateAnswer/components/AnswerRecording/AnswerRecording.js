import React  from 'react';
import { Flex, Box } from '../../../../components/Base/Base';
import { VoiceRecorder } from 'voicerecorder';
import RecordingControls from './RecordingControls';

const AnswerRecording = ({ upload, src }) => {
    const constraints = {
        echoCancellation: true,
        noiseSuppression: true,
        sampleRate: 44100,
    };
    const options = {
        audioBitsPerSecond: 128000,
    };

    navigator.permissions.query({name: 'microphone'}).then(permissionStatus => {
        console.log(permissionStatus.state);
    })
    return (
        <Flex
            mt="2rem"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
        >
            <Box width="100%">
                <VoiceRecorder
                    audioUpload={upload}
                    constraints={constraints}
                    options={options}
                >
                    <RecordingControls src={src} />
                </VoiceRecorder>
            </Box>
        </Flex>
    );
};

export default AnswerRecording;
