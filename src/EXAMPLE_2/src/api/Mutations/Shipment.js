import { gql } from 'apollo-boost';
import { ErrorFragments } from '../Queries/Error';
import { DocumentFragments } from '../Queries/Documents';

export const gqlUpdateShipment = gql`
    mutation(
        $blNumber: String
        $bookingNumber: String
        $carrierCode: String
        $containerNumber: String
        $demurrageInformation: String
        $customerDocumentAwbNumber: String
        $supplierDocumentAwbNumber: String
        $shipmentId: ID!
        $shipmentName: String
        $customerEtd: Date
        $orderItemIds: [ID]
    ) {
        updateShipment(
            blNumber: $blNumber
            bookingNumber: $bookingNumber
            carrierCode: $carrierCode
            containerNumber: $containerNumber
            demurrageInformation: $demurrageInformation
            customerDocumentAwbNumber: $customerDocumentAwbNumber
            supplierDocumentAwbNumber: $supplierDocumentAwbNumber
            shipmentId: $shipmentId
            shipmentName: $shipmentName
            customerEtd: $customerEtd
            orderItemIds: $orderItemIds
        ) {
            shipment {
                id
                status
                shipmentName
                blNumber
                bookingNumber
                carrierCode
                containerNumber
                demurrageInformation
                customerDocumentAwbNumber
                supplierDocumentAwbNumber
                customerEtd
                items {
                    id
                    name
                    documentTypes {
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
                }
                documentTypes {
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

export const gqlDeleteShipment = gql`
    mutation($shipmentId: ID!) {
        deleteShipment(shipmentId: $shipmentId) {
            success
            error {
                ...FragmentMutationError
            }
        }
    }
    ${ErrorFragments.error}
`;

export const gqlCreateShipment = gql`
    mutation(
        $blNumber: String
        $bookingNumber: String
        $carrierCode: String
        $containerNumber: String
        $customerDocumentAwbNumber: String
        $customerEtd: Date
        $demurrageInformation: String
        $message: String
        $orderId: ID!
        $orderItemIds: [ID]
        $shipmentName: String
        $supplierDocumentAwbNumber: String
    ) {
        createShipment(
            blNumber: $blNumber
            bookingNumber: $bookingNumber
            carrierCode: $carrierCode
            containerNumber: $containerNumber
            customerDocumentAwbNumber: $customerDocumentAwbNumber
            customerEtd: $customerEtd
            demurrageInformation: $demurrageInformation
            message: $message
            orderId: $orderId
            orderItemIds: $orderItemIds
            shipmentName: $shipmentName
            supplierDocumentAwbNumber: $supplierDocumentAwbNumber
        ) {
            shipment {
                id
                status
                shipmentName
                blNumber
                bookingNumber
                carrierCode
                containerNumber
                demurrageInformation
                customerDocumentAwbNumber
                supplierDocumentAwbNumber
                customerEtd
                items {
                    id
                    orderItemReference
                    order {
                        id
                    }
                    unit
                    quantity
                    name
                    documentTypes {
                        id
                        name
                        relatedItemId
                        relatedItemType
                        typeFromTemplate
                        documents {
                            id
                            isActive
                            isDeactivatable
                            canBeSeenBy
                            hasToBeUploadedBy
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
                    }
                }
                documentTypes {
                    id
                    name
                    relatedItemId
                    relatedItemType
                    typeFromTemplate
                    documents {
                        id
                        isActive
                        isDeactivatable
                        canBeSeenBy
                        hasToBeUploadedBy
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
