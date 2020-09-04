import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button } from 'antd';
import { useMutation, useApolloClient } from '@apollo/react-hooks';
import { gqlDeleteTeam } from '@/api/Mutations/Team';
import { gqlAllTeams } from '@/api/Queries/Team';
import { TeamContext } from '@/api/Context/TeamContext';

function DeleteTeam() {
    const { team, teamRefetch } = useContext(TeamContext);
    const apolloClient = useApolloClient();

    const [deleteTeam] = useMutation(gqlDeleteTeam, {
        update(cache) {
            const teamCache = cache.readQuery({ query: gqlAllTeams });
            let AllTeams = teamCache.allTeams;

            let newTeam = {
                ...teamCache,
            };

            const newAllTeams = AllTeams.filter(t => t.id !== team.id);
            newTeam.allTeams = [...newAllTeams];

            apolloClient.writeQuery({
                query: gqlAllTeams,
                data: { allTeams: newTeam },
            });

            teamRefetch();
        },
    });

    const onClick = () => {
        deleteTeam({
            variables: {
                teamId: team.id,
            },
        });
    };

    return (
        <Button
            size="small"
            style={{ marginRight: '10px' }}
            type="danger"
            onClick={onClick}
        >
            <FormattedMessage defaultMessage="Delete Team" />
        </Button>
    );
}

export default DeleteTeam;
