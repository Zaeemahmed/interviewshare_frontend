import { gql } from 'apollo-boost';

export const gqlContainerByShipmentId = gql`
    query containerByShipmentId($shipmentId: ID!) {
        containerByShipmentId(shipmentId: $shipmentId) {
            containerId
            containerDetails
            carrierName
            segments {
                segmentType
                status
                name
                plannedEndOfSegment
                currentEndOfSegment
                plannedStartOfSegment
                currentStartOfSegment
            }
            updates {
                id
                status
                createdAt
            }
        }
    }
`;

export const gqlAllSupportedCarriers = gql`
    query allSupportedCarriers {
        allSupportedCarriers {
            id
            name
            shortName
            dataProviderCode
        }
    }
`;
