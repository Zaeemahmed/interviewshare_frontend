import React from 'react';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { useHistory } from 'react-router-dom';

function EventEditButton({ eventId }) {
    const history = useHistory();

    const routeChange = path => {
        history.push(path);
    };

    return (
        <EditOutlinedIcon
            data-cy="EventEdit"
            onClick={e => {
                e.preventDefault();
                routeChange('/eventUpdate/' + eventId);
            }}
        />
        /* <Button
            variant="outlined"
            color="secondary"
            data-cy="EventEdit"
        >
            {t('EventEdit')}
        </Button> */
    );
}

export default EventEditButton;
