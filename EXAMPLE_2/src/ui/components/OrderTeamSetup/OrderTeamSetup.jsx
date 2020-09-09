import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'antd';
import { useQuery, useMutation, useApolloClient } from '@apollo/react-hooks';
import styled from 'styled-components';
import { gqlOrderById } from '@/api/Queries/Orders';
import { gqlUpdateOrder } from '@/api/Mutations/Team';
import { gqlAllTeams } from '@/api/Queries/Team';
import { useOrder } from '@/api/Context/OrderContext';
import TeamItemSCM from './TeamItemSCM';
import TeamItem from './TeamItem';

function OrderTeamSetup() {
    const apolloClient = useApolloClient();
    const { order, permissions } = useOrder();
    const { showCustomer, showSupplier, isSupplyChainManager } = permissions;

    let { data: allTeams } = useQuery(gqlAllTeams);
    allTeams = (allTeams && allTeams.allTeams) || null;

    const [updateOrder] = useMutation(gqlUpdateOrder, {
        update(cache, { data }) {
            const orderCache = cache.readQuery({
                query: gqlOrderById,
                variables: {
                    orderId: order.id,
                    showSupplier: showSupplier,
                    showCustomer: showCustomer,
                    showSupplyChainManager: isSupplyChainManager,
                },
            });

            let Order = orderCache.orderById;
            let updatedOrderData = data.updateOrder.order;

            Order.customerAgentTeam = updatedOrderData.customerAgentTeam;
            Order.customerTeam = updatedOrderData.customerTeam;
            Order.supplierAgentTeam = updatedOrderData.supplierAgentTeam;
            Order.supplierTeam = updatedOrderData.supplierTeam;
            Order.supplyChainManagerUser =
                updatedOrderData.supplyChainManagerUser;

            apolloClient.writeQuery({
                query: gqlOrderById,
                variables: {
                    orderId: order.id,
                    showSupplier: showSupplier,
                    showCustomer: showCustomer,
                    showSupplyChainManager: isSupplyChainManager,
                },
                data: { orderById: Order },
            });
        },
    });

    if (!allTeams) {
        return null;
    }

    // Remove all teams that are already assigned
    allTeams = allTeams.filter(t => {
        if (!t) return false;

        if (
            (order.supplierTeam && t.id === order.supplierTeam.id) ||
            (order.supplierAgentTeam && t.id === order.supplierAgentTeam.id) ||
            (order.customerTeam && t.id === order.customerTeam.id) ||
            (order.customerAgentTeam && t.id === order.customerAgentTeam.id)
        ) {
            return false;
        }
        return true;
    });

    const assignTeam = (teamType, item) => {
        let variables = {
            orderId: order.id,
        };

        switch (teamType) {
            case 'supplier':
                variables.supplierTeamId = item.id;
                break;
            case 'supplierAgent':
                variables.supplierAgentTeamId = item.id;
                break;
            case 'customer':
                variables.customerTeamId = item.id;
                break;
            default:
                // 'customerAgent'
                variables.customerAgentTeamId = item.id;
                break;
        }
        updateOrder({
            variables: variables,
        });
    };

    const unassignTeam = teamType => {
        let variables = {
            orderId: order.id,
        };

        switch (teamType) {
            case 'supplier':
                variables.supplierTeamId = '';
                break;
            case 'supplierAgent':
                variables.supplierAgentTeamId = '';
                break;
            case 'customer':
                variables.customerTeamId = '';
                break;
            default:
                variables.customerAgentTeamId = '';
                break;
        }
        updateOrder({
            variables: variables,
        });
    };

    return (
        <div>
            <TeamItemSCM updateOrder={updateOrder} />
            <StyledRow>
                <TeamItem
                    id="supplier"
                    allTeams={allTeams}
                    containerName="Supplier"
                    assignedTeam={order.supplierTeam}
                    selectTeam={item => assignTeam('supplier', item)}
                    unassignTeam={() => unassignTeam('supplier')}
                />
                <TeamItem
                    id="supplierAgent"
                    allTeams={allTeams}
                    containerName="Sales Agent"
                    assignedTeam={order.supplierAgentTeam}
                    selectTeam={item => assignTeam('supplierAgent', item)}
                    unassignTeam={() => unassignTeam('supplierAgent')}
                />

                <TeamItem
                    id="customerAgent"
                    allTeams={allTeams}
                    containerName="Purchase Agent"
                    assignedTeam={order.customerAgentTeam}
                    selectTeam={item => assignTeam('customerAgent', item)}
                    unassignTeam={() => unassignTeam('customerAgent')}
                />
                <TeamItem
                    id="customer"
                    allTeams={allTeams}
                    containerName="Customer"
                    assignedTeam={order.customerTeam}
                    selectTeam={item => assignTeam('customer', item)}
                    unassignTeam={() => unassignTeam('customer')}
                />
            </StyledRow>
        </div>
    );
}

OrderTeamSetup.propTypes = {
    order: PropTypes.object,
};

const StyledRow = styled(Row)`
    padding: 24px;
`;

export default OrderTeamSetup;
