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
import DocumentListItem from '../DocumentItem/DocumentListItem';

describe('DocumentList', () => {
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
                                    <DocumentListItem
                                        documentType={
                                            OrderMock.documentTypes[0]
                                        }
                                        document={
                                            OrderMock.documentTypes[0]
                                                .documents[0]
                                        }
                                        editOrderDocument={true}
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
        expect(
            wrapper.text().indexOf(OrderMock.documentTypes[0].name)
        ).not.toBe(-1);
    });

    it('should open a modal after clicking on the row', () => {
        expect(wrapper.find('DocumentPreview').length).toBe(0);
        wrapper.find('Row').simulate('click');
        expect(wrapper.find('DocumentPreview').length).toBe(1);
    });
});
