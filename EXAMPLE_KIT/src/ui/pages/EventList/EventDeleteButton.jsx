import React from 'react';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { useMutation } from '@apollo/client';
import {
    cacheDeleteEvent,
    gqlDeleteEvent,
} from '../../../data/Event/DeleteEvent';

function EventDeleteButton({ eventId }) {
    const [deleteEvent] = useMutation(gqlDeleteEvent);

    return (
        <DeleteOutlinedIcon
            data-cy="EventDelete"
            onClick={e => {
                e.preventDefault();
                deleteEvent({
                    variables: {
                        id: eventId,
                    },
                    update(cache, { data }) {
                        cacheDeleteEvent(eventId, cache, data);
                    },
                });
            }}
        ></DeleteOutlinedIcon>
    );
}

export default EventDeleteButton;
