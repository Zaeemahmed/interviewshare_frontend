import { gql } from '@apollo/client';
import { gqlEvents } from './Events';

export const gqlInsertEvent = gql`
    mutation InsertEvent(
        $name: String
        $mnemonic: String
        $start_time: timestamptz
        $end_time: timestamptz
        $location: String
        $city: String
        $language: String
        $is_closed: Boolean
        $description: String
    ) {
        insert_event(
            objects: {
                id: $id
                mnemonic: $mnemonic
                name: $name
                start_time: $start_time
                end_time: $end_time
                location: $location
                city: $city
                language: $language
                is_closed: $is_closed
                description: $description
            }
        ) {
            returning {
                id
                name
                mnemonic
            }
        }
    }
`;

export const cacheInsertEvent = (cache, { data }) => {
    const newEvent = data.insert_event.returning[0];
    const existingEvents = cache.readQuery({
        query: gqlEvents,
    });
    let newEvents = [newEvent];
    if (existingEvents && existingEvents.length > 0) {
        newEvents = [newEvent, ...existingEvents.event];
    }
    cache.writeQuery({
        query: gqlEvents,
        data: { event: newEvents },
    });
};
