import React from 'react';
import { Grid } from '@material-ui/core';
import RegistrationHeading from './components/RegistrationHeading';
import CompanyRegistrationForm from './CompanyRegistrationForm/CompanyRegistrationForm';
import Layout from '../../templates/Layout';

const CompanyRegistration = () => {
    return (
        <Layout>
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
        </Layout>
    );
};

export default CompanyRegistration;
