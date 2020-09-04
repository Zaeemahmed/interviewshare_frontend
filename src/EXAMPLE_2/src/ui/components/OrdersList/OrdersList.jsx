import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { SCREEN_XS_WIDTH } from '@/config/MediaQuery';
import {
    isCustomer,
    isCustomerInAnyOrder,
    isSupplyChainManager,
    isSupplyChainManagerInAnyOrder,
} from '@/ui/_helpers/Permissions';
import Loading from '@/ui/atoms/Loading';
import { gqlOrderFilter } from '@/api/Queries/local';
import { useCurrentUser } from '@/api/Context/UserContext';
import OrdersListFilter from './OrdersListFilter/OrdersListFilter';
import OrdersListSearch from './OrdersListSearch/OrdersListSearch';
import OrdersListTable from './OrdersListTable/OrdersListTable';

/**
 * Renders a Table with Orders, Searchfield and Filter
 */
function OrdersList({ orders, isLoadingOrders }) {
    const apolloClient = useApolloClient();
    const currentUser = useCurrentUser();
    const isXS = useMediaQuery({ maxWidth: SCREEN_XS_WIDTH });

    let orderFilter = useQuery(gqlOrderFilter);
    orderFilter =
        (orderFilter.data && orderFilter.data.orderFilter) || 'allOrders';
    if (!isSupplyChainManagerInAnyOrder(currentUser)) {
        orderFilter = 'customerOrders';
    }

    if (orderFilter === 'customerOrders') {
        if (orders && orders.length) {
            orders = orders.filter(o => {
                return isCustomer(o.id, currentUser);
            });
        }
    }

    // All Trades only show orders where i am SCM
    if (orderFilter === 'allOrders') {
        if (orders && orders.length) {
            orders = orders.filter(o => {
                return isSupplyChainManager(o.id, currentUser);
            });
        }
    }

    return (
        <StyledDiv isXS={isXS}>
            <StyledRow>
                <Col span={14}>
                    <OrdersListFilter
                        currentUser={currentUser}
                        selected={orderFilter}
                        onChange={e =>
                            apolloClient.writeData({
                                data: { orderFilter: e.target.value },
                            })
                        }
                        showAllTrades={isSupplyChainManagerInAnyOrder(
                            currentUser
                        )}
                        showMyPurchases={isCustomerInAnyOrder(currentUser)}
                    />
                </Col>
                <Col span={10}>
                    <OrdersListSearch />
                </Col>
            </StyledRow>

            {isLoadingOrders ? (
                <Loading />
            ) : (
                <OrdersListTable
                    orders={orders}
                    hideSupplier={
                        orderFilter === 'customerOrders' &&
                        isCustomerInAnyOrder(currentUser)
                    }
                    hideSalesPrice={orderFilter === 'customerOrders'}
                />
            )}
        </StyledDiv>
    );
}

const StyledRow = styled(Row)`
    width: 100%;
    height: 50px;
    padding: 10px;
    margin: 10px 0;
`;

const StyledDiv = styled.div`
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid #e8e8e8;
    max-width: ${props => (props.isXS ? 360 : 1200)}px;
    margin-top: 30px;
`;

OrdersList.propTypes = {
    orders: PropTypes.array,
    isLoadingOrders: PropTypes.bool,
};

export default OrdersList;
