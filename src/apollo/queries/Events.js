import { gql } from '@apollo/client';

export const events = gql`
    query Events {
        events {
            id
            name
            email
            date
            message
        }
    }
`;
