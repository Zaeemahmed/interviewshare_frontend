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
import { UserProvider } from '@/api/Context/UserContext';
import { OrderProvider } from '@/api/Context/OrderContext';
import ShipmentDocumentsList from '../DocumentList/ShipmentDocumentsList';

describe('ShipmentdocumentsList.js', () => {
    let wrapper;

    beforeEach(() => {
        setMockedJWTtoken();
        apolloClient.writeData({ data: { editOrderDocument: false } });
        wrapper = mount(
            <ApolloProvider client={apolloClient}>
                <MockedProvider cache={cache}>
                    <UserProvider value={UserMock}>
                        <OrderProvider value={{ order: OrderMock }}>
                            <IntlProvider locale="en">
                                <Router>
                                    <ShipmentDocumentsList />
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
                .at(0)
                .text()
        ).toMatch(
            'Shipment Documents | South East Trading Company Shipment | Customer AWB: documentAwbNumber1234 | Supplier AWB: documentAwbNumber1234Edit documents & AWB'
        );
        expect(wrapper.find('DocumentListRow').length).toBe(1);
    });
});
