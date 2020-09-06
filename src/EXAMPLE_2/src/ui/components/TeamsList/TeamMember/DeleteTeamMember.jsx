import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button, message } from 'antd';
import { useMutation, useApolloClient } from '@apollo/react-hooks';
import { FormattedMessage } from 'react-intl';
import styled, { css } from 'styled-components';
import { gqlAllTeams } from '@/api/Queries/Team';
import { gqlDeleteMembership } from '@/api/Mutations/Team';
import { TeamContext } from '@/api/Context/TeamContext';

export default function DeleteTeamMember({ user }) {
    const { team, teamRefetch } = useContext(TeamContext);
    let teamId = team.id;
    const apolloClient = useApolloClient();

    const [deleteMembership] = useMutation(gqlDeleteMembership, {
        update(cache) {
            const teamCache = cache.readQuery({ query: gqlAllTeams });
            let AllTeams = teamCache.allTeams;

            let newTeam = {
                ...teamCache,
            };

            let indexTeam = AllTeams.map(function(Team) {
                return Team.id;
            }).indexOf(teamId);
            let indexUser = AllTeams[indexTeam].organizationUsers
                .map(function(U) {
                    return U.id;
                })
                .indexOf(user.id);
            AllTeams[indexTeam].organizationUsers.splice(indexUser, 1);

            newTeam.allTeams[indexTeam].organizationUsers = [
                // ...AllTeams[indexTeam].organizationUsers
            ];

            apolloClient.writeQuery({
                query: gqlAllTeams,
                data: { allTeams: newTeam.allTeams },
            });

            teamRefetch();
        },
        onError() {
            message.error('Team member could not be removed');
        },
        // onCompleted() {
        //     message.success('Team successfully deleted');
        // }
    });

    function clickDeleteMembership(e) {
        e.stopPropagation();

        deleteMembership({
            variables: {
                teamId: teamId,
                userEmail: user.email,
            },
        });

        apolloClient.writeData({ data: { teamDeleteModeUserId: false } });
    }

    return (
        <Div wrapper>
            <P>
                <FormattedMessage defaultMessage="Remove?" />
            </P>
            <div>
                <Button
                    size="small"
                    onClick={() =>
                        apolloClient.writeData({
                            data: { teamDeleteModeUserId: false },
                        })
                    }
                    style={{ marginRight: '5px' }}
                >
                    <FormattedMessage defaultMessage="Cancel" />
                </Button>
                <Button
                    onClick={clickDeleteMembership}
                    size="small"
                    type="danger"
                >
                    <FormattedMessage defaultMessage="Remove" />
                </Button>
            </div>
        </Div>
    );
}

DeleteTeamMember.propTypes = {
    user: PropTypes.object,
};

const Div = styled.div`
    ${props =>
        props.wrapper &&
        css`
            display: flex;
            justify-content: space-between;
            margin-top: 10px;
            width: 100%;
        `}
`;

const P = styled.p`
    display: inline-block;
    line-height: 25px;
    margin-bottom: 0;
`;
