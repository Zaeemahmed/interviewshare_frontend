import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { mount } from 'enzyme';
import { apolloClient } from '@/api/react-apollo';
import OrderMock from '@/api/Mocks/Order';
import UserMock from '@/api/Mocks/User';
import { setMockedJWTtoken } from '@/api/Mocks/Auth';
import { UserProvider } from '@/api/Context/UserContext';
import { OrderProvider } from '@/api/Context/OrderContext';
import OrderHeader from '../OrderHeader';

const permissions = {
    showSupplier: true,
};

test('OrderHeader renders', () => {
    setMockedJWTtoken();
    const wrapper = mount(
        <ApolloProvider client={apolloClient}>
            <UserProvider value={UserMock}>
                <OrderProvider value={{ order: OrderMock, permissions }}>
                    <IntlProvider locale="en">
                        <Router>
                            <OrderHeader />
                        </Router>
                    </IntlProvider>
                </OrderProvider>
            </UserProvider>
        </ApolloProvider>
    );
    expect(wrapper.text()).toMatch('Order Reference: 30009124');
});
