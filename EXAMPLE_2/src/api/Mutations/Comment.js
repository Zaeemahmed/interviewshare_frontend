import { gql } from 'apollo-boost';
import { ErrorFragments } from '../Queries/Error';
import { OrderFragments } from '../Queries/Orders';

export const gqlCreateComment = gql`
    mutation(
        $orderId: ID!
        $message: String!
        $answerTo: ID
        $canBeReadBy: [ID]
    ) {
        createComment(
            orderId: $orderId
            answerTo: $answerTo
            message: $message
            canBeReadBy: $canBeReadBy
        ) {
            comment {
                id
                eventType
                message
                createdAt
                order {
                    id
                    orderEvents {
                        ...FragmentOrderEventsType
                    }
                }
                answerTo {
                    id
                }
                user {
                    __typename
                    id
                    firstName
                    lastName
                }
            }
            success
            error {
                ...FragmentMutationError
            }
        }
    }
    ${ErrorFragments.error}
    ${OrderFragments.orderEvents}
`;

export const gqlUpdateComment = gql`
    mutation($commentId: ID!, $message: String!) {
        updateComment(commentId: $commentId, message: $message) {
            comment {
                id
                eventType
                message
                createdAt
                user {
                    __typename
                    id
                    firstName
                    lastName
                }
                answerTo {
                    id
                }
            }
            success
            error {
                ...FragmentMutationError
            }
        }
    }
    ${ErrorFragments.error}
`;

export const gqlDeleteComment = gql`
    mutation($commentId: ID!) {
        deleteComment(commentId: $commentId) {
            success
            error {
                ...FragmentMutationError
            }
        }
    }
    ${ErrorFragments.error}
`;
