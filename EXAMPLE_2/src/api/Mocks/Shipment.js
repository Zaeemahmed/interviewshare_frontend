const shipmentMock = {
    __typename: 'ShipmentType',
    id: '7890',
    shipmentName: 'South East Trading Company Shipment',
    status: 'Waiting for Order provider',
    carrierCode: 'carrierCode1234',
    containerNumber: 'containerNumber1234',
    bookingNumber: 'bookingNumber1234',
    blNumber: 'blNumber1234',
    customerDocumentAwbNumber: 'documentAwbNumber1234',
    supplierDocumentAwbNumber: 'documentAwbNumber1234',
    demurrageInformation: 'demurrageInformation1234',
    customerEtd: '2018-06-29',
    containers: [
        {
            id: '123456789',
            name: 'XXXU112345678',
            status: 'Vessel on route to Cape Town',
            currentVessel: 'Matz Maersk',
        },
        {
            id: '0987654',
            name: 'XXXU19876543',
            status: 'Vessel on route to Madagascar',
            currentVessel: 'Hamburg Sud',
        },
    ],
    items: [
        {
            __typename: 'OrderItem',
            id: 'shipmentitem20',
            orderItemReference: '2345678',
            unit: 'KG',
            quantity: 100,
            name: 'Bag o Grain',
            packaging: 'Packaging test',
            order: {
                __typename: 'OrderType',
                id: '6',
            },
            documentTypes: [
                {
                    __typename: 'DocumentTypeType',
                    name: 'Packaging List',
                    id: 'shipmentItemDoctypeID20',
                    relatedItemId: 'shipmentitem20',
                    relatedItemType: 'ITEM',
                    typeFromTemplate: false,
                    documents: [
                        {
                            __typename: 'DocumentType',
                            id: '5',
                            status: 'ACCEPTED',
                            nameSuffix: '',
                            isActive: '',
                            hasToBeUploadedBy: ['supplier_agent', 'supplier'],
                            canBeSeenBy: [
                                'supplier_agent',
                                'supplier',
                                'supply_chain_manager',
                            ],
                            hasToBeApprovedBy: ['supply_chain_manager'],
                            isDeactivatable: true,
                            revisions: [
                                {
                                    __typename: 'DocumentRevisionType',
                                    id: '2',
                                    uploadedBy: {
                                        __typename: 'User',
                                        id: 'V01234',
                                        firstName: 'Max',
                                        lastName: 'Mustermann',
                                    },
                                    file:
                                        'https://storage.googleapis.com/dashport-documents/placeholder-pdf.pdf?Expires=1571151455&GoogleAccessId=gcs-backend%40dashport.iam.gserviceaccount.com&Signature=O16RMMt6qZZfs014o8a%2BiuJG8ea1CcDFthOsHxk9iiNDa%2BzCdCiCKZpWKMrnXYrOrEraoR%2FvTYCp%2BESwFBAvaAlLJIN3h7eCywXTdNIj6LrSUJmLTSKB64Ck6RVmFD2GUFo6bqpu2eWHPrLlIZLS5pSxuC7MRnoEnOEDSO5GWhMx%2Fu69M4A4NEpQ%2F8DDfu5DATtZL7TZ8P1KIjXJjMZhILXCvZbwAKmuz420gXafUl7KtsKFWt56IpwKXEuOs8NgsyDDuxsumBljZuNAY6eKf8yOA5iJjvQbbMnuXYannxBeCzoLNaOMl2SgZyyPpNz%2BhHWDf8YFlRWr5O%2BVGr%2FX8w%3D%3D',
                                    createdAt: '2019-10-08',
                                },
                            ],
                        },
                        {
                            __typename: 'DocumentType',
                            id: '6',
                            status: 'NOT_UPLOADED',
                            nameSuffix: '',
                            isActive: '',
                            hasToBeUploadedBy: ['supplier_agent', 'supplier'],
                            canBeSeenBy: [
                                'supplier_agent',
                                'supplier',
                                'supply_chain_manager',
                            ],
                            hasToBeApprovedBy: ['supply_chain_manager'],
                            isDeactivatable: true,
                            revisions: [
                                {
                                    id: '2',
                                    __typename: 'DocumentRevisionType',
                                    uploadedBy: {
                                        __typename: 'User',
                                        id: 'V01234',
                                        firstName: 'Max',
                                        lastName: 'Mustermann',
                                    },
                                    file:
                                        'https://storage.googleapis.com/dashport-documents/placeholder-pdf.pdf?Expires=1571151455&GoogleAccessId=gcs-backend%40dashport.iam.gserviceaccount.com&Signature=O16RMMt6qZZfs014o8a%2BiuJG8ea1CcDFthOsHxk9iiNDa%2BzCdCiCKZpWKMrnXYrOrEraoR%2FvTYCp%2BESwFBAvaAlLJIN3h7eCywXTdNIj6LrSUJmLTSKB64Ck6RVmFD2GUFo6bqpu2eWHPrLlIZLS5pSxuC7MRnoEnOEDSO5GWhMx%2Fu69M4A4NEpQ%2F8DDfu5DATtZL7TZ8P1KIjXJjMZhILXCvZbwAKmuz420gXafUl7KtsKFWt56IpwKXEuOs8NgsyDDuxsumBljZuNAY6eKf8yOA5iJjvQbbMnuXYannxBeCzoLNaOMl2SgZyyPpNz%2BhHWDf8YFlRWr5O%2BVGr%2FX8w%3D%3D',
                                    createdAt: '2019-10-08',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
    documentTypes: [
        {
            __typename: 'DocumentTypeType',
            name: 'Packaging List',
            id: '3',
            relatedItemId: '1',
            relatedItemType: 'SHIPMENT',
            typeFromTemplate: false,
            documents: [
                {
                    __typename: 'DocumentType',
                    id: '5',
                    status: 'ACCEPTED',
                    nameSuffix: '',
                    isActive: '',
                    hasToBeUploadedBy: ['supplier_agent', 'supplier'],
                    canBeSeenBy: [
                        'supplier_agent',
                        'supplier',
                        'supply_chain_manager',
                    ],
                    hasToBeApprovedBy: ['supply_chain_manager'],
                    isDeactivatable: true,
                    revisions: [
                        {
                            __typename: 'DocumentRevisionType',
                            id: '2',
                            uploadedBy: {
                                __typename: 'User',
                                id: 'V01234',
                                firstName: 'Max',
                                lastName: 'Mustermann',
                            },
                            file:
                                'https://storage.googleapis.com/dashport-documents/placeholder-pdf.pdf?Expires=1571151455&GoogleAccessId=gcs-backend%40dashport.iam.gserviceaccount.com&Signature=O16RMMt6qZZfs014o8a%2BiuJG8ea1CcDFthOsHxk9iiNDa%2BzCdCiCKZpWKMrnXYrOrEraoR%2FvTYCp%2BESwFBAvaAlLJIN3h7eCywXTdNIj6LrSUJmLTSKB64Ck6RVmFD2GUFo6bqpu2eWHPrLlIZLS5pSxuC7MRnoEnOEDSO5GWhMx%2Fu69M4A4NEpQ%2F8DDfu5DATtZL7TZ8P1KIjXJjMZhILXCvZbwAKmuz420gXafUl7KtsKFWt56IpwKXEuOs8NgsyDDuxsumBljZuNAY6eKf8yOA5iJjvQbbMnuXYannxBeCzoLNaOMl2SgZyyPpNz%2BhHWDf8YFlRWr5O%2BVGr%2FX8w%3D%3D',
                            createdAt: '2019-10-08',
                        },
                    ],
                },
                {
                    __typename: 'DocumentType',
                    id: '6',
                    status: 'NOT_UPLOADED',
                    nameSuffix: '',
                    isActive: '',
                    hasToBeUploadedBy: ['supplier_agent', 'supplier'],
                    canBeSeenBy: [
                        'supplier_agent',
                        'supplier',
                        'supply_chain_manager',
                    ],
                    hasToBeApprovedBy: ['supply_chain_manager'],
                    isDeactivatable: true,
                    revisions: [
                        {
                            id: '2',
                            __typename: 'DocumentRevisionType',
                            uploadedBy: {
                                __typename: 'User',
                                id: 'V01234',
                                firstName: 'Max',
                                lastName: 'Mustermann',
                            },
                            file:
                                'https://storage.googleapis.com/dashport-documents/placeholder-pdf.pdf?Expires=1571151455&GoogleAccessId=gcs-backend%40dashport.iam.gserviceaccount.com&Signature=O16RMMt6qZZfs014o8a%2BiuJG8ea1CcDFthOsHxk9iiNDa%2BzCdCiCKZpWKMrnXYrOrEraoR%2FvTYCp%2BESwFBAvaAlLJIN3h7eCywXTdNIj6LrSUJmLTSKB64Ck6RVmFD2GUFo6bqpu2eWHPrLlIZLS5pSxuC7MRnoEnOEDSO5GWhMx%2Fu69M4A4NEpQ%2F8DDfu5DATtZL7TZ8P1KIjXJjMZhILXCvZbwAKmuz420gXafUl7KtsKFWt56IpwKXEuOs8NgsyDDuxsumBljZuNAY6eKf8yOA5iJjvQbbMnuXYannxBeCzoLNaOMl2SgZyyPpNz%2BhHWDf8YFlRWr5O%2BVGr%2FX8w%3D%3D',
                            createdAt: '2019-10-08',
                        },
                    ],
                },
            ],
        },
    ],
};

export default shipmentMock;
