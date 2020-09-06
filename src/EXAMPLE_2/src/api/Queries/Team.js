import { gql } from 'apollo-boost';

export const gqlAllTeams = gql`
    query allTeams {
        allTeams {
            id
            name
            organizationUsers {
                id
                user {
                    id
                    firstName
                    lastName
                    email
                }
                isAdmin
                isManager
            }
        }
    }
`;
