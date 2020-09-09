import { gql } from '@apollo/client';
import { gqlEvents } from './Events';

export const gqlDeleteEvent = gql`
    mutation DeleteEvent($id: uuid!) {
        delete_event(where: { id: { _eq: $id } }) {
            returning {
                id
            }
        }
    }
`;

export const cacheDeleteEvent = (eventId, cache, data) => {
    const existingEvents = cache.readQuery({
        query: gqlEvents,
    });
    const newEvents =
        (existingEvents &&
            existingEvents.length > 0 &&
            existingEvents.event.filter(e => e.id !== eventId)) ||
        [];
    cache.writeQuery({
        query: gqlEvents,
        data: {
            event: newEvents,
        },
    });
};
