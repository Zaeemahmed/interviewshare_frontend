import { gql } from '@apollo/client';
import { companies } from '../Queries/Companies';

export const CompanyRegistration = gql`
    mutation CompanyRegistration(
        $id: ID!
        $name: String!
        $address: String!
        $countryAndCity: String!
        $vatNumber: String
    ) {
        companyRegistration(
            id: $id
            name: $name
            address: $address
            countryAndCity: $countryAndCity
            vatNumber: $vatNumber
        ) {
            id
        }
    }
`;

export const cacheCompanies = (cache, { data }) => {
    const existingCompanies = cache.readQuery({
        query: companies,
    });
    const newCompany = data.companyRegistration.id;
    cache.writeQuery({
        query: companies,
        data: { companies: [newCompany, ...existingCompanies.companies] },
    });
};
