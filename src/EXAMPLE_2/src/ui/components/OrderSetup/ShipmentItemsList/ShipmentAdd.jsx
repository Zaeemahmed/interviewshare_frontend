import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { Row, Button, Col, Input } from 'antd';
import { FormattedMessage, useIntl } from 'react-intl';
import { useMutation, useApolloClient } from '@apollo/react-hooks';
import { gqlCreateShipment } from '@/api/Mutations/Shipment';
import { gqlOrderById } from '@/api/Queries/Orders';
import { useOrder } from '@/api/Context/OrderContext';
import ButtonCancel from '@/ui/atoms/Buttons/ButtonCancel';

export default function ShipmentAdd() {
    const intl = useIntl();
    const apolloClient = useApolloClient();
    const { order, permissions } = useOrder();
    const { showCustomer, showSupplier, isSupplyChainManager } = permissions;

    const [showInputRow, onChangeShowInputRow] = useState(false);
    const [shipmentName, setShipmentName] = useState('');

    const [createShipment] = useMutation(gqlCreateShipment, {
        update(cache, { data: createShipment }) {
            const orderCache = cache.readQuery({
                query: gqlOrderById,
                variables: {
                    orderId: order.id,
                    showSupplier: showSupplier,
                    showCustomer: showCustomer,
                    showSupplyChainManager: isSupplyChainManager,
                },
            });

            let newOrder = {
                ...orderCache.orderById,
            };
            newOrder = {
                ...newOrder,
                shipments: [
                    ...newOrder.shipments,
                    createShipment.createShipment.shipment,
                ],
            };

            apolloClient.writeQuery({
                query: gqlOrderById,
                variables: {
                    orderId: order.id,
                    showSupplier: showSupplier,
                    showCustomer: showCustomer,
                    showSupplyChainManager: isSupplyChainManager,
                },
                data: {
                    orderById: newOrder,
                },
            });
        },
    });

    const submit = () => {
        createShipment({
            variables: {
                shipmentName: shipmentName,
                orderId: order.id,
            },
        });
        setShipmentName('');
        onChangeShowInputRow(false);
    };

    const changeShowInputRow = () => {
        onChangeShowInputRow(!showInputRow);
    };

    return (
        <div>
            {!showInputRow ? (
                <ButtonRow>
                    <Button
                        size="small"
                        type="primary"
                        onClick={changeShowInputRow}
                    >
                        <FormattedMessage defaultMessage="Add another shipment" />
                    </Button>
                </ButtonRow>
            ) : (
                <Fragment>
                    <InputRow>
                        <FirstCol xs={6} md={3}>
                            <FormattedMessage defaultMessage="Shipment name" />
                        </FirstCol>
                        <Col xs={12} md={17}>
                            <StyledInput
                                autoFocus
                                value={shipmentName}
                                onPressEnter={submit}
                                onChange={e => setShipmentName(e.target.value)}
                                placeholder={intl.formatMessage({
                                    defaultMessage:
                                        'Please enter new shipment name here',
                                })}
                            />
                        </Col>
                        <Col xs={6} md={4} style={{ textAlign: 'right' }}>
                            <ButtonCancel
                                size="small"
                                style={{ marginRight: '10px' }}
                                onClick={changeShowInputRow}
                            />
                            <Button
                                size="small"
                                type="primary"
                                onClick={submit}
                            >
                                <FormattedMessage defaultMessage="Add" />
                            </Button>
                        </Col>
                    </InputRow>
                    <Overlay />
                </Fragment>
            )}
        </div>
    );
}

const ButtonRow = styled.div`
    border: 1px solid #ecebeb;
    border-radius: 10px;
    background: #ffffff;
    padding: 10px 10px 10px 30px;
    margin: 0px 30px 10px 30px;
    display: flex;
    justify-content: center;
`;

const InputRow = styled(Row)`
    z-index: 10;
    background: white;
    border-radius: 10px;
    padding: 10px 10px 10px 0;
    margin: 0px 30px 10px 30px;
`;

const FirstCol = styled(Col)`
    color: #979797;
    text-align: center;
    line-height: 30px;
    ::after {
        display: block;
        content: ' ';
        width: 1px;
        background: #ecebeb;
        height: 48px;
        position: absolute;
        right: 0;
        top: -8px;
    }
`;

const StyledInput = styled(Input)`
    border: none;
    font-weight: bold;
    padding-left: 10px;
    border-color: transparent !important;
    &:focus {
        border-color: transparent !important;
        box-shadow: none !important;
    }
`;

const Overlay = styled.div`
    background-color: #aeaeae;
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 2;
    top: 0px;
    left: 0px;
    opacity: 0.5; /* in FireFox */
    filter: alpha(opacity=50); /* in IE */
`;
