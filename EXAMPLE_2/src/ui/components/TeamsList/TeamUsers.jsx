import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import { gqlTeamIsEditmode } from '@/api/Queries/local';
import TeamMember from './TeamMember/TeamMember';
import AddTeamMember from './AddTeamMember';

function TeamUsers({ users, title, isManager }) {
    let { data: teamIsEditmode } = useQuery(gqlTeamIsEditmode);
    teamIsEditmode = (teamIsEditmode && teamIsEditmode.teamIsEditmode) || false;

    return (
        <div>
            <StyledH4>{title}</StyledH4>
            <StyledDiv>
                {users &&
                    users.map(u => (
                        <TeamMember key={u.user.id} user={u.user} />
                    ))}
                {teamIsEditmode && <AddTeamMember isManager={isManager} />}
            </StyledDiv>
        </div>
    );
}

TeamUsers.propTypes = {
    users: PropTypes.array,
    title: PropTypes.string,
    isManager: PropTypes.bool,
};

const StyledH4 = styled.h4`
    margin-left: 20px;
`;

const StyledDiv = styled.div`
    margin: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
`;

export default TeamUsers;
