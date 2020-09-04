import React from 'react';
import { mount } from 'enzyme';
import { IntlProvider } from 'react-intl';
import { ApolloProvider } from '@apollo/react-hooks';
import { MockedProvider } from '@apollo/react-testing';
import { apolloClient } from '@/api/react-apollo';
import { cache } from '@/api/cache';
import UserMock from '@/api/Mocks/User';
import OrderMock from '@/api/Mocks/Order';
import { setMockedJWTtoken } from '@/api/Mocks/Auth';
import { UserProvider } from '@/api/Context/UserContext';
import { OrderProvider } from '@/api/Context/OrderContext';
import ShipmentAdd from '@/ui/components/OrderSetup/ShipmentItemsList/ShipmentAdd';

describe('OrderSetup ShipmentAdd', () => {
    let wrapper;

    beforeEach(() => {
        setMockedJWTtoken();
        wrapper = mount(
            <ApolloProvider client={apolloClient}>
                <MockedProvider cache={cache}>
                    <UserProvider value={UserMock}>
                        <OrderProvider value={{ order: OrderMock }}>
                            <IntlProvider locale="en">
                                <ShipmentAdd />
                            </IntlProvider>
                        </OrderProvider>
                    </UserProvider>
                </MockedProvider>
            </ApolloProvider>
        );
    });

    it('should have a Button with text "Add another shipment"', () => {
        expect(
            wrapper.find({ defaultMessage: 'Add another shipment' }).length
        ).toBe(1);
    });

    it('should render the InputRow after a click on a button', () => {
        expect(wrapper.find('ShipmentAdd__StyledInput').length).toBe(0);
        wrapper
            .find({ defaultMessage: 'Add another shipment' })
            .simulate('click');
        expect(wrapper.find('ShipmentAdd__StyledInput').length).toBe(1);
    });

    it('should hide the buttons after click on submitbutton', () => {
        expect(wrapper.find('ShipmentAdd__StyledInput').length).toBe(0);
        wrapper
            .find({ defaultMessage: 'Add another shipment' })
            .simulate('click');
        expect(wrapper.find('ShipmentAdd__StyledInput').length).toBe(1);
        wrapper.find({ defaultMessage: 'Add' }).simulate('click');
        expect(wrapper.find('ShipmentAdd__StyledInput').length).toBe(0);
    });
});
