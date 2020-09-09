import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { mount } from 'enzyme';
import UserMock from '@/api/Mocks/User';
import { apolloClient } from '@/api/react-apollo';
import { UserProvider } from '@/api/Context/UserContext';
import UserMenu from '../UserMenu';

describe('UserMenu logout', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(
            <ApolloProvider client={apolloClient}>
                <IntlProvider locale="en">
                    <UserProvider value={UserMock}>
                        <Router>
                            <UserMenu />
                        </Router>
                    </UserProvider>
                </IntlProvider>
            </ApolloProvider>
        );
    });

    it('should render properly', () => {
        expect(wrapper.find('div.ant-dropdown-trigger').length).toBe(1);
        expect(wrapper.find('IconUserInitials').length).toBe(1);
    });

    it('should show the logout dropdown after click', () => {
        expect(wrapper.find('Menu').length).toBe(0);
        wrapper.find('div.ant-dropdown-trigger').simulate('click');
        expect(wrapper.find('Menu').length).toBe(2);
        expect(wrapper.find('InternalMenu').text()).toMatch('Logout');
    });
});

describe('UserMenu login', () => {
    let wrapper;
    beforeEach(() => {
        window.open = jest.fn();

        wrapper = mount(
            <ApolloProvider client={apolloClient}>
                <IntlProvider locale="en">
                    <UserProvider value={{}}>
                        <Router>
                            <UserMenu />
                        </Router>
                    </UserProvider>
                </IntlProvider>
            </ApolloProvider>
        );
    });

    it('should render properly', () => {
        expect(wrapper.find('button').text()).toMatch('Login');
    });

    it('should open a new page after click on button', () => {
        wrapper.find('button').simulate('click');
        expect(window.open).toHaveBeenCalled();
    });
});
