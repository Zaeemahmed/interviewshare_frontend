import React from 'react';
import UserSearchForm from './UserSearchForm/UserSearchForm';
import UserSearchTop from './components/UserSearchTop';
import Layout from '../../templates/Layout';

const UserSearch = () => {
    return (
        <Layout>
            <UserSearchTop />
            <UserSearchForm />
        </Layout>
    );
};

export default UserSearch;
