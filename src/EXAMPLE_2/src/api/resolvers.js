import { gql } from 'apollo-boost';

export const typeDefs = gql`
    type OrderDetail {
        key: Int
        pos: String
        product: String
        quantity: String
        shippingStatus: String
        etd: String
        eta: String
    }

    type Order {
        key: Int
        orderNr: String
        product: String
        supplier: String
        buyer: String
        orderStatus: String
        etd: String
        eta: String
        details: [OrderDetail]
    }
`;

export const resolvers = {};
