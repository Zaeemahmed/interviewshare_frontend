import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, useIntl } from 'react-intl';
import styled from 'styled-components';
import { Row, Input, Col } from 'antd';
import { useMutation, useApolloClient } from '@apollo/react-hooks';
import { gqlCreateDocumentTypeCustom } from '@/api/Mutations/Document';
import { gqlOrderById } from '@/api/Queries/Orders';
import { useOrder } from '@/api/Context/OrderContext';
import ButtonCancel from '@/ui/atoms/Buttons/ButtonCancel';
import ButtonAdd from '@/ui/atoms/Buttons/ButtonAdd';
import Overlay from '@/ui/atoms/Overlay';

function AddCustomDocument({ relatedItemType, relatedItemId }) {
    const intl = useIntl();
    const apolloClient = useApolloClient();
    const [showInputRow, onChangeShowInputRow] = useState(false);
    const [documentTypeName, setDocumentTypeName] = useState('');

    const { order, permissions } = useOrder();
    const { showSupplier, showCustomer, isSupplyChainManager } = permissions;

    const [addDocument] = useMutation(gqlCreateDocumentTypeCustom, {
        update(
            cache,
            {
                data: {
                    createDocumentTypeCustom: { documentType },
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

            let newOrder = { ...orderCache.orderById };
            switch (documentType.relatedItemType) {
                case 'ITEM':
                    newOrder.shipments.forEach((shipment, shipmentIndex) => {
                        shipment.items.forEach((item, itemIndex) => {
                            if (item.id === documentType.relatedItemId) {
                                item.documentTypes = [
                                    ...orderCache.orderById.shipments[
                                        shipmentIndex
                                    ].items[itemIndex].documentTypes,
                                    documentType,
                                ];
                            }
                        });
                    });
                    break;

                case 'SHIPMENT':
                    newOrder.shipments.forEach((shipment, index) => {
                        if (shipment.id === documentType.relatedItemId) {
                            shipment.documentTypes = [
                                ...orderCache.orderById.shipments[index]
                                    .documentTypes,
                                documentType,
                            ];
                        }
                    });
                    break;

                default:
                    newOrder.documentTypes = [
                        ...orderCache.orderById.documentTypes,
                        documentType,
                    ];
            }

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

    const changeShowInputRow = () => {
        onChangeShowInputRow(!showInputRow);
    };

    const addDocumentType = () => {
        addDocument({
            variables: {
                name: documentTypeName,
                orderId: order.id,
                relatedItemType,
                relatedItemId,
            },
        });

        onChangeShowInputRow(false);
    };

    return (
        <StyledRow>
            {!showInputRow ? (
                <Text onClick={changeShowInputRow}>
                    <FormattedMessage defaultMessage="Add a custom document" />
                </Text>
            ) : (
                <>
                    <InputRow>
                        <FirstCol xs={6} md={4}>
                            <FormattedMessage defaultMessage="Document name" />
                        </FirstCol>
                        <Col xs={12} md={16}>
                            <StyledInput
                                autoFocus
                                value={documentTypeName}
                                onChange={e =>
                                    setDocumentTypeName(e.target.value)
                                }
                                placeholder={intl.formatMessage({
                                    id: 'AddCustomDocument new document name',
                                    defaultMessage:
                                        'Please enter new document name here',
                                })}
                            />
                        </Col>
                        <Col xs={6} md={4}>
                            <ButtonCancel
                                size="small"
                                style={{ marginRight: '10px' }}
                                onClick={changeShowInputRow}
                            />
                            <ButtonAdd
                                size="small"
                                type="primary"
                                onClick={addDocumentType}
                            />
                        </Col>
                    </InputRow>
                    <Overlay />
                </>
            )}
        </StyledRow>
    );
}

AddCustomDocument.propTypes = {
    relatedItemType: PropTypes.string,
    relatedItemId: PropTypes.string,
};

const StyledRow = styled(Row)`
    min-height: 34px;
    margin-top: 10px;
    border: 1px solid #ecebeb;
    border-radius: 10px;
    text-decoration: underline;
    .ant-input:focus {
        border-color: transparent;
        box-shadow: none;
    }
`;

const Text = styled.a`
    text-align: center;
    display: block;
    width: 100%;
    cursor: pointer;
    padding: 10px;
    text-decoration: underline;
    :hover {
        text-decoration: underline;
    }
`;

const InputRow = styled(Row)`
    padding: 8px 0;
    z-index: 10;
    background: white;
    border-radius: 10px;
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
`;

export default AddCustomDocument;
