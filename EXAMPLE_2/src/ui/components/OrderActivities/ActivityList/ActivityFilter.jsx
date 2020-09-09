import React from 'react';
import { Radio } from 'antd';
import { FormattedMessage } from 'react-intl';
import { useQuery, useApolloClient } from '@apollo/react-hooks';
import { gqlActivityFilter } from '@/api/Queries/local';

function ActivityFilter() {
    const apolloClient = useApolloClient();

    const changeFilter = e => {
        apolloClient.writeData({ data: { activityFilter: e.target.value } });
    };

    let activityFilter = useQuery(gqlActivityFilter);
    activityFilter =
        (activityFilter.data && activityFilter.data.activityFilter) || 'all';

    return (
        <Radio.Group
            defaultValue={activityFilter}
            onChange={changeFilter}
            buttonStyle="solid"
        >
            <Radio.Button value="all">
                <FormattedMessage defaultMessage="All" />
            </Radio.Button>
            <Radio.Button value="messages">
                <FormattedMessage defaultMessage="Conversations" />
            </Radio.Button>
            <Radio.Button value="documents">
                <FormattedMessage defaultMessage="Documents" />
            </Radio.Button>
            <Radio.Button value="shipments">
                <FormattedMessage defaultMessage="Shipments" />
            </Radio.Button>
        </Radio.Group>
    );
}

export default ActivityFilter;
