import React from 'react';
import Profile from './Profile/Profile';
import EventSetupForm from './EventSetupForm/EventSetupForm';
import Layout from '../../templates/Layout';
import { useQuery } from '@apollo/client';
import { events } from '../../../apollo/Queries/Events';

const EventSetup = () => {
    const { loading, data } = useQuery(events);
    return (
        <Layout>
            <Profile />
            <EventSetupForm />
        </Layout>
    );
};

export default EventSetup;
