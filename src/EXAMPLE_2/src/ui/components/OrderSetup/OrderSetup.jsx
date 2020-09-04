import React from 'react';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import { useOrder } from '@/api/Context/OrderContext';
import { gqlUpdateShipment } from '@/api/Mutations/Shipment';
import { gqlOrderById } from '@/api/Queries/Orders';
import ShipmentAdd from '@/ui/components/OrderSetup/ShipmentItemsList/ShipmentAdd';
import Shipment from '@/ui/components/OrderSetup/ShipmentItemsList/Shipment';
import UnassignedItems from '@/ui/components/OrderSetup/ShipmentItemsList/UnassignedItems';

export default function OrderSetup() {
    const { order, permissions } = useOrder();
    const { shipments } = order;
    const { showCustomer, showSupplier, isSupplyChainManager } = permissions;
    const apolloClient = useApolloClient();
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

            let newOrder = {
                ...orderCache.orderById,
            };

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

    const saveShipmentItems = (ids, shipmentId) => {
        updateShipment({
            variables: {
                shipmentId: shipmentId,
                orderItemIds: ids,
            },
        });
    };
    return (
        <div
            style={{ paddingTop: '30px', height: '700px', overflow: 'scroll' }}
        >
            <UnassignedItems order={order} />
            {shipments.map((shipment, index) => {
                return (
                    <Shipment
                        key={shipment.id}
                        shipment={shipment}
                        index={index}
                        saveShipmentItems={saveShipmentItems}
                    />
                );
            })}
            <ShipmentAdd />
        </div>
    );
}
