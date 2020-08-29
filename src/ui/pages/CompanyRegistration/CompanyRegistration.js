import React from 'react';
import { Grid } from '@material-ui/core';
import { Box } from '../../components/Base/Base';
import CompanyRegistrationForm from './CompanyRegistrationForm';

const CompanyRegistration = () => {
    return (
        <Box>
            <Grid
                container
                style={{
                    background: '#E5E5E5',
                    margin: '1rem 0',
                    padding: '1rem 0',
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
                    <Box>
                        <CompanyRegistrationForm />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CompanyRegistration;
