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
import GeneralOrderDocumentsList from '../DocumentList/GeneralOrderDocumentsList';

describe('GeneralOrderDocumentsList.js', () => {
    let wrapper;

    beforeEach(() => {
        setMockedJWTtoken();
        apolloClient.writeData({ data: { editOrderDocument: true } });
        wrapper = mount(
            <ApolloProvider client={apolloClient}>
                <MockedProvider cache={cache}>
                    <UserProvider value={UserMock}>
                        <OrderProvider value={{ order: OrderMock }}>
                            <IntlProvider locale="en">
                                <Router>
                                    <GeneralOrderDocumentsList />
                                </Router>
                            </IntlProvider>
                        </OrderProvider>
                    </UserProvider>
                </MockedProvider>
            </ApolloProvider>
        );
    });

    it('should render properly', () => {
        expect(
            wrapper
                .find('PanelHeader')
                .text()
                .indexOf('General Order Documents')
        ).not.toBe(-1);
        expect(wrapper.find('DocumentListRow').length).toBe(1);
    });
});
