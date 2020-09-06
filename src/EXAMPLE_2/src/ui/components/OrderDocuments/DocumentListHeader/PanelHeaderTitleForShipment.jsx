import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { useQuery, useApolloClient } from '@apollo/react-hooks';
import { Input } from 'antd';
import { useOrderPermissions } from '@/api/Context/OrderContext';
import { gqlEditOrderDocument, gqlShipmentChanges } from '@/api/Queries/local';
import { Text } from '@/ui/atoms/Base';

function AWB({ isEditing, awbNumber, onChange }) {
    if (isEditing) {
        return (
            <Input
                style={{ width: '150px' }}
                onClick={e => e.stopPropagation()}
                onChange={e => {
                    e.stopPropagation();
                    onChange(e.target.value);
                }}
                defaultValue={awbNumber}
            />
        );
    }
    if (!awbNumber) {
        return (
            <Text fontStyle="italic">
                <FormattedMessage defaultMessage="no AWB provided" />
            </Text>
        );
    }
    return awbNumber; // TODO link
}

export default function PanelHeaderTitleForShipment({ shipment, index }) {
    const apolloClient = useApolloClient();
    const {
        showCustomer,
        showSupplier,
        isSupplyChainManager,
    } = useOrderPermissions();

    let { data: editOrderDocument } = useQuery(gqlEditOrderDocument);
    editOrderDocument = editOrderDocument?.editOrderDocument || false;

    let { data: shipmentChanges } = useQuery(gqlShipmentChanges);
    shipmentChanges = JSON.parse(shipmentChanges?.shipmentChanges || '[]');

    const onChangeAWBNumber = key => awbNumber => {
        let changesForId = shipmentChanges.find(c => c.id === shipment.id);

        if (!changesForId) {
            changesForId = { id: shipment.id };
            shipmentChanges.push(changesForId);
        }

        changesForId[key] = awbNumber;

        apolloClient.writeData({
            data: {
                shipmentChanges: JSON.stringify(shipmentChanges),
            },
        });
    };

    const shipmentIndex = parseInt(index, 10) + 1;

    return (
        <Text color="#979797">
            <Text color="black" fontWeight="bold">
                <FormattedMessage defaultMessage="Shipment Documents" />
            </Text>
            {' | '}
            {shipment.shipmentName || (
                <FormattedMessage
                    defaultMessage="Shipment {shipmentIndex}"
                    values={{ shipmentIndex }}
                />
            )}
            {' | '}
            {showCustomer && (
                <Text>
                    {isSupplyChainManager ? (
                        <FormattedMessage defaultMessage="Customer AWB" />
                    ) : (
                        'AWB'
                    )}
                    {': '}
                    <AWB
                        isEditing={editOrderDocument}
                        awbNumber={shipment.customerDocumentAwbNumber}
                        onChange={onChangeAWBNumber(
                            'customerDocumentAwbNumber'
                        )}
                    />
                </Text>
            )}
            {showCustomer && showSupplier && ' | '}
            {showSupplier && (
                <Text>
                    {isSupplyChainManager ? (
                        <FormattedMessage defaultMessage="Supplier AWB" />
                    ) : (
                        'AWB'
                    )}
                    {': '}
                    <AWB
                        isEditing={editOrderDocument}
                        awbNumber={shipment.supplierDocumentAwbNumber}
                        onChange={onChangeAWBNumber(
                            'supplierDocumentAwbNumber'
                        )}
                    />
                </Text>
            )}
        </Text>
    );
}

PanelHeaderTitleForShipment.propTypes = {
    shipment: PropTypes.object,
    index: PropTypes.number,
};
