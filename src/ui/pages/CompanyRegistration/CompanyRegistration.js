import React from 'react';
import RegistrationHeading from './components/RegistrationHeading';
import CompanyRegistrationForm from './CompanyRegistrationForm/CompanyRegistrationForm';
import Layout from '../../templates/Layout';
import { useQuery } from '@apollo/client';
import { companies } from '../../../apollo/Queries/Companies';

const CompanyRegistration = () => {
    const { loading, data } = useQuery(companies);
    return (
        <Layout>
            <RegistrationHeading />
            <CompanyRegistrationForm />
        </Layout>
    );
};

export default CompanyRegistration;
