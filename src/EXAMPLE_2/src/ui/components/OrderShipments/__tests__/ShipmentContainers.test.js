import React from 'react';
import { mount } from 'enzyme';
import { ApolloProvider } from '@apollo/react-hooks';
import { MockedProvider } from '@apollo/react-testing';
import { apolloClient } from '@/api/react-apollo';
import { gqlContainerByShipmentId } from '@/api/Queries/Shipments';
import ShipmentContainers from '../ShipmentContainers';

const mocks = [
    {
        request: {
            query: gqlContainerByShipmentId,
            variables: {
                id: '132',
            },
        },
        result: {
            data: {
                containerByShipmentId: [
                    {
                        segments: [],
                    },
                ],
            },
        },
    },
];

const shipment = {
    id: '132',
    shipmentName: null,
    status: 'waiting for data from shipment provider',
    carrierCode: null,
    containerNumber: null,
    bookingNumber: null,
    blNumber: null,
    customerDocumentAwbNumber: null,
    supplierDocumentAwbNumber: null,
    demurrageInformation: null,
    customerEtd: '2019-05-31',
    items: [],
    documentTypes: [],
    __typename: 'ShipmentType',
};

describe('<ShipmentContainers />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <ApolloProvider client={apolloClient}>
                <MockedProvider mocks={mocks}>
                    <ShipmentContainers shipment={shipment} />
                </MockedProvider>
            </ApolloProvider>
        );
    });

    it('renders properly', () => {
        expect(wrapper.find('ShipmentContainers').length).toBe(1);
    });
});

test('empty test', () => {});
