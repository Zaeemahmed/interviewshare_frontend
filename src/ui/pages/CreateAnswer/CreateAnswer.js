import React, { useState } from 'react';
import Question from './components/Question/Question';
import OurTips from './components/OurTips';
import YourThoughts from './components/YourThoughts';
import AnswerRecording from './components/AnswerRecording/AnswerRecording';
import Layout from '../../templates/Layout';

const CreateAnswer = () => {
    const [src, setSrc] = useState(
        'http://alexkatz.me/codepen/music/interlude.mp3'
    );

    const tempUpload = blob => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onload = () => {
            setSrc(reader.result);
        };
    };
    return (
        <Layout>
            <Question />
            <OurTips />
            <YourThoughts />
            <AnswerRecording upload={tempUpload} src={src} />
        </Layout>
    );
};

export default CreateAnswer;
