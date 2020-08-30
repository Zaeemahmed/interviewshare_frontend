import { gql } from '@apollo/client';
import { gqlEvents } from './Events';

export const gqlInsertEvent = gql`
    mutation InsertEvent(
        $id: uuid
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
    const existingEvents = cache.readQuery({
        query: gqlEvents,
    });
    const newEvent = data.insert_event.returning[0];
    cache.writeQuery({
        query: gqlEvents,
        data: { event: [newEvent, ...existingEvents.event] },
    });
};
