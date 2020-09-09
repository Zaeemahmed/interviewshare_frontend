import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Collapse } from 'antd';
import { useQuery } from '@apollo/react-hooks';
import { gqlContainerByShipmentId } from '@/api/Queries/Shipments';
import Loading from '@/ui/atoms/Loading';
import IconExpand from '@/ui/atoms/Icons/IconExpand';
import { Box } from '@/ui/atoms/Base';
import ContainerHeader from './ContainerHeader';
import ContainerSegments from './ContainerSegments';
import ContainerStatus from './ContainerStatus';
import ContainerDetailsCollapse from './ContainerDetailsCollapse';

const { Panel } = Collapse;

function ShipmentContainers({ shipment }) {
    let { data, loading } = useQuery(gqlContainerByShipmentId, {
        variables: {
            shipmentId: shipment.id,
        },
    });
    if (loading) return <Loading />;

    if (!data) {
        data = {};
    }
    if (
        !data.containerByShipmentId ||
        data.containerByShipmentId.length === 0
    ) {
        data.containerByShipmentId = [
            {
                segments: [],
            },
        ];
    }

    const showContainerStatus = container => {
        return (
            !shipment.blNumber ||
            !container.segments ||
            container.segments.length < 1
        );
    };

    const showContainerDetails = container => {
        return (
            shipment.blNumber &&
            container.updates &&
            container.updates.length > 0
        );
    };

    return (
        <Fragment>
            {data.containerByShipmentId.map((container, index) => {
                return (
                    <Box p="0px 0px 0px 30px" bg="grey" key={index}>
                        <StyledCollapse
                            defaultActiveKey={['1']}
                            expandIcon={props => IconExpand(props)}
                        >
                            <StyledPanel
                                key="1"
                                header={
                                    <ContainerHeader
                                        shipment={shipment}
                                        container={container}
                                    />
                                }
                            >
                                {showContainerStatus(container) ? (
                                    <ContainerStatus
                                        shipment={shipment}
                                        container={container}
                                    />
                                ) : (
                                    <ContainerSegments container={container} />
                                )}
                            </StyledPanel>
                        </StyledCollapse>
                        {showContainerDetails(container) && (
                            <ContainerDetailsCollapse
                                shipment={shipment}
                                container={container}
                            />
                        )}
                    </Box>
                );
            })}
        </Fragment>
    );
}

ShipmentContainers.propTypes = {
    shipment: PropTypes.object,
};

const StyledPanel = styled(Panel)`
    background-color: #fff;
    border-radius: 8px !important;
    .ant-collapse-content {
        border-radius: 0px 0px 8px 8px !important;
    }
`;

const StyledCollapse = styled(Collapse)`
    border-radius: 8px !important;
    // &.ant-collapse {
    //     border-radius: 8px !important;
    // }
    // &.ant-collapse-item {
    //     border-radius: 8px !important;
    }
    margin-top: 30px;
`;

export default ShipmentContainers;
