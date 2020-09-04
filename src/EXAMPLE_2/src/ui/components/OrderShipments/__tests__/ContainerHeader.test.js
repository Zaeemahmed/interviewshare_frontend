import React from 'react';
import { mount } from 'enzyme';
import ContainerHeader from '../ContainerHeader';

const containerMock = {
    containerId: 'TRLU7560956',
};

const shipmentMock = {
    blNumber: 'BL345678',
};

describe('ContainerHeader', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <ContainerHeader
                container={containerMock}
                shipment={shipmentMock}
            />
        );
    });

    it('should render properly', () => {
        expect(wrapper.text().indexOf(containerMock.containerId)).not.toBe(-1);
    });
});
