import React from 'react';
import styled from 'styled-components';
import { Collapse, Row } from 'antd';
import { useOrder } from '@/api/Context/OrderContext';
import PanelHeader from '../DocumentListHeader/PanelHeader';
import DocumentListRow from '../DocumentItem/DocumentListRow';
import AddCustomDocument from '../DocumentListHeader/AddCustomDocument';
import DocumentListHeader from '../DocumentListHeader/DocumentListHeader';
import PanelHeaderTitleForShipment from '../DocumentListHeader/PanelHeaderTitleForShipment';
import ShipmentItemDocumentsList from './ShipmentItemDocumentsList';

const { Panel } = Collapse;

export default function ShipmentDocumentsList() {
    const { order } = useOrder();

    return (
        <StyledCollapse defaultActiveKey={order.shipments.map(s => s.id)}>
            {order.shipments.map((shipment, index) => (
                <StyledPanel
                    key={shipment.id}
                    header={
                        <PanelHeader
                            relatedItemType="SHIPMENT"
                            title={
                                <PanelHeaderTitleForShipment
                                    index={index}
                                    shipment={shipment}
                                />
                            }
                        />
                    }
                >
                    <DocumentListHeader
                        relatedItemId={shipment.id}
                        relatedItemType="SHIPMENT"
                    />
                    <Row>
                        {shipment.documentTypes.map(documentType => {
                            if (!documentType.documents?.length) return '';
                            return (
                                <DocumentListRow
                                    key={documentType.id}
                                    documentType={documentType}
                                />
                            );
                        })}
                    </Row>
                    <AddCustomDocument
                        relatedItemType="SHIPMENT"
                        relatedItemId={shipment.id}
                    />

                    {/*SHIPMENT-ITEM DOCUMENTS*/}
                    {shipment?.items && (
                        <ShipmentItemDocumentsList shipment={shipment} />
                    )}
                </StyledPanel>
            ))}
        </StyledCollapse>
    );
}

const StyledPanel = styled(Panel)`
    border-radius: 8px;
    background-color: #fff;
`;

const StyledCollapse = styled(Collapse)`
    margin-top: 24px !important;
`;
