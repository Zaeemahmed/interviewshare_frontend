import { gql } from '@apollo/client';

export const company = gql`
    query Company($id: uuid) {
        company(id: $id) {
            name
            address
            countryAndCity
            vatNumber
        }
    }
`;

