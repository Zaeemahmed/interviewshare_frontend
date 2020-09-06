import { mount } from 'enzyme';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { MockedProvider } from '@apollo/react-testing';
import { cache } from '@/api/cache';
import { apolloClient } from '@/api/react-apollo';
import UserMock from '@/api/Mocks/User';
import OrderMock from '@/api/Mocks/Order';
import { setMockedJWTtoken } from '@/api/Mocks/Auth';
import { UserProvider } from '@/api/Context/UserContext';
import { OrderProvider } from '@/api/Context/OrderContext';
import DocumentListHeader from '../DocumentListHeader/DocumentListHeader';

describe('DocumentList', () => {
    let wrapper;

    const permissions = {
        showSupplier: false,
        showCustomer: true,
        isSupplier: false,
    };

    beforeEach(() => {
        setMockedJWTtoken();
        apolloClient.writeData({ data: { editOrderDocument: true } });
        wrapper = mount(
            <ApolloProvider client={apolloClient}>
                <MockedProvider cache={cache}>
                    <UserProvider value={UserMock}>
                        <OrderProvider
                            value={{ order: OrderMock, permissions }}
                        >
                            <IntlProvider locale="en">
                                <Router>
                                    <DocumentListHeader
                                        relatedItemId={OrderMock.id}
                                        relatedItemType="ORDER"
                                    />
                                </Router>
                            </IntlProvider>
                        </OrderProvider>
                    </UserProvider>
                </MockedProvider>
            </ApolloProvider>
        );
    });

    it('should render properly', () => {
        expect(wrapper.find('h4').text()).toMatch('CUSTOMER');
    });

    it('should open a modal after clicking on the button', () => {
        expect(wrapper.find('DocumentUpload').length).toBe(0);
        wrapper.find('Button').simulate('click');
        expect(wrapper.find('DocumentUpload').length).toBe(1);
    });
});
