import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Button } from 'antd';
import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { gqlEditOrderDocument } from '@/api/Queries/local';
import { useOrderPermissions } from '@/api/Context/OrderContext';
import EditRequiredDocumentsDone from './EditRequiredDocumentsDone';

function EditRequiredDocuments({ relatedItemType }) {
    const apolloClient = useApolloClient();
    const { isCustomer } = useOrderPermissions();
    let { data: editOrderDocument } = useQuery(gqlEditOrderDocument);
    editOrderDocument =
        (editOrderDocument && editOrderDocument.editOrderDocument) || false;

    return (
        <Fragment>
            {!editOrderDocument ? (
                <StyledButton
                    onClick={e => {
                        e.stopPropagation();
                        e.preventDefault();
                        apolloClient.writeData({
                            data: { editOrderDocument: true },
                        });
                    }}
                >
                    {relatedItemType === 'SHIPMENT' ? (
                        isCustomer ? (
                            <FormattedMessage defaultMessage="Edit documents" />
                        ) : (
                            <FormattedMessage defaultMessage="Edit documents & AWB" />
                        )
                    ) : (
                        <FormattedMessage defaultMessage="Edit documents required for this order" />
                    )}
                </StyledButton>
            ) : (
                <EditRequiredDocumentsDone />
            )}
        </Fragment>
    );
}

EditRequiredDocuments.propTypes = {
    relatedItemType: PropTypes.string,
};

const StyledButton = styled(Button)`
    //width: 325px;
`;

export default EditRequiredDocuments;
