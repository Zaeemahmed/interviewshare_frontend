import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { mount } from 'enzyme';
import UserMock from '@/api/Mocks/User';
import { apolloClient } from '@/api/react-apollo';
import { UserProvider } from '@/api/Context/UserContext';
import LayoutHeader from '../../LayoutHeader';

describe('UserMenu login', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(
            <ApolloProvider client={apolloClient}>
                <IntlProvider locale="en">
                    <UserProvider value={UserMock}>
                        <Router>
                            <LayoutHeader />
                        </Router>
                    </UserProvider>
                </IntlProvider>
            </ApolloProvider>
        );
    });

    it('should render properly', () => {
        expect(wrapper.find('Logo').length).toBe(1);
        expect(wrapper.find('Navigation').length).toBe(1);
        expect(wrapper.find('UserMenu').length).toBe(1);
    });
});
