import { gql } from '@apollo/client';
import { events } from '../queries/Events';

export const gqlInsertEvent = gql`
    mutation InsertEvent(
        $id: uuid
        $name: String
        $email: String
        $meeting_date: timestamptz
        $message: String
    ) {
        insert_event(
            objects: {
                id: $id
                name: $name
                email: $email
                meeting_date: $meeting_date
                message: $message
            }
        ) {
            returning {
                id
                name
                email
                meeting_date
                message
            }
        }
    }
`;

export const cacheInsertEvent = (cache, { data }) => {
    const existingEvents = cache.readQuery({
        query: events,
    });
    const newEvent = data.insert_event.returning[0];
    cache.writeQuery({
        query: events,
        data: { event: [newEvent, ...existingEvents.event] },
    });
};
