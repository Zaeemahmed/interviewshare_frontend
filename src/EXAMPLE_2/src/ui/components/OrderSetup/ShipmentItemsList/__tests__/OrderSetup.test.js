import React from 'react';
import { mount } from 'enzyme';
import { IntlProvider } from 'react-intl';
import { MockedProvider } from '@apollo/react-testing';
import { cache } from '@/api/cache';
import UserMock from '@/api/Mocks/User';
import OrderMock from '@/api/Mocks/Order';
import { setMockedJWTtoken } from '@/api/Mocks/Auth';
import { UserProvider } from '@/api/Context/UserContext';
import { OrderProvider } from '@/api/Context/OrderContext';
import OrderSetup from '@/ui/components/OrderSetup/OrderSetup';

describe('OrderSetup', () => {
    let wrapper;

    let permissions = {
        showSupplier: true,
        showCustomer: true,
        isSupplier: true,
    };

    beforeEach(() => {
        setMockedJWTtoken();
        wrapper = mount(
            <MockedProvider cache={cache}>
                <IntlProvider locale="en">
                    <UserProvider value={UserMock}>
                        <OrderProvider
                            value={{ order: OrderMock, permissions }}
                        >
                            <OrderSetup />
                        </OrderProvider>
                    </UserProvider>
                </IntlProvider>
            </MockedProvider>
        );
    });

    it('should have a list of shipments rendered', () => {
        expect(wrapper.find('Shipment').length).toBe(
            OrderMock.shipments.length
        );
    });
});
