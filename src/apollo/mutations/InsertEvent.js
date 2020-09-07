import { gql } from '@apollo/client';
import { events } from '../queries/Events';

export const InsertEvent = gql`
    mutation InsertEvent(
        $id: ID!
        $name: String!
        $email: String!
        $date: Date
        $message: String!
    ) {
        insertEvent(
            id: $id
            name: $name
            email: $email
            date: $date
            message: $message
        ) {
            id
        }
    }
`;

export const cacheInsertEvent = (cache, { data }) => {
    const existingEvents = cache.readQuery({
        query: events,
    });
    const newEvent = data.insertEvent.id;
    cache.writeQuery({
        query: events,
        data: { events: [newEvent, ...existingEvents.events] },
    });
};
