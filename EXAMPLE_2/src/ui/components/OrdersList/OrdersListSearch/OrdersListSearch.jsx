import React from 'react';
import { Input, Icon } from 'antd';
import { useIntl } from 'react-intl';
import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { gqlOrderSearch } from '@/api/Queries/local';

function OrdersListSearch() {
    const apolloClient = useApolloClient();

    const intl = useIntl();
    let orderSearch = useQuery(gqlOrderSearch);
    orderSearch = orderSearch.data?.orderSearch || '';

    return (
        <Input
            autoFocus
            type="text"
            value={orderSearch}
            onChange={e =>
                apolloClient.writeData({
                    data: { orderSearch: e.target.value },
                })
            }
            placeholder={intl.formatMessage({
                id: 'OrdersListSearch Search',
                defaultMessage:
                    'Search for Order #, PO#, Product Supplier or Buyer',
            })}
            prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
        />
    );
}

export default OrdersListSearch;
