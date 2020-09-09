import React from 'react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import wait from 'waait';
import { MockedProvider } from '@apollo/react-testing';
import { ApolloProvider } from '@apollo/react-hooks';
import { gqlOrderById } from '@/api/Queries/Orders';
import { apolloClient } from '@/api/react-apollo';
import { cache } from '@/api/cache';
import OrderMock from '@/api/Mocks/Order';
import UserMock from '@/api/Mocks/User';
import { setMockedJWTtoken } from '@/api/Mocks/Auth';
import {
    editOrderDocumentMockRequest,
    requiredDocumentChangesMockRequest,
    shipmentChangesMockRequest,
    orderSearchMockRequest,
} from '@/api/Mocks/Local';
import { UserProvider } from '@/api/Context/UserContext';
import Order from '../Order';

const match = {
    path: '/orders/:orderId',
    url: `/orders/${OrderMock.id}`,
    isExact: true,
    params: {
        orderId: OrderMock.id,
    },
};
const mocks = [
    {
        request: {
            query: gqlOrderById,
            variables: {
                orderId: OrderMock.id,
                showSupplier: true,
                showCustomer: true,
                showSupplyChainManager: true,
            },
        },
        result: {
            data: {
                orderById: OrderMock,
            },
        },
    },
    orderSearchMockRequest,
    editOrderDocumentMockRequest,
    requiredDocumentChangesMockRequest,
    shipmentChangesMockRequest,
];

describe('Order', () => {
    let wrapper;

    beforeEach(() => {
        setMockedJWTtoken();
        act(() => {
            wrapper = mount(
                <Router>
                    <ApolloProvider client={apolloClient}>
                        <IntlProvider locale="en">
                            <UserProvider value={UserMock}>
                                <MockedProvider
                                    mocks={mocks}
                                    addTypename={true}
                                    cache={cache}
                                    resolvers={{}}
                                >
                                    <Order match={match} />
                                </MockedProvider>
                            </UserProvider>
                        </IntlProvider>
                    </ApolloProvider>
                </Router>
            );
        });
    });

    it('should render properly', async () => {
        await wait(0); // wait for query response
        expect(wrapper.find('Order').length).toBe(1);
        wrapper.update(); // wait for UI update
        await wait(0); // wait for query response
        expect(wrapper.find('OrderTopbar').length).toBe(1);
    });
});
