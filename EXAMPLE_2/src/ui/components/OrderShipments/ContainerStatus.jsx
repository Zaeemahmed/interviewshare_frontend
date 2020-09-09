import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import { useApolloClient } from '@apollo/react-hooks';
import { useOrderPermissions } from '@/api/Context/OrderContext';
import IconLine from '@/ui/atoms/Icons/IconLine';
import IconCircleOcean from '@/ui/atoms/Icons/IconCircleOcean';
import IconCircleWarning from '@/ui/atoms/Icons/IconCircleWarning';
import IconCircleCompass from '@/ui/atoms/Icons/IconCircleCompass';
import ContainerStatusAdd from './ContainerStatusAdd';
import ContainerStatusEdit from './ContainerStatusEdit';
import ContainerStatusNoData from './ContainerStatusNoData';
import ContainerStatusEmpty from './ContainerStatusEmpty';
import ContainerStatusNoInfo from './ContainerStatusNoInfo';
import ContainerStatusPlannedEtd from './ContainerStatusPlannedEtd';

function ContainerStatus({ shipment, container }) {
    const apolloClient = useApolloClient();
    const { isCustomer } = useOrderPermissions();

    const showEditModal = () => {
        apolloClient.writeData({
            data: { shipmentTrackingFormModalId: shipment.id },
        });
    };

    const getScenario = shipment => {
        if (!shipment) return null;

        if (!shipment.blNumber && !shipment.carrierCode) {
            // BlNumber AND Carrier missing
            return 'add';
        } else if (!shipment.blNumber || !shipment.carrierCode) {
            // BlNumber OR Carrier missing
            return 'edit';
        } else if (
            shipment.blNumber &&
            shipment.carrierCode &&
            (!container.segments || container.segments.length < 1)
        ) {
            // BlNumber and Carrier CORRECT, but no data received
            return 'nodata';
        } else if (
            shipment.blNumber &&
            shipment.carrierCode &&
            container.status === 'TrackingStatus.PROBABLY_NOT_FOUND'
        ) {
            // BlNumber and Carrier CORRECT, but received "DATA NOT FOUND" from data provider
            return 'noinfo';
        }
        return null;
    };

    let showContainerStatusPlannedEtd =
        shipment.plannedEtd &&
        (!container.segments || container.segments.length < 1);

    const scenario = getScenario(shipment);

    //Any scenario shows the Customer empty
    if (isCustomer && scenario) {
        if (scenario === 'nodata') {
            showContainerStatusPlannedEtd = true;
        } else {
            return <ContainerStatusEmpty />;
        }
    }

    return (
        <Fragment>
            <div>
                <IconRow>
                    {showContainerStatusPlannedEtd && (
                        <StyledCol span={6}>
                            <IconCircleOcean color="grey" />
                            <IconLine />
                        </StyledCol>
                    )}
                    <StyledCol span={showContainerStatusPlannedEtd ? 18 : 24}>
                        {(scenario === 'add' ||
                            scenario === 'edit' ||
                            scenario === 'noinfo') && <IconCircleWarning />}
                        {scenario === 'nodata' && (
                            <IconCircleCompass color="green" />
                        )}
                        {scenario && <IconLine />}
                    </StyledCol>
                </IconRow>

                {scenario ? (
                    <StyledRow>
                        {showContainerStatusPlannedEtd && (
                            <ContainerStatusPlannedEtd shipment={shipment} />
                        )}
                        {scenario === 'add' && (
                            <ContainerStatusAdd onClick={showEditModal} />
                        )}
                        {scenario === 'edit' && (
                            <ContainerStatusEdit onClick={showEditModal} />
                        )}
                        {scenario === 'nodata' && <ContainerStatusNoData />}
                        {scenario === 'noinfo' && (
                            <ContainerStatusNoInfo onClick={showEditModal} />
                        )}
                    </StyledRow>
                ) : (
                    <Row>
                        <ContainerStatusEmpty />
                    </Row>
                )}
            </div>
        </Fragment>
    );
}

ContainerStatus.propTypes = {
    shipment: PropTypes.object,
    container: PropTypes.object,
};

const StyledCol = styled(Col)`
    display: flex;
    align-items: center;
`;
const IconRow = styled(Row)`
    background-color: rgb(250, 250, 250);
    padding: 10px 0px 10px 15px;
    display: flex;
    align-items: center;
    flex-direction: row;
    text-align: left;
    margin-left: -16px;
    margin-right: -16px;
    min-height: 42px;
`;

const StyledRow = styled(Row)`
    margin-top: 16px;
`;

export default ContainerStatus;
