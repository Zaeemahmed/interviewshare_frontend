import React from 'react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import { ApolloProvider } from '@apollo/react-hooks';
import UserMock from '@/api/Mocks/User';
import OrderMock from '@/api/Mocks/Order';
import { setMockedJWTtoken } from '@/api/Mocks/Auth';
import { UserProvider } from '@/api/Context/UserContext';
import { OrderProvider } from '@/api/Context/OrderContext';
import { apolloClient } from '@/api/react-apollo';
import DocumentList from '../DocumentList/DocumentList';

describe('DocumentList', () => {
    let wrapper;
    beforeEach(() => {
        setMockedJWTtoken();
        wrapper = mount(
            <ApolloProvider client={apolloClient}>
                <IntlProvider locale="en">
                    <UserProvider value={UserMock}>
                        <OrderProvider value={{ order: OrderMock }}>
                            <Router>
                                <DocumentList />
                            </Router>
                        </OrderProvider>
                    </UserProvider>
                </IntlProvider>
            </ApolloProvider>
        );
    });

    it('should render properly', () => {
        expect(wrapper.find('GeneralOrderDocumentsList').length).toBe(1);
        expect(wrapper.find('ShipmentDocumentsList').length).toBe(1);
    });
});
