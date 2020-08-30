import { gql } from '@apollo/client';

export const gqlUpdateEvent = gql`
    mutation UpdateEvent(
        $id: uuid!
        $name: String!
        $mnemonic: String!
        $start_time: timestamptz
        $end_time: timestamptz
        $location: String
        $city: String
        $language: String
        $is_closed: Boolean
        $description: String
    ) {
        update_event(
            where: { id: { _eq: $id } }
            _set: {
                mnemonic: $mnemonic
                name: $name
                start_time: $start_time
                end_time: $end_time
                location: $location
                city: $city
                language: $language
                is_closed: $is_closed
                description: $description
            }
        ) {
            returning {
                id
                name
                mnemonic
                start_time
                end_time
                is_closed
                location
                city
                language
                description
            }
        }
    }
`;
