import { gql } from '@apollo/client';

export const companies = gql`
    query Companies{
        companies{
            id
            name
            address
            countryAndCity
            vatNumber
        }
    }
`;

