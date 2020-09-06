import React, { useContext } from 'react';
import { Button } from 'antd';
import { FormattedMessage } from 'react-intl';
import { useApolloClient } from '@apollo/react-hooks';
import { useCurrentUser } from '@/api/Context/UserContext';
import { TeamContext } from '@/api/Context/TeamContext';
import { isTeamManager } from '@/ui/_helpers/Permissions';

function TeamEditbuttonsInactive() {
    const { team } = useContext(TeamContext);
    const currentUser = useCurrentUser();
    const apolloClient = useApolloClient();

    if (isTeamManager(team.id, currentUser)) {
        return (
            <Button
                size="small"
                data-testid="TeamEditbuttonsInactive"
                onClick={() =>
                    apolloClient.writeData({
                        data: {
                            teamIsEditmode: true,
                        },
                    })
                }
            >
                <FormattedMessage defaultMessage="Manage Team" />
            </Button>
        );
    } else {
        return '';
    }
}

export default TeamEditbuttonsInactive;
