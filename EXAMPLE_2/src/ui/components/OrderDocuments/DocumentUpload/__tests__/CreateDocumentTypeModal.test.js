import React from 'react';
import { IntlProvider } from 'react-intl';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { MockedProvider } from '@apollo/react-testing';
import { apolloClient } from '@/api/react-apollo';
import { cache } from '@/api/cache';
import UserMock from '@/api/Mocks/User';
import OrderMock from '@/api/Mocks/Order';
import { setMockedJWTtoken } from '@/api/Mocks/Auth';
import { OrderProvider } from '@/api/Context/OrderContext';
import { UserProvider } from '@/api/Context/UserContext';
import CreateDocumentTypeModal from '../CreateDocumentTypeModal';

describe('CreateDocumentTypeModal.js', () => {
    let wrapper;

    const permissions = {
        showSupplier: false,
        showCustomer: true,
        isSupplier: false,
    };

    beforeEach(() => {
        setMockedJWTtoken();
        wrapper = mount(
            <ApolloProvider client={apolloClient}>
                <MockedProvider cache={cache}>
                    <UserProvider value={UserMock}>
                        <OrderProvider
                            value={{ order: OrderMock, permissions }}
                        >
                            <IntlProvider locale="en">
                                <Router>
                                    <CreateDocumentTypeModal
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
        expect(wrapper.find('input').props().placeholder).toBe(
            'Please enter a custom document type name'
        );
    });
});
