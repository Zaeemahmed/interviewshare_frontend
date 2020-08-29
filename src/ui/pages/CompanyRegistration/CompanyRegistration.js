import React from 'react';
import { Grid } from '@material-ui/core';
import { Box } from '../../components/Base/Base';
import RegistrationHeading from './components/RegistrationHeading';
import CompanyRegistrationForm from './CompanyRegistrationForm';

const CompanyRegistration = () => {
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
                <RegistrationHeading />
                <CompanyRegistrationForm />
            </Grid>
        </Grid>
    );
};

export default CompanyRegistration;
