import React from 'react';
import { mount } from 'enzyme';
import { ApolloProvider } from '@apollo/react-hooks';
import { apolloClient } from '@/api/react-apollo';
import UserMock from '@/api/Mocks/User';
import OrderMock from '@/api/Mocks/Order';
import { setMockedJWTtoken } from '@/api/Mocks/Auth';
import { UserProvider } from '@/api/Context/UserContext';
import { OrderProvider } from '@/api/Context/OrderContext';
import ActivityComment from '../ActivityComment';

describe('ActivityComment', () => {
    let wrapper;
    beforeEach(() => {
        setMockedJWTtoken();
        wrapper = mount(
            <ApolloProvider client={apolloClient}>
                <UserProvider value={UserMock}>
                    <OrderProvider value={{ order: OrderMock }}>
                        <ActivityComment activity={OrderMock.orderEvents[0]} />
                    </OrderProvider>
                </UserProvider>
            </ApolloProvider>
        );
    });

    it('ActivityComment renders', () => {
        expect(wrapper.find('ActivityComment').length).toBe(1);
    });

    it('ActivityComment renders message', () => {
        expect(
            wrapper.text().indexOf(OrderMock.orderEvents[0].message)
        ).not.toBe(-1);
    });

    it('should show the answers to the message', () => {
        expect(wrapper.find('MessageAnswer').length).toBe(
            OrderMock.orderEvents[0].answers.length
        );
    });
});
