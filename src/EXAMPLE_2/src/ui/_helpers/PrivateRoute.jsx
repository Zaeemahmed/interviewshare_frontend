import React from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter, Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { AUTH_TOKEN } from '@/api/oAuth';
import { gqlMe } from '@/api/Queries/Users';
import { UserProvider } from '@/api/Context/UserContext';

/**
 * Prevents the User from accessing routes without being logged in
 */
function PrivateRoute(props) {
    let { data, loading, error } = useQuery(gqlMe);
    const currentUser = data?.me || {};
    const hasToken = localStorage.getItem(AUTH_TOKEN) !== null;
    const isEmptyUser = !loading && !error && !currentUser.id;

    if (!hasToken || isEmptyUser) {
        return <Redirect to="/" />;
    }

    return (
        <UserProvider value={{ ...currentUser, isLoading: loading }}>
            <Route {...props} />
        </UserProvider>
    );
}

PrivateRoute.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
    history: PropTypes.object.isRequired,
};

export default withRouter(PrivateRoute);
