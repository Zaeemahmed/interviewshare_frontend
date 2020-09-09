import React from 'react';
import styled from 'styled-components';
import { Collapse, Row } from 'antd';
import { useOrder } from '@/api/Context/OrderContext';
import DocumentListRow from '../DocumentItem/DocumentListRow';
import AddCustomDocument from '../DocumentListHeader/AddCustomDocument';
import DocumentListHeader from '../DocumentListHeader/DocumentListHeader';
import PanelHeader from '../DocumentListHeader/PanelHeader';

const { Panel } = Collapse;

export default function GeneralOrderDocumentsList() {
    const { order } = useOrder();

    return (
        <StyledCollapse defaultActiveKey={['General Order Documents']}>
            <StyledPanel
                key="General Order Documents"
                header={
                    <PanelHeader
                        title="General Order Documents"
                        relatedItemType="ORDER"
                    />
                }
            >
                <DocumentListHeader
                    relatedItemId={order.id}
                    relatedItemType="ORDER"
                />
                <Row>
                    {order.documentTypes
                        .filter(docType => docType.documents?.length > 0)
                        .map(docType => (
                            <DocumentListRow
                                key={docType.id}
                                documentType={docType}
                            />
                        ))}
                </Row>
                <AddCustomDocument
                    relatedItemType="ORDER"
                    relatedItemId={order.id}
                />
            </StyledPanel>
        </StyledCollapse>
    );
}

const StyledPanel = styled(Panel)`
    border-radius: 8px;
    background-color: #fff;
`;

const StyledCollapse = styled(Collapse)`
    margin-top: 25px;
`;
