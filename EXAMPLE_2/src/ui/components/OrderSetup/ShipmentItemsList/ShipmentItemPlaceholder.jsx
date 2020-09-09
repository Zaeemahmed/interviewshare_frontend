import React from 'react';
import { Col, Row } from 'antd';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

export default function ShipmentItemPlaceholder() {
    return (
        <Container>
            <Row>
                <Col span={4}></Col>
                <Col>
                    <FormattedMessage defaultMessage="Drag products here to add them to the shipment" />
                </Col>
            </Row>
        </Container>
    );
}

const Container = styled.div`
    border: 1px dashed #c8c8c8;
    border-radius: 10px;
    padding: 10px 10px 10px 30px;
    margin: 10px 30px 10px 60px;
    background: #f9f9f9;
    display: flex;
    justify-content: space-between;
    .ant-row {
        display: flex;
        width: 100%;
    }
    .ant-col {
        display: flex;
        align-items: center;
    }
`;
