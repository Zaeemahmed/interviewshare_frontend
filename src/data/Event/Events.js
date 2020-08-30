import { gql } from '@apollo/client';

export const gqlEvents = gql`
    query Events {
        event {
            id
            mnemonic
            name
        }
    }
`;
