import React from 'react';
import { mount } from 'enzyme';
import { MockedProvider } from '@apollo/react-testing';
import { IntlProvider } from 'react-intl';
import { gqlOrderSearch } from '@/api/Queries/local';
import OrdersListSearch from '../OrdersListSearch/OrdersListSearch';

describe('OrdersListSearch', () => {
    let wrapper;
    const mocks = [
        {
            request: {
                query: gqlOrderSearch,
            },
            result: {
                data: {
                    orderSearch: '',
                },
            },
        },
    ];
    beforeEach(() => {
        wrapper = mount(
            <IntlProvider locale="en">
                <MockedProvider mocks={mocks}>
                    <OrdersListSearch />
                </MockedProvider>
            </IntlProvider>
        );
    });

    it('should render properly', () => {
        expect(wrapper.find('OrdersListSearch').length).toBe(1);
    });
});
