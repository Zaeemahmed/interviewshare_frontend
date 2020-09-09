import { gql } from '@apollo/client';

export const gqlEvent = gql`
    query Event($id: uuid) {
        event(where: { id: { _eq: $id } }) {
            id
            name
            mnemonic
            start_time
            end_time
            is_closed
            language
            location
            city
            description
        }
    }
`;
