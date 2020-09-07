import React from 'react';
import { Grid } from '@material-ui/core';
import UserImage from './components/UserImage';
import Username from './components/Username';
import UserOccupation from './components/UserOccupation';
import Duration from './components/Duration';
import Location from './components/Location';

const Profile = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={3} container justify="flex-end">
                <UserImage />
            </Grid>
            <Grid item xs={9}>
                <Username />
                <UserOccupation />
                <Grid item xs={12} container alignItems="center">
                    <Grid
                        item
                        xs={4}
                        style={{ textAlign: 'center', padding: '0.1rem' }}
                        justify="flex-end"
                        container 
                    >
                        <Duration />
                    </Grid>
                    <Grid item xs={8}>
                        <Location />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Profile;
