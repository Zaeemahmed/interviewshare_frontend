import React from 'react';
import { PropTypes } from 'prop-types';
import Team from './Team';

function TeamsList({ allTeams, refetch }) {
    return (
        <div className="TeamsList">
            {allTeams.map(team => (
                <Team team={team} teamRefetch={refetch} key={team.id} />
            ))}
        </div>
    );
}

TeamsList.propTypes = {
    allTeams: PropTypes.array,
    refetch: PropTypes.func,
};

export default TeamsList;
