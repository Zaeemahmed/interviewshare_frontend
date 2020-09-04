import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gqlAllTeams } from '@/api/Queries/Team';
import TeamsList from '@/ui/components/TeamsList/TeamsList';
import MainTemplate from '@/ui/templates/MainTemplate/MainTemplate';

function Teams() {
    let { data, loading, error, refetch } = useQuery(gqlAllTeams);
    data = data ? data.allTeams : [];

    return (
        <MainTemplate loading={loading} error={error}>
            <TeamsList allTeams={data} refetch={refetch} />
        </MainTemplate>
    );
}

export default Teams;
