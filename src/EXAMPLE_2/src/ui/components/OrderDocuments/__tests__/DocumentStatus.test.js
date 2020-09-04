import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { mount } from 'enzyme';
import { OrderProvider } from '@/api/Context/OrderContext';
import OrderMock from '@/api/Mocks/Order';
import { setMockedJWTtoken } from '@/api/Mocks/Auth';
import DocumentStatus from '../DocumentItem/DocumentStatus';

describe('DocumentStatus', () => {
    let wrapper;

    beforeEach(() => {
        setMockedJWTtoken();
        wrapper = mount(
            <IntlProvider locale="en">
                <OrderProvider value={{ order: OrderMock }}>
                    <Router>
                        <DocumentStatus status="ACCEPTED" />
                    </Router>
                </OrderProvider>
            </IntlProvider>
        );
    });

    it('should set status to `Approved`', () => {
        expect(wrapper.text().indexOf('Approved')).not.toBe(-1);
    });
});
