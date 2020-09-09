import React from 'react';
import { IntlProvider } from 'react-intl';
import { mount } from 'enzyme';
import ContainerSegments from '../ContainerSegments';

let container = {
    containerId: 'TRLU7560956',
    containerDetails: '40 ft High Cube Container',
    carrierName: 'ONE',
    segments: [
        {
            name: 'Arrival in Shanghai (port of loading)',
            plannedEndOfSegment: null,
            plannedStartOfSegment: null,
            currentEndOfSegment: '2019-08-18T00:00:00',
            currentStartOfSegment: null,
            status: 'ShipmentStatus.DONE',
            segmentType: 'SegmentTypes.ARRIVAL_AT_PORT_OF_LOADING',
        },
        {
            name: 'Shanghai (port of loading)',
            plannedEndOfSegment: null,
            plannedStartOfSegment: null,
            currentEndOfSegment: '2019-08-18T00:00:00',
            currentStartOfSegment: '2019-08-18T00:00:00',
            status: 'ShipmentStatus.DONE',
            segmentType: 'SegmentTypes.PORT_OF_LOADING',
        },
        {
            name: 'MAERSK LAVRAS (ship)',
            plannedEndOfSegment: '2019-09-29T00:00:00',
            plannedStartOfSegment: null,
            currentEndOfSegment: '2019-09-29T00:00:00',
            currentStartOfSegment: '2019-08-18T00:00:00',
            status: 'ShipmentStatus.DONE',
            segmentType: 'SegmentTypes.VESSEL_TRANSPORT',
        },
        {
            name: 'Buenos Aires (transshipment port)',
            plannedEndOfSegment: '2019-09-29T00:00:00',
            plannedStartOfSegment: '2019-09-29T00:00:00',
            currentEndOfSegment: '2019-09-29T00:00:00',
            currentStartOfSegment: '2019-09-29T00:00:00',
            status: 'ShipmentStatus.DONE',
            segmentType: 'SegmentTypes.TRANSSHIPMENT_PORT',
        },
        {
            name: 'NAUTIC TWIN (ship)',
            plannedEndOfSegment: null,
            plannedStartOfSegment: '2019-09-29T00:00:00',
            currentEndOfSegment: '2019-10-21T00:00:00',
            currentStartOfSegment: '2019-09-29T00:00:00',
            status: 'ShipmentStatus.DONE',
            segmentType: 'SegmentTypes.VESSEL_TRANSPORT',
        },
        {
            name: 'Asuncion (port of discharge)',
            plannedEndOfSegment: '2019-10-21T00:00:00',
            plannedStartOfSegment: null,
            currentEndOfSegment: '2019-10-21T00:00:00',
            currentStartOfSegment: '2019-10-25T00:00:00',
            status: 'ShipmentStatus.DONE',
            segmentType: 'SegmentTypes.PORT_OF_DISCHARGE',
        },
    ],
};

let currentStatus = 0;

describe('ShipmentStatus', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <IntlProvider locale="en">
                <ContainerSegments
                    container={container}
                    currentStatus={currentStatus}
                />
            </IntlProvider>
        );
    });

    it('should render properly', () => {
        expect(wrapper.text().indexOf(container.segments[0].name)).not.toBe(-1);
    });
});
