import React from 'react';
import { mount } from 'enzyme';
import { IntlProvider } from 'react-intl';
import { MockedProvider } from '@apollo/react-testing';
import { cache } from '@/api/cache';
import Shipment from '@/ui/components/OrderSetup/ShipmentItemsList/Shipment';
import shipmentMock from '@/api/Mocks/Shipment';

describe('OrderSetup Shipment', () => {
    let wrapper;
    let saveShipmentItems = jest.fn();

    beforeEach(() => {
        wrapper = mount(
            <MockedProvider cache={cache}>
                <IntlProvider locale="en">
                    <Shipment
                        shipment={shipmentMock}
                        index={0}
                        saveShipmentItems={saveShipmentItems}
                    />
                </IntlProvider>
            </MockedProvider>
        );
    });

    it('should have a shipmentName inside of h3', () => {
        expect(wrapper.find('h3').text()).toBe(shipmentMock.shipmentName);
    });

    it('should render the button `Edit`', () => {
        expect(wrapper.find({ defaultMessage: 'Edit' }).length).toBe(1);
    });

    it('should render `ShipmentItemPlaceholder` if the items length is 0', function() {
        if (shipmentMock.items.length > 0) {
            expect(wrapper.find('ShipmentItemPlaceholder').length).toBe(0);
        } else {
            expect(wrapper.find('ShipmentItemPlaceholder').length).toBe(1);
        }
    });
});
