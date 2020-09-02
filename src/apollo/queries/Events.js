import { gql } from '@apollo/client';

export const events = gql`
    query Events {
        event {
            id
            name
            email
            meeting_date
            message
        }
    }
`;
