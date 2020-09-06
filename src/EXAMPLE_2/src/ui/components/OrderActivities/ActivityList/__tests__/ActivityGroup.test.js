import React from 'react';
import { mount } from 'enzyme';
import { ApolloProvider } from '@apollo/react-hooks';
import { apolloClient } from '@/api/react-apollo';
import UserMock from '@/api/Mocks/User';
import OrderMock from '@/api/Mocks/Order';
import { setMockedJWTtoken } from '@/api/Mocks/Auth';
import { UserProvider } from '@/api/Context/UserContext';
import { OrderProvider } from '@/api/Context/OrderContext';
import ActivityGroup from '../ActivityGroup';

describe('ActivityGroup', () => {
    let wrapper;
    beforeEach(() => {
        setMockedJWTtoken();
        wrapper = mount(
            <ApolloProvider client={apolloClient}>
                <UserProvider value={UserMock}>
                    <OrderProvider value={{ order: OrderMock }}>
                        <ActivityGroup activities={OrderMock.orderEvents} />
                    </OrderProvider>
                </UserProvider>
            </ApolloProvider>
        );
    });

    it('ActivityGroup renders', () => {
        expect(wrapper.find('Element').length).toBe(1);
    });
});
