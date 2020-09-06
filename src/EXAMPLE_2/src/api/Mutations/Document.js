import { gql } from 'apollo-boost';
import { ErrorFragments } from '../Queries/Error';
import { DocumentFragments } from '../Queries/Documents';

export const gqlUpdateDocument = gql`
    mutation(
        $documentId: ID!
        $isActive: Boolean
        $status: DocumentStatusType
    ) {
        updateDocument(
            documentId: $documentId
            isActive: $isActive
            status: $status
        ) {
            document {
                id
                status
                isActive
            }
        }
    }
`;

export const revokeDocumentRevision = gql`
    mutation($documentId: ID!, $revisionId: ID!) {
        revokeDocumentRevision(
            documentId: $documentId
            revisionId: $revisionId
        ) {
            documentRevision {
                id
                file
                status
                document {
                    id
                    status
                }
            }
            success
            error {
                ...FragmentMutationError
            }
        }
    }
    ${ErrorFragments.error}
`;

export const gqlCreateDocumentTypeFromTemplate = gql`
    mutation($documentTypeTemplateId: ID!, $orderId: ID!, $relatedItemId: ID!) {
        createDocumentTypeFromTemplate(
            documentTypeTemplateId: $documentTypeTemplateId
            orderId: $orderId
            relatedItemId: $relatedItemId
        ) {
            documentType {
                id
                name
                relatedItemId
                relatedItemType
                typeFromTemplate
                order {
                    id
                }
                documents {
                    ...FragmentDocumentType
                }
            }
            success
            error {
                ...FragmentMutationError
            }
        }
    }
    ${DocumentFragments.documentType}
    ${ErrorFragments.error}
`;

export const gqlCreateDocumentTypeCustom = gql`
    mutation(
        $name: String!
        $relatedItemId: ID!
        $relatedItemType: DocumentTypeRelatedItemType!
    ) {
        createDocumentTypeCustom(
            name: $name
            relatedItemId: $relatedItemId
            relatedItemType: $relatedItemType
        ) {
            documentType {
                id
                name
                relatedItemId
                relatedItemType
                typeFromTemplate
                order {
                    id
                }
                documents {
                    ...FragmentDocumentType
                }
            }
            success
            error {
                ...FragmentMutationError
            }
        }
    }
    ${DocumentFragments.documentType}
    ${ErrorFragments.error}
`;

export const gqlDeleteDocumentType = gql`
    mutation($documentTypeId: ID!) {
        deleteDocumentType(documentTypeId: $documentTypeId) {
            success
            error {
                ...FragmentMutationError
            }
        }
    }
    ${ErrorFragments.error}
`;
