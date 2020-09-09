import {
    gqlOrderSearch,
    gqlEditOrderDocument,
    gqlRequiredDocumentChanges,
    gqlShipmentChanges,
} from '../Queries/local';

export const orderSearchMock = {
    orderSearch: '',
};

export const editOrderDocumentMock = {
    editOrderDocument: false,
};

export const requiredDocumentChangesMock = {
    requiredDocumentChanges: '[]',
};

export const shipmentChangesMock = {
    shipmentChanges: '[]',
};

export const orderSearchMockRequest = {
    request: {
        query: gqlOrderSearch,
    },
    result: {
        data: orderSearchMock,
    },
};

export const editOrderDocumentMockRequest = {
    request: {
        query: gqlEditOrderDocument,
    },
    result: {
        data: editOrderDocumentMock,
    },
};

export const requiredDocumentChangesMockRequest = {
    request: {
        query: gqlRequiredDocumentChanges,
    },
    result: {
        data: requiredDocumentChangesMock,
    },
};

export const shipmentChangesMockRequest = {
    request: {
        query: gqlShipmentChanges,
    },
    result: {
        data: shipmentChangesMock,
    },
};
