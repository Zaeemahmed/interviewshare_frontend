import { gql } from 'apollo-boost';
import { ErrorFragments } from '../Queries/Error';

export const gqlCreateTeam = gql`
    mutation CreateTeam($managerEmail: String, $name: String) {
        createTeam(managerEmail: $managerEmail, name: $name) {
            success
            team {
                id
                name
                isActive
            }
            error {
                ...FragmentMutationError
            }
        }
    }
    ${ErrorFragments.error}
`;

export const gqlDeleteTeam = gql`
    mutation DeleteTeam($teamId: ID!) {
        deleteTeam(teamId: $teamId) {
            success
            error {
                ...FragmentMutationError
            }
        }
    }
    ${ErrorFragments.error}
`;

export const gqlChangeTeamName = gql`
    mutation UpdateTeam($teamId: ID!, $name: String) {
        updateTeam(teamId: $teamId, name: $name) {
            success
            error {
                ...FragmentMutationError
            }
            team {
                id
                name
                isActive
            }
        }
    }
    ${ErrorFragments.error}
`;

export const gqlAddTeamMember = gql`
    mutation AddOrUpdateTeamMembership(
        $isManager: Boolean!
        $teamId: ID!
        $inviteeEmail: String!
    ) {
        addOrUpdateMembership(
            isManager: $isManager
            teamId: $teamId
            invitee_email: $inviteeEmail
        ) {
            success
            error {
                ...FragmentMutationError
            }
            team {
                organizationUsers {
                    id
                    isAdmin
                    isManager
                    user {
                        id
                        firstName
                        lastName
                        email
                    }
                }
            }
        }
    }
    ${ErrorFragments.error}
`;
export const gqlDeleteMembership = gql`
    mutation DeleteMembership($teamId: ID!, $userEmail: String!) {
        deleteMembership(teamId: $teamId, userEmail: $userEmail) {
            success
            error {
                ...FragmentMutationError
            }
        }
    }
    ${ErrorFragments.error}
`;

export const gqlUpdateOrder = gql`
    mutation UpdateOrder(
        $orderId: ID!
        $supplyChainManagerUserId: ID
        $customerAgentTeamId: ID
        $customerTeamId: ID
        $supplierAgentTeamId: ID
        $supplierTeamId: ID
    ) {
        updateOrder(
            orderId: $orderId
            supplyChainManagerUserId: $supplyChainManagerUserId
            customerAgentTeamId: $customerAgentTeamId
            customerTeamId: $customerTeamId
            supplierAgentTeamId: $supplierAgentTeamId
            supplierTeamId: $supplierTeamId
        ) {
            success
            error {
                ...FragmentMutationError
            }
            order {
                supplyChainManagerUser {
                    id
                    firstName
                    lastName
                    email
                }
                customerAgentTeam {
                    id
                    name
                }
                customerTeam {
                    id
                    name
                }
                supplierAgentTeam {
                    id
                    name
                }
                supplierTeam {
                    id
                    name
                }
            }
        }
    }
    ${ErrorFragments.error}
`;
