import { gql } from 'apollo-boost';

export const gqlMe = gql`
    query {
        me {
            id
            firstName
            lastName
            groups {
                id
                name
            }
            #            documentsThatCanBeUploadedByThisGroup{
            #                id
            #            }
            #            documentsThatCanBeSeenByThisGroup{
            #                id
            #            }
            #            documentsThatCanBeApprovedByThisGroup{
            #                id
            #            }
        }
    }
`;
