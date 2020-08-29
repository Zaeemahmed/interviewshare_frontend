import React from 'react';
import Button from '@material-ui/core/Button';
import { useMutation } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import {
    cacheDeleteEvent,
    gqlDeleteEvent,
} from '../../../data/Event/DeleteEvent';

function EventDelete({ eventId }) {
    const { t } = useTranslation();
    const [deleteEvent] = useMutation(gqlDeleteEvent);

    return (
        <Button
            variant="outlined"
            color="secondary"
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
        >
            {t('EventDelete')}
        </Button>
    );
}

export default EventDelete;
