import React from 'react';
import { mount } from 'enzyme';
import { ApolloProvider } from '@apollo/react-hooks';
import { apolloClient } from '@/api/react-apollo';
import UserMock from '@/api/Mocks/User';
import OrderMock from '@/api/Mocks/Order';
import { UserProvider } from '@/api/Context/UserContext';
import { OrderProvider } from '@/api/Context/OrderContext';
import { setMockedJWTtoken } from '@/api/Mocks/Auth';
import MessageAnswer from '../MessageAnswer';

describe('MessageCreate', () => {
    let wrapper;
    let answer = {
        user: {
            id: 1,
            firstName: 'User',
            lastName: 'Test',
        },
        createdAt: '2019-01-23',
        message: 'Test Message',
    };
    beforeEach(() => {
        setMockedJWTtoken();
        wrapper = mount(
            <ApolloProvider client={apolloClient}>
                <UserProvider value={UserMock}>
                    <OrderProvider value={{ order: OrderMock }}>
                        <MessageAnswer
                            answer={answer}
                            showReplyCreate={false}
                            setShowReplyCreate={() => console.log('test')}
                        />
                    </OrderProvider>
                </UserProvider>
            </ApolloProvider>
        );
    });

    it('should render properly', () => {
        expect(wrapper.text()).toContain('Test Message');
    });
});
