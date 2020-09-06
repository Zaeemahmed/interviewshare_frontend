import { gql } from '@apollo/client';

export const event = gql`
    query Event($id: uuid) {
        event(id: $id) {
            name
            email
            meeting_date
            message
        }
    }
`;