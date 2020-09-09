import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { useApolloClient } from '@apollo/react-hooks';
import { logout } from '@/api/oAuth';

const UserContext = createContext({});

export const useCurrentUser = () => useContext(UserContext) || {};

// value is `currentUser`
export const UserProvider = ({ value, children }) => {
    const apolloClient = useApolloClient();
    const firstName = value.firstName || '';
    const lastName = value.lastName || '';
    const currentUser = {
        ...value,
        firstName,
        lastName,
        fullName: `${firstName} ${lastName}`,
        initials: firstName[0] + lastName[0],
        logout() {
            apolloClient.clearStore();
            logout();
        },
    };

    return (
        <UserContext.Provider value={currentUser}>
            {children}
        </UserContext.Provider>
    );
};

UserProvider.propTypes = {
    children: PropTypes.node,
    value: PropTypes.shape({
        id: PropTypes.string,
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        groups: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string,
                name: PropTypes.string,
            })
        ),
    }),
};
