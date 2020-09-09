import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { mount } from 'enzyme';
import { apolloClient } from '@/api/react-apollo';
import { setMockedJWTtoken } from '@/api/Mocks/Auth';
import OrdersList from '../OrdersList';

describe('<OrdersList />', () => {
    let wrapper;

    beforeEach(() => {
        setMockedJWTtoken();
        wrapper = mount(
            <ApolloProvider client={apolloClient}>
                <IntlProvider locale="en">
                    <Router>
                        <OrdersList />
                    </Router>
                </IntlProvider>
            </ApolloProvider>
        );
    });

    it('should render properly', () => {
        expect(wrapper.find('OrdersList').length).toBe(1);
    });
});
