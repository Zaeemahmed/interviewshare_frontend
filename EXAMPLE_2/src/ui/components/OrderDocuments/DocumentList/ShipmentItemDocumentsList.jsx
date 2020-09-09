import React from 'react';
import PropTypes from 'prop-types';
import { FormattedNumber } from 'react-intl';
import styled from 'styled-components';
import { Collapse, Row } from 'antd';
import { Flex, Text } from '@/ui/atoms/Base';
import PanelHeader from '../DocumentListHeader/PanelHeader';
import DocumentListHeader from '../DocumentListHeader/DocumentListHeader';
import DocumentListRow from '../DocumentItem/DocumentListRow';
import AddCustomDocument from '../DocumentListHeader/AddCustomDocument';

export default function ShipmentItemDocumentsList({ shipment }) {
    return (
        <StyledCollapse defaultActiveKey={[]}>
            {shipment.items.map(shipmentItem => (
                <StyledPanel
                    key={shipmentItem.id}
                    header={
                        <PanelHeader
                            title={
                                <PanelHeaderTitleForItem
                                    shipmentItem={shipmentItem}
                                />
                            }
                            relatedItemType="ITEM"
                        />
                    }
                >
                    <DocumentListHeader
                        relatedItemId={shipmentItem.id}
                        relatedItemType="ITEM"
                        shipmentId={shipment.id}
                        style={{
                            backgroundColor: '#FAFAFA',
                            marginLeft: '-16px',
                            marginRight: '-16px',
                            padding: '10px',
                        }}
                    />
                    <Row>
                        {shipmentItem.documentTypes.map(shipmentItemDocType => {
                            if (!shipmentItemDocType.documents?.length)
                                return '';
                            return (
                                <DocumentListRow
                                    key={shipmentItemDocType.id}
                                    documentType={shipmentItemDocType}
                                    shipmentId={shipment.id}
                                />
                            );
                        })}
                    </Row>
                    <AddCustomDocument
                        relatedItemType="ITEM"
                        relatedItemId={shipmentItem.id}
                    />
                </StyledPanel>
            ))}
        </StyledCollapse>
    );
}

ShipmentItemDocumentsList.propTypes = {
    shipment: PropTypes.object,
};

const PanelHeaderTitleForItem = ({ shipmentItem }) => {
    return (
        <Flex as="span">
            <Text color="#A5A5A5">
                <FormattedNumber value={shipmentItem.orderItemReference} />
            </Text>
            <Text flex="1" fontWeight="bold" mx={16} ellipsis>
                {shipmentItem.name}
            </Text>
            <Text color="#595959" textAlign="right">
                <FormattedNumber value={shipmentItem.quantity} />{' '}
                <Text color="#A5A5A5">{shipmentItem.unit}</Text>
            </Text>
        </Flex>
    );
};

PanelHeaderTitleForItem.propTypes = {
    shipmentItem: PropTypes.object,
};

const StyledPanel = styled(Collapse.Panel)`
    border-radius: 8px;
    background-color: #fff;

    p {
        width: 100%;
    }
`;

const StyledCollapse = styled(Collapse)`
    margin-top: 50px;
    background-color: #fff;
`;
