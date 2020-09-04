import React from 'react';
import { Collapse, Icon } from 'antd';
import styled from 'styled-components';

const { Panel } = Collapse;

const text = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Nulla vestibulum quam a justo tempus dapibus.
    Aliquam suscipit pharetra consectetur.
    Etiam lobortis lacinia tincidunt.
`;

function ShipmentTrackingDetails() {
    return (
        <StyledTrackingDetailsSection
            bordered={false}
            expandIcon={({ isActive }) => (
                <Icon type="caret-right" rotate={isActive ? 90 : 0} />
            )}
        >
            <StyledPanel header="Shipment Tracking Details" key="1">
                <p>{text}</p>
            </StyledPanel>
        </StyledTrackingDetailsSection>
    );
}

const StyledTrackingDetailsSection = styled(Collapse)`
    margin-top: 30px;
    margin-bottom: 40px;
`;

const StyledPanel = styled(Panel)`
    background: transparent;
    border-radius: 4;
    margin-bottom: 24;
    border: 0;
    overflow: hidden;
`;

export default ShipmentTrackingDetails;
