import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Row, Col, Button } from 'antd';
import { FormattedMessage } from 'react-intl';
import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { gqlAllSupportedCarriers } from '@/api/Queries/Shipments';
import { useOrder } from '@/api/Context/OrderContext';
import IconWarning from '@/ui/atoms/Icons/IconWarning';
import { Card, Box } from '@/ui/atoms/Base';
import EditTracking from './EditTracking';
import ShipmentContainers from './ShipmentContainers';
import ShipmentProducts from './ShipmentProducts';

function OrderShipments() {
    const apolloClient = useApolloClient();
    const { order } = useOrder();
    let { data: allSupportedCarriers } = useQuery(gqlAllSupportedCarriers);

    return (
        <Fragment>
            {order.shipments.map((shipment, index) => {
                return (
                    <Box
                        key={index}
                        border="1px solid #e8e8e8"
                        borderBottom="0px"
                        borderRadius="8px 8px 8px 0px"
                        bg="transparent"
                        m="20px 0px 20px 0px"
                    >
                        <StyledRow>
                            <Col span={12}>
                                <h4>
                                    {shipment.shipmentName || (
                                        <Fragment>
                                            <FormattedMessage defaultMessage="Shipment" />{' '}
                                            {index}
                                            <IconWarning
                                                style={{
                                                    marginLeft: '5px',
                                                }}
                                            />
                                        </Fragment>
                                    )}
                                </h4>
                            </Col>

                            <StyledCol span={12}>
                                <EditTracking
                                    shipment={shipment}
                                    allSupportedCarriers={allSupportedCarriers}
                                />
                            </StyledCol>
                        </StyledRow>

                        <ShipmentProducts items={shipment.items} />

                        <ShipmentContainers key={index} shipment={shipment} />
                    </Box>
                );
            })}
            <Card
                p="10px 0px 10px 0px"
                mt={40}
                display="flex"
                justifyContent="center"
            >
                <Button
                    size="small"
                    type="primary"
                    onClick={() =>
                        apolloClient.writeData({
                            data: { manageOrderSelectedTab: 'ordersetup' },
                        })
                    }
                >
                    Add another shipment
                </Button>
            </Card>
        </Fragment>
    );
}

const StyledRow = styled(Row)`
    padding: 20px;
    background-color: white;
    border-radius: 10px;
`;

const StyledCol = styled(Col)`
    text-align: right;
`;

export default OrderShipments;
