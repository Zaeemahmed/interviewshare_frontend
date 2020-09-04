import React from 'react';
import { mount } from 'enzyme';
import { IntlProvider } from 'react-intl';
import OrdersListFilter from '../OrdersListFilter/OrdersListFilter';

describe('OrdersListFilter', () => {
    let wrapper;
    const onChange = jest.fn();
    const selected = 'allTrades';
    const showAllTrades = true;
    const showMyPurchases = true;

    beforeEach(() => {
        wrapper = mount(
            <IntlProvider locale="en">
                <OrdersListFilter
                    onChange={onChange}
                    selected={selected}
                    showAllTrades={showAllTrades}
                    showMyPurchases={showMyPurchases}
                />
            </IntlProvider>
        );
    });

    it('should render properly', () => {
        expect(wrapper.find('OrdersListFilter').length).toBe(1);
    });

    it('should render radio', () => {
        expect(wrapper.find('RadioGroup').length).toBe(1);
    });
});
