import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import { gqlAllOrders, gqlSearchOrders } from '@/api/Queries/Orders';
import { gqlOrderSearch } from '@/api/Queries/local';
import OrdersList from '@/ui/components/OrdersList/OrdersList';
import MainTemplate from '@/ui/templates/MainTemplate/MainTemplate';

function Orders({ myRole }) {
    let orderSearch = useQuery(gqlOrderSearch);
    orderSearch = orderSearch.data?.orderSearch || '';

    let { data, loading } = useQuery(
        orderSearch ? gqlSearchOrders : gqlAllOrders,
        {
            variables: {
                searchTerm: orderSearch,
                showSupplier: myRole !== 'CUSTOMER',
            },
        }
    );
    data = (data && (orderSearch ? data.searchOrders : data.allOrders)) || [];
    return (
        <MainTemplate>
            <OrdersList orders={data} isLoadingOrders={loading} />
        </MainTemplate>
    );
}

Orders.propTypes = {
    myRole: PropTypes.string,
};

export default Orders;
