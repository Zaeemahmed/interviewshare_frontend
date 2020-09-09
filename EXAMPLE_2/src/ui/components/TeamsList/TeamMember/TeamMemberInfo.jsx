import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useQuery, useApolloClient } from '@apollo/react-hooks';
import { gqlTeamIsEditmode } from '@/api/Queries/local';
import IconUserInitials from '@/ui/atoms/Icons/IconUserInitials';
import ButtonX from '@/ui/atoms/Buttons/ButtonX';

function TeamMemberInfo({ user }) {
    const apolloClient = useApolloClient();

    const Initials = user.firstName.slice(0, 1) + user.lastName.slice(0, 1);

    let { data: teamIsEditmode } = useQuery(gqlTeamIsEditmode);
    teamIsEditmode = (teamIsEditmode && teamIsEditmode.teamIsEditmode) || false;

    return (
        <Div>
            <TeamInfo>
                <TeamIcon>
                    <IconUserInitials text={Initials} size={32} />
                </TeamIcon>
                <div>
                    <MemberName>
                        {user.firstName} {user.lastName}
                    </MemberName>
                    <MemberEmail>{user.email}</MemberEmail>
                </div>
            </TeamInfo>
            {teamIsEditmode && (
                <ButtonX
                    onClick={() =>
                        apolloClient.writeData({
                            data: { teamDeleteModeUserId: user.id },
                        })
                    }
                />
            )}
        </Div>
    );
}

TeamMemberInfo.propTypes = {
    user: PropTypes.object,
};

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;
const TeamInfo = styled.div`
    display: flex;
    place-items: center left;
`;

const TeamIcon = styled.div`
    border-radius: 50%;
    height: 30px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 18px;
    margin-right: 10px;
`;

const MemberName = styled.p`
    margin: 0;
`;

const MemberEmail = styled.p`
    margin: 0;
    color: #b5b5b5;
    font-size: 12px;
`;

export default TeamMemberInfo;
