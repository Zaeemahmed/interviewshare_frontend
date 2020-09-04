import React from 'react';
import { mount } from 'enzyme';
import { ApolloProvider } from '@apollo/react-hooks';
import { apolloClient } from '@/api/react-apollo';
import UserMock from '@/api/Mocks/User';
import OrderMock from '@/api/Mocks/Order';
import { UserProvider } from '@/api/Context/UserContext';
import { OrderProvider } from '@/api/Context/OrderContext';
import { setMockedJWTtoken } from '@/api/Mocks/Auth';
import MessageText from '../MessageText';

describe('MessageCreate', () => {
    let wrapper;

    beforeEach(() => {
        setMockedJWTtoken();
        wrapper = mount(
            <ApolloProvider client={apolloClient}>
                <UserProvider value={UserMock}>
                    <OrderProvider value={{ order: OrderMock }}>
                        <MessageText
                            name="Test User"
                            date="30/12/2019"
                            message="This is a test message"
                        />
                    </OrderProvider>
                </UserProvider>
            </ApolloProvider>
        );
    });

    it('should render properly', () => {
        expect(wrapper.text()).toContain('Test User');
        expect(wrapper.text()).toMatch('30/12/2019');
        expect(wrapper.text()).toMatch('This is a test message');
    });

    // it('should show reply button on hover', function() {
    //     wrapper.simulate('mouseEnter');
    //     expect(wrapper.find({ defaultMessage: 'Reply' }).length).toBe(1);
    // });
    //
    // it('should show the form after the click on button `Reply`', function() {
    //     expect(wrapper.find('MessageCreate').length).toBe(0);
    //     wrapper.simulate('mouseEnter');
    //     wrapper
    //         .find('Button')
    //         .at(0)
    //         .simulate('click');
    //     expect(wrapper.find('MessageCreate').length).toBe(1);
    // });
});
