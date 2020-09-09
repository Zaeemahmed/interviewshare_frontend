import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { mount } from 'enzyme';
import { IntlProvider } from 'react-intl';
import OrderMock from '@/api/Mocks/Order';
import { apolloClient } from '@/api/react-apollo';
import UserMock from '@/api/Mocks/User';
import { setMockedJWTtoken } from '@/api/Mocks/Auth';
import { UserProvider } from '@/api/Context/UserContext';
import { OrderProvider } from '@/api/Context/OrderContext';
import OrderActivities from '../OrderActivities';

describe('OrderActivities', () => {
    let wrapper;

    beforeEach(() => {
        setMockedJWTtoken();
        wrapper = mount(
            <ApolloProvider client={apolloClient}>
                <IntlProvider locale="en">
                    <UserProvider value={UserMock}>
                        <OrderProvider value={{ order: OrderMock }}>
                            <OrderActivities />
                        </OrderProvider>
                    </UserProvider>
                </IntlProvider>
            </ApolloProvider>
        );
    });

    it('should render properly', () => {
        expect(wrapper.find('.OrderActivities').length).toBe(1);
    });
});
