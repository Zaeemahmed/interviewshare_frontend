import { gql } from '@apollo/client';

export const gqlAbstracts = gql`
    query Abstracts {
        abstract_submission_system {
            id
            name
        }
    }
`;
