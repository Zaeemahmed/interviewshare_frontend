import React from 'react';
import RegistrationHeading from './components/RegistrationHeading';
import CompanyRegistrationForm from './CompanyRegistrationForm/CompanyRegistrationForm';
import Layout from '../../templates/Layout';

const CompanyRegistration = () => {
    return (
        <Layout>
            <RegistrationHeading />
            <CompanyRegistrationForm />
        </Layout>
    );
};

export default CompanyRegistration;
