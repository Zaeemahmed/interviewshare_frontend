import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Col } from 'antd';
import { Box } from '@/ui/atoms/Base';
import { DDMMYYYY } from '@/ui/_helpers/DateTime';

const plannedArrival = segment => {
    switch (segment.segmentType) {
        case 'SegmentTypes.ARRIVAL_AT_PORT_OF_LOADING':
        case 'SegmentTypes.PORT_OF_LOADING':
        case 'SegmentTypes.VESSEL_TRANSPORT':
            if (segment.plannedEndOfSegment) {
                return DDMMYYYY(segment.plannedEndOfSegment) || '-';
            } else if (segment.currentEndOfSegment) {
                return DDMMYYYY(segment.currentEndOfSegment) || '-';
            }
            return '-';
        case 'SegmentTypes.TRANSSHIPMENT_PORT':
        case 'SegmentTypes.PORT_OF_DISCHARGE':
            if (segment.plannedStartOfSegment) {
                return DDMMYYYY(segment.plannedStartOfSegment) || '-';
            } else if (segment.currentStartOfSegment) {
                return DDMMYYYY(segment.currentStartOfSegment) || '-';
            }
            return '-';
        default:
            return '-';
    }
};

const plannedArrivalLabel = segment => {
    if (segment.segmentType === 'SegmentTypes.ARRIVAL_AT_PORT_OF_LOADING')
        return 'Latest By';
    else {
        // ARRIVAL_AT_PORT_OF_LOADING, PORT_OF_LOADING, VESSEL_TRANSPORT, TRANSSHIPMENT_PORT, PORT_OF_DISCHARGE
        return 'Scheduled';
    }
};

const plannedDeparture = segment => {
    switch (segment.segmentType) {
        case 'SegmentTypes.ARRIVAL_AT_PORT_OF_LOADING':
        case 'SegmentTypes.VESSEL_TRANSPORT':
            if (segment.currentEndOfSegment) {
                return DDMMYYYY(segment.currentEndOfSegment) || '-';
            } else if (segment.plannedEndOfSegment) {
                return DDMMYYYY(segment.plannedEndOfSegment) || '-';
            }
            return '-';
        case 'SegmentTypes.PORT_OF_LOADING': //vessel departure
            if (segment.currentEndOfSegment) {
                return DDMMYYYY(segment.currentEndOfSegment) || '-';
            } else if (segment.plannedEndOfSegment) {
                return DDMMYYYY(segment.plannedEndOfSegment) || '-';
            } else if (segment.currentStartOfSegment) {
                return DDMMYYYY(segment.currentStartOfSegment) || '-';
            }
            return '-';
        case 'SegmentTypes.TRANSSHIPMENT_PORT':
        case 'SegmentTypes.PORT_OF_DISCHARGE':
            if (segment.currentStartOfSegment) {
                return DDMMYYYY(segment.currentStartOfSegment) || '-';
            } else if (segment.plannedStartOfSegment) {
                return DDMMYYYY(segment.plannedStartOfSegment) || '-';
            }
            return '-';
        default:
            return '-';
    }
};

const plannedDepartureLabel = segment => {
    switch (segment.segmentType) {
        case 'SegmentTypes.PORT_OF_LOADING': //vessel departure
            return 'Departed';
        case 'SegmentTypes.ARRIVAL_AT_PORT_OF_LOADING':
        case 'SegmentTypes.VESSEL_TRANSPORT':
        case 'SegmentTypes.TRANSSHIPMENT_PORT':
            return 'Arrived';
        case 'SegmentTypes.PORT_OF_DISCHARGE':
            return 'Pickup';
        default:
            return '-';
    }
};

function ContainerSegmentItem({ segment, positionleft, zindex }) {
    /*
    'name'   : 'Arrival in Shanghai (port of loading)',
    'plannedEndOfSegment'  : null,
    'plannedStartOfSegment': null,
    'currentEndOfSegment'  : '2019-08-18T00:00:00',
    'currentStartOfSegment': null,
    'status'               : 'ShipmentStatus.DONE',
    'segmentType'          : 'SegmentTypes.ARRIVAL_AT_PORT_OF_LOADING'
     */

    /*
    Statusses:
    UPCOMING = _("upcoming")
    CURRENT = _("current")
    UNKNOWN = _("unknown")
    DONE = _("done")
     */

    const [tempZindex, setTempZindex] = useState(zindex);

    if (!segment) return '';

    const hasReachedEnd = new Date(segment.plannedEndOfSegment) < new Date();

    return (
        <StyledCol
            positionleft={positionleft}
            zindex={tempZindex}
            onMouseDown={() => setTempZindex(100)}
            onMouseOut={() => setTempZindex(zindex)}
        >
            <Box py={2}>{segment.name}</Box>
            <Box py={2} fontWeight="bold">
                {plannedArrivalLabel(segment)}: {plannedArrival(segment)}
            </Box>
            <Box fontWeight="bold" color={hasReachedEnd && 'primary'}>
                {plannedDepartureLabel(segment)}: {plannedDeparture(segment)}
            </Box>
        </StyledCol>
    );
}

const StyledCol = styled(Col)`
    position: absolute;
    width: 200px;
    left: ${props => props.positionleft}px;
    z-index: ${props => props.zindex};
    height: 95px;
    border: 1px solid #ecebeb;
    border-radius: 10px;
    padding: 10px;
    margin-top: 10px;
    background-color: #ffffff;
    font-size: 12px;
`;

ContainerSegmentItem.propTypes = {
    segment: PropTypes.object,
    positionleft: PropTypes.number,
    zindex: PropTypes.number,
};

export default ContainerSegmentItem;
