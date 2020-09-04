import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Checkbox } from 'antd';
import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { gqlRequiredDocumentChanges } from '@/api/Queries/local';

function DocumentRequired({ document, documentType }) {
    const apolloClient = useApolloClient();

    let { data: requiredDocumentChanges } = useQuery(
        gqlRequiredDocumentChanges
    );
    requiredDocumentChanges =
        (requiredDocumentChanges &&
            requiredDocumentChanges.requiredDocumentChanges) ||
        '[]';

    const toggleRequired = e => {
        let newChanges = [];
        if (requiredDocumentChanges && requiredDocumentChanges.length > 0) {
            newChanges = JSON.parse(requiredDocumentChanges);
        }

        newChanges = newChanges.filter(item => {
            if (
                item.documentId === document.id &&
                item.documentTypeId === documentType.id
            ) {
                return false;
            }
            return true;
        });

        newChanges.push({
            documentId: document.id,
            documentTypeId: documentType.id,
            isActive: e.target.checked,
            relatedItemType: documentType.relatedItemType,
            relatedItemId: documentType.relatedItemId,
        });

        apolloClient.writeData({
            data: { requiredDocumentChanges: JSON.stringify(newChanges) },
        });
    };

    const hasRevision = document.revisions && document.revisions.length > 0;

    return (
        <CheckboxDiv>
            <Checkbox
                disabled={!document.isDeactivatable}
                defaultChecked={document.isActive || hasRevision}
                onChange={toggleRequired}
            ></Checkbox>
        </CheckboxDiv>
    );
}

DocumentRequired.propTypes = {
    document: PropTypes.object,
    documentType: PropTypes.object,
    requiredDocumentChanges: PropTypes.string,
};

const CheckboxDiv = styled.div`
    width: 35px;
    margin-left: 5px;
`;

export default DocumentRequired;
