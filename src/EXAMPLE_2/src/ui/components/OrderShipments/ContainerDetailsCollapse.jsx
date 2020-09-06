import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Collapse } from 'antd';
import { Text } from '@/ui/atoms/Base';
import IconExpand from '@/ui/atoms/Icons/IconExpand';
import ContainerDetails from './ContainerDetails';

const StyledCollapse = styled(Collapse)`
    &.ant-collapse {
        border-top: 0;
        border-radius: 0 0 8px 8px;
    }
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
`;

const StyledPanel = styled(Collapse.Panel)`
    background-color: #fff;
    border-radius: 8px;
`;

function ContainerDetailsCollapse({ shipment, container }) {
    return (
        <StyledCollapse expandIcon={props => IconExpand(props)}>
            <StyledPanel
                key="2"
                header={<Text fontWeight="bold">Details</Text>}
            >
                <ContainerDetails shipment={shipment} container={container} />
            </StyledPanel>
        </StyledCollapse>
    );
}

ContainerDetailsCollapse.propTypes = {
    container: PropTypes.object,
    shipment: PropTypes.object,
};

export default ContainerDetailsCollapse;
