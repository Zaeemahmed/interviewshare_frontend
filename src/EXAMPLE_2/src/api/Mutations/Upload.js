import { gql } from 'apollo-boost';

export const gqlUploadFileMutation = gql`
    mutation UploadFile($file: Upload!) {
        uploadFile(file: $file) {
            success
        }
    }
`;

export const gqlAddDocumentRevision = gql`
    mutation addDocumentRevision($documentId: ID!, $file: Upload!) {
        addDocumentRevision(documentId: $documentId, file: $file) {
            success
            documentRevision {
                id
                document {
                    id
                }
                file
                uploadedBy {
                    id
                    firstName
                    lastName
                }
                createdAt
            }
            error {
                __typename
                ... on ValidationErrors {
                    validationErrors {
                        field
                        messages
                    }
                }
                ... on ExecutionError {
                    errorMessage
                }
            }
        }
    }
`;
