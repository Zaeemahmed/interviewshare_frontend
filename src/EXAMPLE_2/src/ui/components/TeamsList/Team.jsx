import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Divider } from 'antd';
import { TeamContext } from '@/api/Context/TeamContext';
import TeamUsers from './TeamUsers';
import TeamHeader from './TeamHeader/TeamHeader';

function Team({ team, teamRefetch }) {
    const managers = team.organizationUsers.filter(User => User.isManager);
    const members = team.organizationUsers.filter(User => !User.isManager);

    return (
        <TeamContext.Provider value={{ team: team, teamRefetch: teamRefetch }}>
            <StyledDiv>
                <TeamHeader />
                <Divider />
                <TeamUsers
                    title="Team Managers"
                    users={managers}
                    isManager={true}
                />
                <TeamUsers
                    title="Team Members"
                    users={members}
                    isManager={false}
                />
            </StyledDiv>
        </TeamContext.Provider>
    );
}

Team.propTypes = {
    teamRefetch: PropTypes.func,
    team: PropTypes.object,
};

const StyledDiv = styled.div`
    border: 1px solid #ecebeb;
    border-radius: 10px;
    background: #fff;
    max-width: 1200px;
    margin-top: 30px;
`;

export default Team;
