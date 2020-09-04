import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import { gqlOrderById } from '@/api/Queries/Orders';
import { gqlDeleteDocumentType } from '@/api/Mutations/Document';
import { useOrder } from '@/api/Context/OrderContext';

function DocumentDelete({ documentType, shipmentId }) {
    const apolloClient = useApolloClient();
    const { order, permissions } = useOrder();
    const { showSupplier, showCustomer, showSupplyChainManager } = permissions;

    const [deleteDocumentType] = useMutation(gqlDeleteDocumentType, {
        update(cache) {
            const orderCache = cache.readQuery({
                query: gqlOrderById,
                variables: {
                    orderId: order.id,
                    showSupplier: showSupplier,
                    showCustomer: showCustomer,
                    showSupplyChainManager: showSupplyChainManager,
                },
            });

            let newOrder = {
                ...orderCache.orderById,
            };
            if (documentType.relatedItemType === 'ORDER') {
                let DocumentTypes = orderCache.orderById.documentTypes.filter(
                    d => d.id !== documentType.id
                );
                newOrder.documentTypes = DocumentTypes;
            } else if (documentType.relatedItemType === 'SHIPMENT') {
                for (
                    let index = 0;
                    index < newOrder.shipments.length;
                    index++
                ) {
                    if (
                        newOrder.shipments[index].id ===
                        documentType.relatedItemId
                    ) {
                        let DocumentTypes = [
                            ...orderCache.orderById.shipments[
                                index
                            ].documentTypes.filter(
                                d => d.id !== documentType.id
                            ),
                        ];
                        newOrder.shipments = [...newOrder.shipments];
                        newOrder.shipments[index].documentTypes = [
                            ...DocumentTypes,
                        ];
                    }
                }
            } else if (documentType.relatedItemType === 'ITEM') {
                newOrder.shipments.forEach((shipment, shipmentIndex) => {
                    if (shipment.id === shipmentId) {
                        shipment.items.forEach((item, itemIndex) => {
                            if (item.id === documentType.relatedItemId) {
                                let DocumentTypes = orderCache.orderById.shipments[
                                    shipmentIndex
                                ].items[itemIndex].documentTypes.filter(
                                    d => d.id !== documentType.id
                                );
                                item.documentTypes = DocumentTypes;
                            }
                        });
                    }
                });
            }
            apolloClient.writeQuery({
                query: gqlOrderById,
                variables: {
                    orderId: order.id,
                    showSupplier: showSupplier,
                    showCustomer: showCustomer,
                    showSupplyChainManager: showSupplyChainManager,
                },
                data: {
                    orderById: newOrder,
                },
            });
        },
    });
    return (
        <span
            style={{
                color: 'red',
                textDecoration: 'underline',
                cursor: 'pointer',
                marginTop: '20px',
                display: 'block',
            }}
            onClick={() => {
                deleteDocumentType({
                    variables: { documentTypeId: documentType.id },
                });
            }}
        >
            <FormattedMessage defaultMessage="Delete document" />
        </span>
    );
}

DocumentDelete.propTypes = {
    documentType: PropTypes.object,
    shipmentId: PropTypes.string,
    refetch: PropTypes.func,
};

export default DocumentDelete;
