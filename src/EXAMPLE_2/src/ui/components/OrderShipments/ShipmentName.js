import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Tooltip } from 'antd';
import IconWarning from '@/ui/atoms/Icons/IconWarning';

function ShipmentName({ shipment, index }) {
    if (shipment.shipmentName) return shipment.shipmentName;

    return (
        <Tooltip
            placement="top"
            title={
                <FormattedMessage defaultMessage="This is an auto generated name as no name was set yet." />
            }
        >
            <FormattedMessage defaultMessage="Shipment" /> {index + 1}
            <IconWarning style={{ marginLeft: 8 }} />
        </Tooltip>
    );
}

export default ShipmentName;
