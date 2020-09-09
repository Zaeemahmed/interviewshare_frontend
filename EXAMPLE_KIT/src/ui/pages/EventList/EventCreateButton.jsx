import React from 'react';
import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

function EventCreateButton() {
    return (
        <Link to="/eventCreate">
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </Link>
    );
}

export default EventCreateButton;
