import React from 'react';
import { useOrder } from '@/api/Context/OrderContext';
import GeneralOrderDocumentsList from './GeneralOrderDocumentsList';
import ShipmentDocumentsList from './ShipmentDocumentsList';
import DocumentListFooter from './DocumentListFooter';

function DocumentList() {
    const { order } = useOrder();
    const hasShipments = order.shipments?.length > 0;

    return (
        <div className="DocumentList">
            <GeneralOrderDocumentsList />
            {hasShipments && <ShipmentDocumentsList />}
            <DocumentListFooter />
        </div>
    );
}

export default DocumentList;
