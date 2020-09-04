import React from 'react';
import { PropTypes } from 'prop-types';
import { Button, Modal } from 'antd';
import { FormattedMessage } from 'react-intl';
import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { gqlAllSupportedCarriers } from '@/api/Queries/Shipments';
import { gqlShipmentTrackingFormModalId } from '@/api/Queries/local';
import ShipmentAddForm from '@/ui/components/OrderShipments/ShipmentAdd/ShipmentAddForm';

export default function ShipmentEdit({ shipment }) {
    const apolloClient = useApolloClient();
    let { data: allSupportedCarriers } = useQuery(gqlAllSupportedCarriers);
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
        <div>
            <Button size="small" onClick={setVisible}>
                <FormattedMessage defaultMessage="Edit" />
            </Button>

            <Modal
                destroyOnClose
                width="980px"
                bodyStyle={{ height: '230px' }}
                visible={shipmentTrackingFormModalId === shipment.id}
                closable={false}
                onOk={unsetVisible}
                handleCancel={unsetVisible}
                onCancel={unsetVisible}
                content={
                    <p>
                        <FormattedMessage defaultMessage="Some Content" />
                    </p>
                }
                footer={false}
            >
                <ShipmentAddForm
                    visible={shipmentTrackingFormModalId === shipment.id}
                    closeModal={unsetVisible}
                    shipment={shipment}
                    shipmentId={shipment.id}
                    allSupportedCarriers={allSupportedCarriers}
                />
            </Modal>
        </div>
    );
}

ShipmentEdit.propTypes = {
    shipment: PropTypes.object,
};
