import React from 'react';
import { mount } from 'enzyme';
import ShipmentProducts from '../ShipmentProducts';

const items = [
    {
        id: '135',
        order: {
            id: '141',
            __typename: 'OrderType',
        },
        unit: 'MT',
        quantity: 50,
        name: 'PP copo. Globalene 8001 25kg bg',
        documentTypes: [],
        __typename: 'OrderItemType',
    },
];

describe('<ShipmentProducts />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<ShipmentProducts items={items} />);
    });

    it('renders properly', () => {
        expect(wrapper.find('ShipmentProducts').length).toBe(1);
    });
});
