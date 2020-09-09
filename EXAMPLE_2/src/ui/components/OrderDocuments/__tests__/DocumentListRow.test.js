import { mount } from 'enzyme';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { MockedProvider } from '@apollo/react-testing';
import { apolloClient } from '@/api/react-apollo';
import { cache } from '@/api/cache';
import UserMock from '@/api/Mocks/User';
import OrderMock from '@/api/Mocks/Order';
import { setMockedJWTtoken } from '@/api/Mocks/Auth';
import { OrderProvider } from '@/api/Context/OrderContext';
import { UserProvider } from '@/api/Context/UserContext';
import DocumentListRow from '../DocumentItem/DocumentListRow';

describe('DocumentListRow.js', () => {
    let wrapper;

    const permissions = {
        showSupplier: true,
        showCustomer: true,
        orderPermission: false,
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
                                    <DocumentListRow
                                        documentType={
                                            OrderMock.documentTypes[0]
                                        }
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
        expect(wrapper.find({ span: 12 }).length).toBe(2); // Col with span 12
    });
});
