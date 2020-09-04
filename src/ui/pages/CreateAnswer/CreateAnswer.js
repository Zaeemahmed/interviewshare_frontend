import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import Question from './components/Question/Question';
import OurTips from './components/OurTips';
import YourThoughts from './components/YourThoughts';
import AnswerRecording from './components/AnswerRecording/AnswerRecording';

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
        <Grid
            container
            style={{
                margin: '1rem 0',
            }}
            justify="center"
        >
            <Grid
                item
                xs={10}
                sm={7}
                md={5}
                lg={3}
                style={{
                    background: '#FFF',
                    borderRadius: '10px',
                    padding: '1rem',
                }}
            >
                <Question />
                <OurTips />
                <YourThoughts />
                <AnswerRecording upload={tempUpload} src={src} />
            </Grid>
        </Grid>
    );
};

export default CreateAnswer;
