import React from 'react';
import { useApolloClient, useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Button, Col, Row } from 'antd';
import { gqlEditOrderDocument } from '@/api/Queries/local';
import EditRequiredDocumentsDone from '../DocumentListHeader/EditRequiredDocumentsDone';

export default function DocumentListFooter() {
    let { data: editOrderDocument } = useQuery(gqlEditOrderDocument);
    editOrderDocument =
        (editOrderDocument && editOrderDocument.editOrderDocument) || false;

    const apolloClient = useApolloClient();

    const closeEditMode = e => {
        e.stopPropagation();
        apolloClient.writeData({
            data: { requiredDocumentChanges: JSON.stringify([]) },
        });
        apolloClient.writeData({ data: { editOrderDocument: false } });
    };
    if (!editOrderDocument) {
        return null;
    }
    return (
        <Footer id="DocumentListFooter">
            <FooterRow>
                <Col span={10}>
                    <FormattedMessage defaultMessage="You are currently editing the list of required documents" />
                </Col>
                <Col span={14} style={{ textAlign: 'right' }}>
                    <Button
                        size="small"
                        style={{ marginRight: '20px' }}
                        onClick={closeEditMode}
                    >
                        <FormattedMessage defaultMessage="Cancel" />
                    </Button>
                    <EditRequiredDocumentsDone />
                </Col>
            </FooterRow>
        </Footer>
    );
}
const Footer = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 40px;
    background: white;
    line-height: 40px;
    box-shadow: 0px -3px 5px 0px rgba(238, 238, 238, 0.75);
    z-index: 100;
`;

const FooterRow = styled(Row)`
    max-width: 1200px;
    margin: auto;
    padding: 0 30px;
`;
