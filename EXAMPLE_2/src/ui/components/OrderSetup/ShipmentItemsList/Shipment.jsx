import React from 'react';
import { PropTypes } from 'prop-types';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { Card } from '@/ui/atoms/Base';
import ShipmentItemsList from '@/ui/components/OrderSetup/ShipmentItemsList/ShipmentItemsList';
import ShipmentEdit from '@/ui/components/OrderSetup/ShipmentItemsList/ShipmentEdit';

export default function Shipment({ shipment, index, saveShipmentItems }) {
    return (
        <div style={{ marginBottom: '30px' }} id={shipment.id}>
            <Card
                display="flex"
                justifyContent="space-between"
                m="0px 30px 10px 30px"
                p="10px 10px 10px 30px"
            >
                <h3>{shipment.shipmentName || 'Shipment ' + index}</h3>
                <ShipmentEdit shipment={shipment} />
            </Card>

            <DndProvider backend={HTML5Backend}>
                <ShipmentItemsList
                    key={shipment.id}
                    items={shipment.items}
                    itemId={shipment.id}
                    addItem={saveShipmentItems}
                />
            </DndProvider>
        </div>
    );
}

Shipment.propTypes = {
    shipment: PropTypes.object,
    index: PropTypes.number,
    saveShipmentItems: PropTypes.func,
};
