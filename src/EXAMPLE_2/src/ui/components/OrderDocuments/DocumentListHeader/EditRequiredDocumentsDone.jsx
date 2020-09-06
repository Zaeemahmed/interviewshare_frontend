import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Button } from 'antd';
import { useApolloClient, useMutation, useQuery } from '@apollo/react-hooks';
import {
    gqlShipmentChanges,
    gqlRequiredDocumentChanges,
} from '@/api/Queries/local';
import { gqlUpdateShipment } from '@/api/Mutations/Shipment';
import { gqlUpdateDocument } from '@/api/Mutations/Document';

function EditRequiredDocumentsDone() {
    const apolloClient = useApolloClient();

    let { data: shipmentChanges } = useQuery(gqlShipmentChanges);
    shipmentChanges = shipmentChanges?.shipmentChanges || '[]';

    let { data: requiredDocumentChanges } = useQuery(
        gqlRequiredDocumentChanges
    );
    requiredDocumentChanges =
        requiredDocumentChanges?.requiredDocumentChanges || '[]';

    const [updateShipment] = useMutation(gqlUpdateShipment, {
        update(
            cache,
            {
                data: {
                    updateShipment: { shipment },
                },
            }
        ) {},
    });

    const [updateDocument] = useMutation(gqlUpdateDocument, {
        update(
            cache,
            {
                data: {
                    updateDocument: { document },
                },
            }
        ) {},
    });

    const applyChanges = () => {
        //Shipment Changes
        let tempShipmentChanges = JSON.parse(shipmentChanges);
        if (tempShipmentChanges && tempShipmentChanges.length > 0) {
            tempShipmentChanges.forEach(shipment => {
                updateShipment({
                    variables: {
                        customerDocumentAwbNumber:
                            shipment.customerDocumentAwbNumber,
                        supplierDocumentAwbNumber:
                            shipment.supplierDocumentAwbNumber,
                        shipmentId: shipment.id,
                    },
                });
            });
            apolloClient.writeData({
                data: {
                    shipmentChanges: '[]',
                },
            });
        }

        // Document Changes
        let tempDataDocuments = JSON.parse(requiredDocumentChanges);
        if (tempDataDocuments && tempDataDocuments.length > 0) {
            tempDataDocuments.forEach(doc => {
                updateDocument({
                    variables: {
                        documentId: doc.documentId,
                        isActive: doc.isActive,
                    },
                });
            });
            apolloClient.writeData({
                data: {
                    requiredDocumentChanges: '[]',
                },
            });
        }

        apolloClient.writeData({
            data: {
                editOrderDocument: false,
            },
        });
    };

    return (
        <Button
            size="small"
            type="primary"
            onClick={e => {
                e.stopPropagation();
                e.preventDefault();
                applyChanges();
            }}
        >
            <FormattedMessage defaultMessage="Done" />
        </Button>
    );
}

export default EditRequiredDocumentsDone;
