import React, { useContext, useState } from 'react';
import { Col, Input, Row } from 'antd';
import styled from 'styled-components';
import { useApolloClient, useMutation, useQuery } from '@apollo/react-hooks';
import { gqlTeamIsEditmode } from '@/api/Queries/local';
import { gqlChangeTeamName } from '@/api/Mutations/Team';
import { gqlAllTeams } from '@/api/Queries/Team';
import { TeamContext } from '@/api/Context/TeamContext';
import TeamEditbuttonsActive from './TeamEditbuttonsActive';
import TeamEditbuttonsInactive from './TeamEditbuttonsInactive';

function TeamHeader() {
    const { team } = useContext(TeamContext);

    const apolloClient = useApolloClient();
    const [teamName, setTeamName] = useState(team.name);

    let { data: teamIsEditmode } = useQuery(gqlTeamIsEditmode);
    teamIsEditmode =
        (teamIsEditmode && teamIsEditmode.teamIsEditmode === true) || false;

    const [changeTeamName] = useMutation(gqlChangeTeamName, {
        update(
            cache,
            {
                data: {
                    updateTeam: { team },
                },
            }
        ) {
            const teamCache = cache.readQuery({
                query: gqlAllTeams,
            });

            let newTeams = [...teamCache.allTeams];

            for (let t = 0; t < newTeams.length; t++) {
                if (newTeams[t].id === team.id) {
                    newTeams[t].name = teamName;
                    break;
                }
            }

            apolloClient.writeQuery({
                query: gqlAllTeams,
                data: {
                    allTeams: newTeams,
                },
            });
        },
    });

    const ChangeTeamName = () => {
        apolloClient.writeData({ data: { teamIsEditmode: false } });

        changeTeamName({
            variables: {
                teamId: team.id,
                name: teamName,
            },
        });
    };

    return (
        <div>
            <StyledRow>
                <ColName span={12}>
                    {!teamIsEditmode ? (
                        <H3 style={{ marginBottom: 0 }}>{teamName}</H3>
                    ) : (
                        <StyledInput
                            value={teamName}
                            onChange={e => setTeamName(e.target.value)}
                        />
                    )}
                </ColName>
                <ColButton span={12}>
                    {!teamIsEditmode ? (
                        <TeamEditbuttonsInactive />
                    ) : (
                        <TeamEditbuttonsActive onDone={ChangeTeamName} />
                    )}
                </ColButton>
            </StyledRow>
        </div>
    );
}

const H3 = styled.h3`
    margin-bottom: 0;
`;

const StyledRow = styled(Row)`
    padding: 20px;
    padding-bottom: 0;
`;

const ColName = styled(Col)`
    line-height: 32px;
`;
const ColButton = styled(Col)`
    text-align: right;
`;

const StyledInput = styled(Input)`
    width: 300px !important;
`;

export default TeamHeader;
