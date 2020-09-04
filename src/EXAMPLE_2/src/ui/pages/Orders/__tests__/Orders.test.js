import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MockedProvider } from '@apollo/react-testing';
import { ApolloProvider } from '@apollo/react-hooks';
import { IntlProvider } from 'react-intl';
import { mount } from 'enzyme';
import { apolloClient } from '@/api/react-apollo';
import { gqlAllOrders } from '@/api/Queries/Orders';
import { gqlMe } from '@/api/Queries/Users';
import { orderSearchMockRequest } from '@/api/Mocks/Local';
import UserMock from '@/api/Mocks/User';
import { cache } from '@/api/cache';
import { setMockedJWTtoken } from '@/api/Mocks/Auth';
import Orders from '../Orders';

const customerOrderReference = '30009124';

const mocks = [
    orderSearchMockRequest,
    {
        request: {
            query: gqlAllOrders,
            variables: {
                showSupplier: true,
            },
        },
        result: {
            data: {
                allOrders: [
                    {
                        id: '6',
                        customerOrderReference: customerOrderReference,
                        supplier: {
                            id: '1',
                            name: 'China GmbH',
                            __typename: 'CompanyType',
                        },
                        customer: {
                            id: '2',
                            name: 'Columbia Customer',
                            __typename: 'CompanyType',
                        },
                        items: [
                            {
                                id: '1',
                                unit: 'KG',
                                quantity: 100.0,
                                name: 'Bag o" Grain',
                                orderItemReference: '9002345',
                                __typename: 'OrderItemType',
                            },
                        ],
                        __typename: 'OrderType',
                    },
                ],
            },
        },
    },
    {
        request: {
            query: gqlMe,
        },
        result: {
            data: {
                me: UserMock,
            },
        },
    },
];

describe('Orders', () => {
    let wrapper;

    beforeEach(() => {
        setMockedJWTtoken();
        wrapper = mount(
            <ApolloProvider client={apolloClient}>
                <MockedProvider mocks={mocks} addTypename cache={cache}>
                    <IntlProvider locale="en">
                        <Router>
                            <Orders myRole="supply_chain_manager" />
                        </Router>
                    </IntlProvider>
                </MockedProvider>
            </ApolloProvider>
        );
    });

    it('should render properly', () => {
        expect(wrapper.find('OrdersList').length).toBe(1);
    });
});
