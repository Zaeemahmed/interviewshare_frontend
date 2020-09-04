import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { useOrderPermissions } from '@/api/Context/OrderContext';

function DocumentStatus({ status = 'NOT_UPLOADED', orderDocument }) {
    const { orderPermission } = useOrderPermissions();

    return (
        <StatusDiv>
            <div>{getText(status, orderDocument, orderPermission)}</div>
            <div className="DocumentStatus">
                <StyledCircle status={status} />
            </div>
        </StatusDiv>
    );
}

const getText = (status, orderDocument, orderPermission) => {
    switch (status) {
        case 'NO_APPROVAL_NEEDED':
            return <FormattedMessage defaultMessage="Uploaded" />;
        case 'ACCEPTED':
            return <FormattedMessage defaultMessage="Approved" />;
        case 'PENDING':
            if (!orderDocument) {
                return (
                    <FormattedMessage defaultMessage="Waiting for approval" />
                );
            }
            if (orderDocument.hasToBeApprovedBy.includes(orderPermission)) {
                return (
                    <FormattedMessage defaultMessage="Waiting for your approval" />
                );
            }
            return <FormattedMessage defaultMessage="Waiting for approval" />;
        case 'UPLOAD_USER':
            return (
                <FormattedMessage defaultMessage="Waiting for your upload" />
            );

        default:
            return <FormattedMessage defaultMessage="Waiting for upload" />;
    }
};

const getStateColor = status => {
    switch (status) {
        case 'ACCEPTED':
        case 'NO_APPROVAL_NEEDED':
            return '#52c41a';
        case 'PENDING':
            return '#C1C1C1';
        default:
            return '#FFA500';
    }
};

DocumentStatus.propTypes = {
    order: PropTypes.object,
    document: PropTypes.object,
    status: PropTypes.string,
};

const StatusDiv = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-evenly;
`;

const StyledCircle = styled.span`
    height: 10px;
    width: 10px;
    background-color: ${props => getStateColor(props.status)};
    border-radius: 50%;
    display: inline-block;
    margin-right: 10px;
`;

export default DocumentStatus;
