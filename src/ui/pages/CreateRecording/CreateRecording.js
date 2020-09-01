import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { VoiceRecorder } from 'voicerecorder';
import { uploadRecording, cacheUploadedRecording } from '../../../apollo/queries/UploadRecording';

const CreateRecording = () => {
    const [recording, setRecording] = useState(false);
    const [mutate] = useMutation(uploadRecording);

    const [audio, setAudio] = useState(
        'http://alexkatz.me/codepen/music/interlude.mp3'
    );
    const constraints = {
        echoCancellation: true,
        noiseSuppression: true,
        sampleRate: 44100,
    };
    const options = {
        audioBitsPerSecond: 128000,
    };
    return (
        <>
            <VoiceRecorder
                options={options}
                constraints={constraints}
                audioUpload={blob => {
                    mutate({ variables: { file: blob } });
                    setAudio(URL.createObjectURL(blob));
                }}
                status={recording}
            />
            {recording ? (
                <button onClick={() => setRecording(false)}>STOP</button>
            ) : (
                <button onClick={() => setRecording(true)}>START</button>
            )}
            <audio src={audio} controls="controls" />
        </>
    );
};

export default CreateRecording;
