import { gql } from './node_modules/@apollo/client';

export const recordings = gql`
    query Recordings{
        recording {
            id
            url
        }
    }
`;
