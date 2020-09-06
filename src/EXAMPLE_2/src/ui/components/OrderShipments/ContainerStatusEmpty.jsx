import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

function ContainerStatusEmpty() {
    return (
        <Div>
            <P>
                <FormattedMessage defaultMessage="No Shipment Tracking info available yet. Please check back later." />
            </P>
        </Div>
    );
}

const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 150px;
`;

const P = styled.p`
    font-style: italic;
    margin-top: 10px;
    margin-bottom: 0px;
`;

export default ContainerStatusEmpty;
