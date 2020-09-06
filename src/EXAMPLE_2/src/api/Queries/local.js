import { gql } from 'apollo-boost';

export const gqlOrderSearch = gql`
    {
        orderSearch @client
    }
`;

export const gqlOrderFilter = gql`
    {
        orderFilter @client
    }
`;

export const gqlEditOrderDocument = gql`
    {
        editOrderDocument @client
    }
`;

export const gqlRequiredDocumentChanges = gql`
    {
        requiredDocumentChanges @client
    }
`;

export const gqlShipmentChanges = gql`
    {
        shipmentChanges @client
    }
`;
export const gqlShipmentTrackingFormModalId = gql`
    {
        shipmentTrackingFormModalId @client
    }
`;

export const gqlActivityFilter = gql`
    {
        activityFilter @client
    }
`;

export const gqlTeamIsEditmode = gql`
    {
        teamIsEditmode @client
    }
`;

export const gqlTeamDeleteModeUserId = gql`
    {
        teamDeleteModeUserId @client
    }
`;

export const gqlManageOrderSelectedTab = gql`
    {
        manageOrderSelectedTab @client
    }
`;

export const gqlShowCreateMessagesReaders = gql`
    {
        showCreateMessageReaders @client
    }
`;

export const gqlShowMessageOverlay = gql`
    {
        showMessageOverlay @client
    }
`;

export const gqlMessageText = gql`
    {
        messageText @client
    }
`;

export const gqlReplyText = gql`
    {
        replyText @client
    }
`;
