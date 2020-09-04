import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { gqlTeamDeleteModeUserId } from '@/api/Queries/local';
import TeamMemberInfo from './TeamMemberInfo';
import DeleteTeamMember from './DeleteTeamMember';

function TeamMember({ user }) {
    let { data: teamDeleteModeUserId } = useQuery(gqlTeamDeleteModeUserId);
    teamDeleteModeUserId =
        (teamDeleteModeUserId && teamDeleteModeUserId.teamDeleteModeUserId) ||
        null;

    return (
        <Div>
            {teamDeleteModeUserId !== user.id ? (
                <TeamMemberInfo user={user} />
            ) : (
                <DeleteTeamMember user={user} />
            )}
        </Div>
    );
}

TeamMember.propTypes = {
    user: PropTypes.object,
};

const Div = styled.div`
    padding: 10px;
    border: 1px solid #ecebeb;
    border-radius: 10px;
    height: 65px;
    display: flex;
    min-width: 200px;
    max-width: 275px;
    flex-grow: 1;
    margin-right: 2%;
    margin-bottom: 20px;
`;

export default TeamMember;
