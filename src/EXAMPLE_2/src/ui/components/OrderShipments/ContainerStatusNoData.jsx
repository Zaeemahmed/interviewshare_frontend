import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Col } from 'antd';

function ContainerStatusNoData() {
    return (
        <Col span={6}>
            <Div>
                <div>
                    <FormattedMessage defaultMessage="The provided tracking info is complete but we have not received any tracking updates from the tracking provider yet." />
                </div>
            </Div>
        </Col>
    );
}

const Div = styled.div`
    border: 1px solid green;
    border-radius: 8px;
    padding: 16px;
    min-height: 120px;
`;

export default ContainerStatusNoData;
