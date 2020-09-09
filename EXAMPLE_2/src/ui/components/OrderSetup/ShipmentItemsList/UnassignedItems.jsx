import React from 'react';
import { PropTypes } from 'prop-types';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { FormattedMessage } from 'react-intl';
import { Card } from '@/ui/atoms/Base';
import ShipmentItemsList from './ShipmentItemsList';

export default function UnassignedItems({ order }) {
    //Only show order.items that are not in shipments[].items[]
    let finalItems = order.items;
    if (order.shipments?.length > 0) {
        finalItems = finalItems.filter(item => {
            for (let s = 0; s < order.shipments.length; s++) {
                for (let i = 0; i < order.shipments[s].items.length; i++) {
                    if (order.shipments[s].items[i].id === item.id) {
                        return false; //Remove from list
                    }
                }
            }
            return true; //Keep item in list
        });
    }

    return (
        <div style={{ marginBottom: '30px' }} id={order.id}>
            <Card
                display="flex"
                justifyContent="space-between"
                m="0px 30px 10px 30px"
                p="10px 10px 10px 30px"
            >
                <h3>
                    <FormattedMessage defaultMessage="Unassigned items" />
                </h3>
            </Card>

            <DndProvider backend={HTML5Backend}>
                <ShipmentItemsList
                    key={order.id}
                    items={finalItems}
                    itemId={order.id}
                />
            </DndProvider>
        </div>
    );
}

UnassignedItems.propTypes = {
    order: PropTypes.object,
};
