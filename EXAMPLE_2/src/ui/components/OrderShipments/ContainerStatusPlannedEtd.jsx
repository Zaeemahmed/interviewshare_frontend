import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Col } from 'antd';
import { FormattedMessage } from 'react-intl';
import { DDMMYYYY } from '@/ui/_helpers/DateTime';

function ContainerStatusPlannedEtd({ shipment }) {
    return (
        <Col span={6}>
            <Div>
                <div>
                    <FormattedMessage defaultMessage="Vessel Departure" />
                </div>
                <PlannedEtd>{`Planned: ${DDMMYYYY(
                    shipment.customerEtd
                )}`}</PlannedEtd>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
            </Div>
        </Col>
    );
}

ContainerStatusPlannedEtd.propTypes = {
    shipment: PropTypes.object,
};

const PlannedEtd = styled.div`
    color: #5bacc7;
    font-weight: bold;
`;

const Div = styled.div`
    border: 1px solid #ecebeb;
    border-radius: 8px;
    padding: 16px;
    min-height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 16px;
    min-width: 215px;
`;

export default ContainerStatusPlannedEtd;
