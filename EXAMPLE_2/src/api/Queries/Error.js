import { gql } from 'apollo-boost';

export const ErrorFragments = {
    error: gql`
        fragment FragmentMutationError on MutationError {
            __typename
            ... on ValidationErrors {
                validationErrors {
                    field
                    messages
                }
            }
            ... on ExecutionError {
                errorMessage
            }
        }
    `,
};
