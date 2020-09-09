import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import { gqlAvailableCommentReaders, gqlOrderById } from '@/api/Queries/Orders';
import { useCurrentUser } from '@/api/Context/UserContext';
import { OrderProvider } from '@/api/Context/OrderContext';
import { getPermissions } from '@/ui/_helpers/Permissions';
import MainTemplate from '@/ui/templates/MainTemplate/MainTemplate';
import OrderTopbar from '@/ui/components/OrderHeader/OrderTopbar';
import OrderHeader from '@/ui/components/OrderHeader/OrderHeader';
import OrderSubNavigation from '@/ui/components/OrderSubNavigation/OrderSubNavigation';

/**
 * Fetches all Data of an Order and passes it to the Order component
 */
function Order({ match }) {
    const currentUser = useCurrentUser();
    const { orderId } = match.params;
    const {
        showSupplier,
        showCustomer,
        showSupplyChainManager,
    } = getPermissions(orderId, currentUser);

    // fetch Order
    const { loading, data, error, refetch } = useQuery(gqlOrderById, {
        variables: {
            orderId,
            showSupplier,
            showCustomer,
            showSupplyChainManager,
        },
    });
    const order = data?.orderById || {};

    // links to files expire after 1 hour, so refetch order after 30 min
    useEffect(() => {
        const timerID = setTimeout(refetch, 1000 * 60 * 30);
        return () => clearTimeout(timerID);
    }, [data, refetch]);

    // Available Comment Readers
    const {
        loading: loadingAvailableCommentReaders,
        data: dataAvailableCommentReaders,
    } = useQuery(gqlAvailableCommentReaders, {
        variables: { orderId },
    });

    order.availableCommentReaders =
        dataAvailableCommentReaders?.availableCommentReaders || [];

    // For Activity Feed: Sort orderEvents by date
    if (order.orderEvents?.length > 1) {
        order.orderEvents.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
    }
    const isLoading =
        loading || currentUser.isLoading || loadingAvailableCommentReaders;

    return (
        <MainTemplate loading={isLoading} error={error}>
            <OrderProvider
                value={{
                    order,
                    isOrderLoading: loading,
                    refetchOrder: refetch,
                }}
            >
                <OrderTopbar />
                <OrderHeader />
                <OrderSubNavigation />
            </OrderProvider>
        </MainTemplate>
    );
}

Order.propTypes = {
    match: PropTypes.object.isRequired,
};

export default Order;
