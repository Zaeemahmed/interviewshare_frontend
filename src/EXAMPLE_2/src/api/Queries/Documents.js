import { gql } from 'apollo-boost';

export const DocumentFragments = {
    documentType: gql`
        fragment FragmentDocumentType on DocumentType {
            id
            documentType {
                name
                relatedItemObjectId
                typeFromTemplate
                order {
                    id
                }
                documents {
                    id
                    nameSuffix
                    isActive
                    isDeactivatable
                    hasToBeUploadedBy
                    canBeSeenBy
                    hasToBeApprovedBy
                    status
                    revisions {
                        id
                        file
                        uploadedBy {
                            id
                            firstName
                            lastName
                        }
                        createdAt
                    }
                }
                relatedItemType
                relatedItemId
            }
            nameSuffix
            isActive
            isDeactivatable
            hasToBeUploadedBy
            canBeSeenBy
            hasToBeApprovedBy
            status
            revisions {
                id
                file
                uploadedBy {
                    id
                    firstName
                    lastName
                }
                createdAt
            }
        }
    `,
};

export const gqlFilterDocumentTypes = gql`
    query($orderId: ID!) {
        filterDocumentTypes(orderId: $orderId) {
            id
            name
            relatedItemType
            typeFromTemplate
            documents {
                ...FragmentDocumentType
            }
        }
    }
    ${DocumentFragments.documentType}
`;

// currently not used
// export const gqlDocumentTypeById = gql`
//     query($documentTypeId: ID!) {
//         documentTypeById(documentTypeId: $documentTypeId) {
//             id
//             name
//             relatedItemObjectId
//             typeFromTemplate
//             documents {
//                 ...FragmentDocumentType
//             }
//             relatedItemType
//             relatedItemId
//         }
//     }
//     ${DocumentFragments.documentType}
// `;
