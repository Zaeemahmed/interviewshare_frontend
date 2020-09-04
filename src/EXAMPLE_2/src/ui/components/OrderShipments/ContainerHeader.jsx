import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'antd';
import {
    containerStatusText,
    containerVesselText,
} from './ContainerStatusText';

function ContainerHeader({ shipment, container }) {
    let title = '-';
    let currentVessel = '';
    if (shipment && shipment.blNumber && container) {
        title = container.containerId;
        currentVessel = container.carrierName;
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                height: '31px',
                color: 'rgba(0, 0, 0, 0.65)',
                lineHeight: '31px',
                borderRadius: '8px',
            }}
        >
            <Col span={4} style={{ fontWeight: 'bold' }}>
                {title}
            </Col>
            <Col span={8}>{`Status: ${containerStatusText(
                shipment,
                container
            )}`}</Col>
            {currentVessel && (
                <Col
                    span={12}
                    style={{ textAlign: 'right' }}
                >{`Next Vessel: ${containerVesselText(
                    shipment,
                    container
                )}`}</Col>
            )}
        </div>
    );
}

ContainerHeader.propTypes = {
    container: PropTypes.object,
    shipment: PropTypes.object,
};

export default ContainerHeader;
