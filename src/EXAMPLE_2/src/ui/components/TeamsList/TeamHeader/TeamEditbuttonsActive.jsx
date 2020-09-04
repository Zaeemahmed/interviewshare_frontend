import React from 'react';
import PropTypes from 'prop-types';
import ButtonDone from '@/ui/atoms/Buttons/ButtonDone';
import DeleteTeam from './DeleteTeam';

function TeamEditbuttonsActive({ onDone }) {
    return (
        <div
            className="TeamEditbuttonsActive"
            data-testid="TeamEditbuttonsActive"
        >
            <DeleteTeam />
            <ButtonDone onClick={onDone} />
        </div>
    );
}

TeamEditbuttonsActive.propTypes = {
    onDone: PropTypes.func,
};

export default TeamEditbuttonsActive;
