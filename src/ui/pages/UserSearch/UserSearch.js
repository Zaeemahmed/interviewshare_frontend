import React from 'react';
import { Grid } from '@material-ui/core';
import UserSearchForm from './UserSearchForm/UserSearchForm';
import UserSearchTop from './components/UserSearchTop';

const UserSearch = () => {
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
                <UserSearchTop/>
                <UserSearchForm />
            </Grid>
        </Grid>
    );
};

export default UserSearch;
