import React, { Fragment } from 'react';
import { Grid } from '@material-ui/core';
import Profile from './Profile/Profile';
import EventSetupForm from './EventSetupForm/EventSetupForm';

function EventSetup() {
    return (
        <Fragment>
            <Grid
                container
                style={{
                    background: '#E5E5E5',
                    margin: '1rem 0',
                }}
                justify="center"
            >
                <Grid
                    item
                    sm={8}
                    xs={10}
                    md={5}
                    style={{
                        background: '#FFF',
                        borderRadius: '10px',
                        padding: '1rem',
                    }}
                >
                    <Profile />
                    <EventSetupForm />
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default EventSetup;
