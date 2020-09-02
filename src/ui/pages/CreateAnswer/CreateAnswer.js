import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import Question from './components/Question';
import OurTips from './components/OurTips';

const CreateRecording = () => {
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
                <Question/>
                <OurTips/>
            </Grid>
        </Grid>
    );
};

export default CreateRecording;
