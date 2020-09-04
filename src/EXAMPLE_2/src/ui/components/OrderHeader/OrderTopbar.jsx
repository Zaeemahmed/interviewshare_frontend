import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import { useOrderPermissions } from '@/api/Context/OrderContext';
import OrderManagement from '../OrderManagement/OrderManagement';
import OrderTopbarTitle from './OrderTopbarTitle';

function OrderTopbar() {
    let { isSupplyChainManager } = useOrderPermissions();

    return (
        <StyledRow>
            <Col span={16}>
                <OrderTopbarTitle />
            </Col>
            <Col
                span={8}
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                }}
            >
                {isSupplyChainManager && <OrderManagement />}
            </Col>
        </StyledRow>
    );
}

const StyledRow = styled(Row)`
    margin-top: 30px;
    margin-bottom: 20px;
`;

export default OrderTopbar;
