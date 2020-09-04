import React from 'react';
import Profile from './Profile/Profile';
import EventSetupForm from './EventSetupForm/EventSetupForm';
import Layout from '../../templates/Layout';

function EventSetup() {
    return (
        <Layout>
            <Profile />
            <EventSetupForm />
        </Layout>
    );
}

export default EventSetup;
