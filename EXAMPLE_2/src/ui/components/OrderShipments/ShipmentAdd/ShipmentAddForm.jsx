import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, useIntl } from 'react-intl';
import styled from 'styled-components';
import moment from 'moment-timezone';
import { useMutation, useApolloClient } from '@apollo/react-hooks';
import { Row, Col, Form, Select, Input, DatePicker, Spin, Button } from 'antd';
import cloneDeep from 'lodash/cloneDeep';
import { gqlUpdateShipment, gqlDeleteShipment } from '@/api/Mutations/Shipment';
import { gqlOrderById } from '@/api/Queries/Orders';
import { useOrder } from '@/api/Context/OrderContext';

const { Option } = Select;
const { TextArea } = Input;

function ShipmentAddForm({
    shipment,
    closeModal,
    allSupportedCarriers,
    visible,
}) {
    const intl = useIntl();
    const apolloClient = useApolloClient();
    const { order, refetchOrder, permissions } = useOrder();
    const { showCustomer, showSupplier, isSupplyChainManager } = permissions;

    const [shipmentName, setShipmentName] = useState(shipment.shipmentName);
    const [carrier, setCarrier] = useState(shipment.carrierCode);
    const [blNumber, setBLNumber] = useState(shipment.blNumber);
    const [bookingNumber, setBookingNumber] = useState(shipment.bookingNumber);
    const [plannedETD, setPlannedETD] = useState(shipment.customerEtd);
    const [demurrage, setDemurrage] = useState(shipment.demurrageInformation);
    const [showSpinner, setShowSpinner] = useState(false);
    const dateFormat = 'DD.MM.YYYY';
    const graphQLDateFormat = 'YYYY-MM-DD';

    useEffect(() => {
        if (!visible) {
            resetForm(shipment);
        }
    }, [visible, shipment]);

    const [updateShipment] = useMutation(gqlUpdateShipment, {
        update(
            cache,
            {
                data: {
                    updateShipment: { shipment },
                },
            }
        ) {
            const orderCache = cache.readQuery({
                query: gqlOrderById,
                variables: {
                    orderId: order.id,
                    showSupplier: showSupplier,
                    showCustomer: showCustomer,
                    showSupplyChainManager: isSupplyChainManager,
                },
            });

            let newOrder = cloneDeep(orderCache.orderById);

            newOrder.shipments.forEach((s, index) => {
                if (s.id === shipment.id) {
                    newOrder.shipments[index] = {
                        ...orderCache.orderById.shipments[index],
                        shipment,
                    };
                }
            });

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

    const [deleteShipment] = useMutation(gqlDeleteShipment, {
        update(cache) {
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

            // Remove Shipment
            newOrder = newOrder.filter(s => s.id !== shipment.id);

            apolloClient.writeQuery({
                query: gqlOrderById,
                variables: {
                    orderId: order.id,
                    showSupplier: showSupplier,
                    showCustomer: showCustomer,
                    showSupplyChainManager: isSupplyChainManager,
                },
                data: {
                    orderById: {
                        ...newOrder,
                        items: [...newOrder.items],
                    },
                },
            });

            refetchOrder().then(closeModal);
        },
    });

    const onSave = e => {
        e.preventDefault();

        if (shipmentName !== '') {
            setShowSpinner(true);

            let customerEtd = null;

            if (plannedETD?.format && moment(plannedETD).isValid()) {
                customerEtd = plannedETD.format(graphQLDateFormat);
            }

            updateShipment({
                variables: {
                    blNumber: blNumber,
                    bookingNumber: bookingNumber,
                    carrierCode: carrier,
                    containerNumber: shipment.containerNumber,
                    demurrageInformation: demurrage,
                    shipmentId: shipment.id || '',
                    shipmentName: shipmentName,
                    customerEtd: customerEtd,
                },
            }).then(() => {
                setShowSpinner(false);
                closeModal();
            });
        }
    };

    let allCarriers = allSupportedCarriers?.allSupportedCarriers?.map(
        carrier => (
            <Option
                key={carrier.dataProviderCode}
                value={carrier.dataProviderCode}
            >
                {carrier.name}
            </Option>
        )
    );

    const resetForm = shipment => {
        setShipmentName(shipment.shipmentName);
        setCarrier(shipment.carrierCode);
        setBLNumber(shipment.blNumber);
        setBookingNumber(shipment.bookingNumber);
        setPlannedETD(shipment.customerEtd);
        setDemurrage(shipment.demurrageInformation);
    };

    return (
        <WrapperSt>
            {showSpinner && (
                <SpinnerBackground>
                    <SpinnerDiv>
                        <Spin />
                    </SpinnerDiv>
                </SpinnerBackground>
            )}
            <Row layout="vertical">
                <Form onSubmit={onSave}>
                    <Col span={10} style={{ display: 'flex' }}>
                        <div
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'space-between',
                                alignSelf: 'right',
                            }}
                        >
                            <StyledFormItem
                                label={intl.formatMessage({
                                    id:
                                        'ShipmentAddForm Custom Shipment Name label',
                                    defaultMessage: 'Custom Shipment Name',
                                })}
                            >
                                <Input
                                    value={shipmentName}
                                    onChange={e =>
                                        setShipmentName(e.target.value)
                                    }
                                    placeholder={intl.formatMessage({
                                        id:
                                            'ShipmentAddForm Custom Shipment Name',
                                        defaultMessage: 'Enter',
                                    })}
                                />
                            </StyledFormItem>
                            <StyledFormItem
                                label={intl.formatMessage({
                                    id: 'ShipmentAddForm Carrier label',
                                    defaultMessage: 'Carrier*',
                                })}
                            >
                                <Select
                                    showSearch
                                    defaultValue="Select"
                                    value={carrier}
                                    onChange={value => setCarrier(value)}
                                    style={{
                                        marginRight: '10px',
                                    }}
                                >
                                    {allCarriers}
                                </Select>
                            </StyledFormItem>

                            <StyledFormItem
                                label={intl.formatMessage({
                                    id: 'ShipmentAddForm BL Number label',
                                    defaultMessage: 'B/L Number',
                                })}
                            >
                                <Input
                                    value={blNumber}
                                    onChange={e => setBLNumber(e.target.value)}
                                    placeholder={intl.formatMessage({
                                        id: 'ShipmentAddForm BL Number',
                                        defaultMessage: 'Enter',
                                    })}
                                />
                            </StyledFormItem>
                            <div style={{ marginTop: '30px' }}>/</div>
                            <StyledFormItem
                                label={intl.formatMessage({
                                    id: 'ShipmentAddForm Booking Number label',
                                    defaultMessage: 'Booking Number',
                                })}
                            >
                                <Input
                                    value={bookingNumber}
                                    onChange={e =>
                                        setBookingNumber(e.target.value)
                                    }
                                    placeholder={intl.formatMessage({
                                        id: 'ShipmentAddForm Booking Number',
                                        defaultMessage: 'Enter',
                                    })}
                                />
                            </StyledFormItem>
                        </div>
                    </Col>
                    <Col
                        span={14}
                        style={{
                            display: 'flex',
                            padding: '3px 20px',
                            flexWrap: 'wrap',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignSelf: 'right',
                                position: 'absolute',
                                right: '-9px',
                                top: '0px',
                                width: '210px',
                            }}
                        >
                            <Button size="small" onClick={() => closeModal()}>
                                <FormattedMessage defaultMessage="Cancel" />
                            </Button>

                            <Button
                                size="small"
                                type="danger"
                                onClick={() => {
                                    setShowSpinner(true);
                                    deleteShipment({
                                        variables: { shipmentId: shipment.id },
                                    }).then(() => {
                                        setShowSpinner(false);
                                        closeModal();
                                    });
                                }}
                            >
                                <FormattedMessage defaultMessage="Delete" />
                            </Button>
                            <Button
                                size="small"
                                type="primary"
                                htmlType="submit"
                            >
                                <FormattedMessage defaultMessage="Save" />
                            </Button>
                        </div>
                        <StyledFormItem
                            label={intl.formatMessage({
                                id: 'ShipmentAddForm Planned ETD label',
                                defaultMessage: 'Planned ETD from POL',
                            })}
                        >
                            <DatePicker
                                defaultValue={
                                    moment(
                                        shipment.customerEtd,
                                        dateFormat
                                    ).isValid()
                                        ? moment(
                                              shipment.customerEtd,
                                              dateFormat
                                          )
                                        : null
                                }
                                onChange={(date, dateString) =>
                                    setPlannedETD(date)
                                }
                                format={dateFormat}
                                value={
                                    moment(plannedETD).isValid()
                                        ? moment(plannedETD)
                                        : null
                                }
                            />
                        </StyledFormItem>
                        <StyledFormItem
                            label={intl.formatMessage({
                                id: 'ShipmentAddForm Demurrage Info label',
                                defaultMessage: 'Demurrage info',
                            })}
                            style={{ width: '100%' }}
                        >
                            <TextArea
                                value={demurrage}
                                onChange={e => setDemurrage(e.target.value)}
                                placeholder={intl.formatMessage({
                                    id: 'ShipmentAddForm Demurrage info',
                                    defaultMessage: 'Enter',
                                })}
                                rows={4}
                            />
                        </StyledFormItem>
                    </Col>
                </Form>
            </Row>
        </WrapperSt>
    );
}

ShipmentAddForm.propTypes = {
    shipment: PropTypes.object,
    allSupportedCarriers: PropTypes.object,
    closeModal: PropTypes.func,
    refetch: PropTypes.func,
    visible: PropTypes.bool,
};

const WrapperSt = styled.div`
    .ant-form-item-label {
        line-height: 22px;
    }
`;

const SpinnerBackground = styled.div`
    background-color: rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 100%;
    z-index: 2;
    position: absolute;
    top: 0px;
    left: 0px;
`;

const SpinnerDiv = styled.div`
    position: absolute;
    top: 50%;
    right: 50%;
    z-index: 3;
`;

const StyledFormItem = styled(Form.Item)`
    margin-bottom: 0 !important;
    width: 180px;
`;

export default ShipmentAddForm;
