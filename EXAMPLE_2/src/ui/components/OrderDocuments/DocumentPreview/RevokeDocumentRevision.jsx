import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, useIntl } from 'react-intl';
import { Button, Modal } from 'antd';
import { useMutation } from '@apollo/react-hooks';
import { revokeDocumentRevision } from '@/api/Mutations/Document';
import { useCurrentUser } from '@/api/Context/UserContext';

function RevokeDocumentRevision({ document, revision }) {
    const intl = useIntl();
    const currentUser = useCurrentUser();
    const [revoke] = useMutation(revokeDocumentRevision);

    // users can only revoke their own documents
    if (revision.uploadedBy.id !== currentUser.id) return null;
    if (revision.status === 'REVOKED') return null;

    const onClick = () =>
        Modal.confirm({
            title: intl.formatMessage({
                defaultMessage: 'Are you sure you want to hide this version?',
            }),
            content: intl.formatMessage({
                defaultMessage:
                    'Hiding this version of the document means it will no longer be visible to anyone. This cannot be undone.',
            }),
            okText: intl.formatMessage({ defaultMessage: 'Hide' }),
            okType: 'danger',
            onOk() {
                revoke({
                    variables: {
                        documentId: document.id,
                        revisionId: revision.id,
                    },
                });
            },
        });

    return (
        <Button onClick={onClick}>
            <FormattedMessage defaultMessage="Hide Version" />
        </Button>
    );
}

RevokeDocumentRevision.propTypes = {
    document: PropTypes.object,
};

export default RevokeDocumentRevision;
