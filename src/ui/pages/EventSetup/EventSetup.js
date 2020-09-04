import React, { Fragment } from 'react';
import { Grid } from '@material-ui/core';
import Profile from './Profile/Profile';
import EventSetupForm from './EventSetupForm/EventSetupForm';
import Layout from '../../templates/Layout';

function EventSetup() {
    return (
        <Layout mobileFooter={<h1>Footer</h1>}>
            <Grid
                container
                style={{
                    margin: '1rem 0',
                }}
                justify="center"
            >
                <Grid
                    item
                    sm={7}
                    xs={10}
                    md={5}
                    lg={3}
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
        </Layout>
    );
}

export default EventSetup;
