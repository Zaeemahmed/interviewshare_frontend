import { gql } from '@apollo/client';

export const gqlInsertSubmissionSystem = gql`
    mutation InsertSubmissionSystem($fileTerms: Upload!) {
        insertSubmissionSystem(fileTerms: $fileTerms) {
            success
        }
    }
`;
