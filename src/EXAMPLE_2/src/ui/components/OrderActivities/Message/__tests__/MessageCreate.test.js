import React from 'react';
import wait from 'waait';
import { mount } from 'enzyme';
import { IntlProvider } from 'react-intl';
import { ApolloProvider } from '@apollo/react-hooks';
import { apolloClient } from '@/api/react-apollo';
import UserMock from '@/api/Mocks/User';
import OrderMock from '@/api/Mocks/Order';
import { setMockedJWTtoken } from '@/api/Mocks/Auth';
import { UserProvider } from '@/api/Context/UserContext';
import { OrderProvider } from '@/api/Context/OrderContext';
import MessageCreate from '../MessageCreate';

describe('MessageCreate', () => {
    let wrapper;

    const permissions = {
        showSupplier: true,
        showCustomer: true,
        isSupplier: true,
    };
    beforeEach(() => {
        apolloClient.writeData({
            data: {
                showCreateMessageReaders: true,
                showMessageOverlay: true,
            },
        });

        setMockedJWTtoken();
        wrapper = mount(
            <ApolloProvider client={apolloClient}>
                <UserProvider value={UserMock}>
                    <OrderProvider value={{ order: OrderMock, permissions }}>
                        <IntlProvider locale="en">
                            <MessageCreate replyToMessageId={false} />
                        </IntlProvider>
                    </OrderProvider>
                </UserProvider>
            </ApolloProvider>
        );
    });

    it('should render properly', () => {
        expect(wrapper.find('MessageCreate').length).toBe(1);
    });

    it('should render one textarea', () => {
        expect(wrapper.find('TextArea').length).toBe(1);
    });

    it('should show a errorMessage `Please enter your message` if we didnt enter a message', () => {
        wrapper
            .find('input')
            .at(0)
            .simulate('change', { target: { checked: true } });
        wrapper.find({ defaultMessage: 'Send Message' }).simulate('click');

        expect(wrapper.text()).toContain('Please enter your message');
    });

    it('should show a errorMessage `Please add receivers` if we didnt check any reader', async () => {
        const inputField = wrapper.find('textarea');
        inputField.simulate('change', { target: { value: 'lorem' } });
        await wait(0);

        wrapper.find({ defaultMessage: 'Send Message' }).simulate('click');
        wrapper.update(); // wait for UI update

        expect(wrapper.text()).toContain(
            'You need to choose at least one party that should be able to read this message.'
        );
    });
});
