import { gql } from 'apollo-boost';

export const OrderFragments = {
    orderEvents: gql`
        fragment FragmentOrderEventsType on OrderEventUnionType {
            ... on CommentType {
                id
                message
                eventType
                createdAt
                user {
                    __typename
                    id
                    firstName
                    lastName
                }
                answerTo {
                    id
                }
            }
            ... on OrderDataUpdateType {
                id
                eventType
                message
                createdAt
            }
            ... on DocumentUpdateType {
                id
                eventType
                createdAt
                revision {
                    id
                    file
                    createdAt
                    uploadedBy {
                        id
                        firstName
                        lastName
                    }
                    document {
                        isActive
                        isDeactivatable
                        canBeSeenBy
                        hasToBeUploadedBy
                        hasToBeApprovedBy
                        status
                        documentType {
                            id
                            name
                        }
                    }
                }
            }
            ... on TrackingUpdateType {
                id
                eventType
                createdAt
                update {
                    id
                    status
                    createdAt
                }
            }
        }
    `,
};

export const gqlAvailableCommentReaders = gql`
    query availableCommentReaders($orderId: ID) {
        availableCommentReaders(orderId: $orderId) {
            role
            roleVerbose
            team {
                id
                name
                isActive
                created
                modified
                slug
            }
        }
    }
`;

export const gqlSearchOrders = gql`
    query searchOrders($searchTerm: String, $showSupplier: Boolean!) {
        searchOrders(searchTerm: $searchTerm) {
            id
            orderReference
            supplierOrderReference @include(if: $showSupplier)
            customerOrderReference
            supplier @include(if: $showSupplier) {
                id
                name
            }
            customer {
                id
                name
            }
            shipments {
                id
                customerEtd
            }
            items {
                id
                unit
                quantity
                name
                orderItemReference
                purchasePrice @include(if: $showSupplier) {
                    priceCurrency
                    price
                }
                salesPrice {
                    priceCurrency
                    price
                }
            }
        }
    }
`;

export const gqlAllOrders = gql`
    query allOrders($showSupplier: Boolean!) {
        allOrders {
            id
            orderReference
            supplierOrderReference @include(if: $showSupplier)
            customerOrderReference
            supplier @include(if: $showSupplier) {
                id
                name
            }
            customer {
                id
                name
            }
            shipments {
                id
                customerEtd
            }
            items {
                id
                unit
                quantity
                name
                orderItemReference
                purchasePrice @include(if: $showSupplier) {
                    priceCurrency
                    price
                }
                salesPrice {
                    priceCurrency
                    price
                }
            }
        }
    }
`;

export const gqlOrderById = gql`
    query orderById(
        $orderId: ID
        $showSupplier: Boolean!
        $showCustomer: Boolean!
        $showSupplyChainManager: Boolean!
    ) {
        orderById(orderId: $orderId) {
            id
            orderReference
            supplierOrderReference @include(if: $showSupplier)
            customerOrderReference
            supplier @include(if: $showSupplier) {
                id
                name
                companyReference
            }
            customer @include(if: $showCustomer) {
                id
                name
                companyReference
            }
            supplyChainManagerUser @include(if: $showSupplyChainManager) {
                id
                firstName
                lastName
                email
            }
            customerTeam @include(if: $showSupplyChainManager) {
                id
                name
            }
            customerAgentTeam @include(if: $showSupplyChainManager) {
                id
                name
            }
            supplierTeam @include(if: $showSupplyChainManager) {
                id
                name
            }
            supplierAgentTeam @include(if: $showSupplyChainManager) {
                id
                name
            }
            shipments {
                id
                shipmentName
                status
                carrierCode
                containerNumber
                bookingNumber
                blNumber
                customerDocumentAwbNumber
                supplierDocumentAwbNumber
                demurrageInformation
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
                    packaging
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
                                status
                                createdAt
                                uploadedBy {
                                    id
                                    firstName
                                    lastName
                                }
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
                            status
                            createdAt
                            uploadedBy {
                                id
                                firstName
                                lastName
                            }
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
                order {
                    id
                }
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
                        status
                        createdAt
                        uploadedBy {
                            id
                            firstName
                            lastName
                        }
                    }
                }
            }
            items {
                id
                order {
                    id
                }
                name
                incotermsSupplier @include(if: $showSupplier)
                incotermsCustomer
                paymentTermsSupplier @include(if: $showSupplier)
                paymentTermsCustomer
                quantity
                packaging
                unit
                orderItemReference
                purchasePrice @include(if: $showSupplier) {
                    priceAmount
                    priceCurrency
                    pricePerUnitAmount
                    pricePerUnitCurrency
                }
                salesPrice {
                    priceAmount
                    priceCurrency
                    pricePerUnitAmount
                    pricePerUnitCurrency
                }
            }
            orderEvents {
                ...FragmentOrderEventsType
            }
        }
    }
    ${OrderFragments.orderEvents}
`;

export const gqlOrderByIdOrderEvents = gql`
    query orderById(
        $orderId: ID
        $showSupplier: Boolean!
        $showCustomer: Boolean!
        $showSupplyChainManager: Boolean!
    ) {
        orderById(orderId: $orderId) {
            id
            orderReference
            supplierOrderReference @include(if: $showSupplier)
            customerOrderReference
            supplier @include(if: $showSupplier) {
                id
                name
                companyReference
            }
            customer @include(if: $showCustomer) {
                id
                name
                companyReference
            }
            supplyChainManagerUser @include(if: $showSupplyChainManager) {
                id
                firstName
                lastName
                email
            }
            customerTeam @include(if: $showSupplyChainManager) {
                id
                name
            }
            customerAgentTeam @include(if: $showSupplyChainManager) {
                id
                name
            }
            supplierTeam @include(if: $showSupplyChainManager) {
                id
                name
            }
            supplierAgentTeam @include(if: $showSupplyChainManager) {
                id
                name
            }
            orderEvents {
                ...FragmentOrderEventsType
            }
        }
    }
    ${OrderFragments.orderEvents}
`;
