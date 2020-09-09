import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import { gqlAllSupportedCarriers } from '@/api/Queries/Shipments';
import { cache } from '@/api/cache';
import OrderMock from '@/api/Mocks/Order';
import ShipmentCarriersMock from '@/api/Mocks/ShipmentCarriers';
import { setMockedJWTtoken } from '@/api/Mocks/Auth';
import { OrderProvider } from '@/api/Context/OrderContext';
import OrderShipments from '../OrderShipments';

const mocks = [
    {
        request: {
            query: gqlAllSupportedCarriers,
        },
        result: {
            data: {
                ShipmentCarriersMock,
            },
        },
    },
];

describe('OrderShipment', () => {
    let wrapper;

    beforeEach(() => {
        setMockedJWTtoken();
        wrapper = mount(
            <Router>
                <IntlProvider locale="en">
                    <MockedProvider
                        mocks={mocks}
                        addTypename={true}
                        cache={cache}
                    >
                        <OrderProvider value={{ order: OrderMock }}>
                            <OrderShipments />
                        </OrderProvider>
                    </MockedProvider>
                </IntlProvider>
            </Router>
        );
    });

    it('should render properly', () => {
        expect(wrapper.find('h4').length).toBe(1);
    });
});
