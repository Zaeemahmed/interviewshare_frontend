import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Button } from 'antd';
import { useMutation } from '@apollo/react-hooks';
import { gqlUpdateDocument } from '@/api/Mutations/Document';
import { useOrderPermissions } from '@/api/Context/OrderContext';

function ApproveDocument({ document }) {
    const { orderPermission } = useOrderPermissions();
    const [UpdateDocument] = useMutation(gqlUpdateDocument);
    const isDisabled = !permissionToApprove(document, orderPermission);

    const approveDocument = () =>
        UpdateDocument({
            variables: {
                documentId: document.id,
                status: 'ACCEPTED',
            },
        });

    return (
        <Button onClick={approveDocument} disabled={isDisabled} type="primary">
            <FormattedMessage defaultMessage="Approve" />
        </Button>
    );
}

ApproveDocument.propTypes = {
    document: PropTypes.object,
};

const permissionToApprove = (document, orderPermission) => {
    if (document.status === 'ACCEPTED') return false;
    if (document.hasToBeApprovedBy.includes(orderPermission)) return true;
    return false;
};

export default ApproveDocument;
