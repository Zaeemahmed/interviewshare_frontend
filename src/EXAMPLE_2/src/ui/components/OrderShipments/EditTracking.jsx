import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'antd';
import { FormattedMessage } from 'react-intl';
import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { gqlShipmentTrackingFormModalId } from '@/api/Queries/local';
import { useOrderPermissions } from '@/api/Context/OrderContext';
import ShipmentAddForm from './ShipmentAdd/ShipmentAddForm';

function EditTracking({ shipment, allSupportedCarriers }) {
    const { isCustomer } = useOrderPermissions();
    const apolloClient = useApolloClient();

    let shipmentTrackingFormModalId = useQuery(gqlShipmentTrackingFormModalId);
    shipmentTrackingFormModalId =
        (shipmentTrackingFormModalId.data &&
            shipmentTrackingFormModalId.data.shipmentTrackingFormModalId) ||
        null;

    const setVisible = () => {
        apolloClient.writeData({
            data: { shipmentTrackingFormModalId: shipment.id },
        });
    };

    const unsetVisible = () => {
        apolloClient.writeData({ data: { shipmentTrackingFormModalId: null } });
    };

    return (
        <div className="EditTracking">
            {!isCustomer && (
                <Button
                    size="small"
                    onClick={e => {
                        setVisible();
                        e.stopPropagation();
                    }}
                >
                    <FormattedMessage defaultMessage="Edit tracking information" />
                </Button>
            )}
            <Modal
                destroyOnClose
                width="980px"
                bodyStyle={{ padding: '14px 24px 20px 24px' }}
                visible={shipmentTrackingFormModalId === shipment.id}
                closable={false}
                onOk={() => unsetVisible()}
                handleCancel={() => unsetVisible()}
                onCancel={() => unsetVisible()}
                content={
                    <p>
                        <FormattedMessage defaultMessage="Some Content" />
                    </p>
                }
                footer={false}
            >
                <ShipmentAddForm
                    visible={shipmentTrackingFormModalId === shipment.id}
                    closeModal={() => unsetVisible()}
                    shipment={shipment}
                    shipmentId={shipment.id}
                    allSupportedCarriers={allSupportedCarriers}
                />
            </Modal>
        </div>
    );
}

EditTracking.propTypes = {
    shipment: PropTypes.object,
    allSupportedCarriers: PropTypes.object,
};

export default EditTracking;
