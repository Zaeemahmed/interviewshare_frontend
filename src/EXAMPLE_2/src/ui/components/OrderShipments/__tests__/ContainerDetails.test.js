import React from 'react';
import { mount } from 'enzyme';
import ContainerDetails from '../ContainerDetails';

const containerMock = {
    updates: [
        {
            id: '156',
            status:
                'Location Update at 2019-11-01 10:28:53+00:00: Latitude: -28.3742 Longitude: -59.0905',
            createdAt: '2019-11-04T22:10:00.271750+00:00',
            __typename: 'ShipmentUpdateType',
        },
    ],
};
describe('ContainerDetails', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<ContainerDetails container={containerMock} />);
    });

    it('should render properly', () => {
        expect(
            wrapper.text().indexOf(containerMock.updates[0].status)
        ).not.toBe(-1);
    });
});
