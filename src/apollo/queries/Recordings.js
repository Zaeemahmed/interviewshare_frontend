import { gql } from '@apollo/client';

export const recordings = gql`
    query Recordings{
        recording {
            id
            url
        }
    }
`;
