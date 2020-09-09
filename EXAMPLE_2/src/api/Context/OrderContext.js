import React, { createContext, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useCurrentUser } from '@/api/Context/UserContext';
import { getPermissions } from '@/ui/_helpers/Permissions';

const OrderContext = createContext();

export const useOrder = () => {
    const { order, refetchOrder, permissions } = useContext(OrderContext);
    const currentUser = useCurrentUser();
    const derivedPermissions = useMemo(
        () => getPermissions(order.id, currentUser),
        [order.id, currentUser]
    );
    return {
        order,
        refetchOrder,
        permissions: permissions || derivedPermissions,
    };
};

export const useOrderPermissions = () => useOrder().permissions;

// `value` should only contain the order, but can contain permissions as well
// passing permissions should only be used for testing
export const OrderProvider = ({ value, children }) => (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
);

OrderProvider.propTypes = {
    children: PropTypes.node,
    value: PropTypes.shape({
        order: PropTypes.shape({
            id: PropTypes.string,
            items: PropTypes.array,
            orderEvents: PropTypes.array,
            orderReference: PropTypes.string,
            shipments: PropTypes.array,
        }),
        permissions: PropTypes.shape({
            showSupplier: PropTypes.bool,
            showCustomer: PropTypes.bool,
            showSupplyChainManager: PropTypes.bool,
            isSupplier: PropTypes.bool,
            isCustomer: PropTypes.bool,
            isSupplyChainManager: PropTypes.bool,
            isSupplyChainManagerInAnyOrder: PropTypes.bool,
            isCustomerInAnyOrder: PropTypes.bool,
            orderPermission: PropTypes.string,
        }),
    }),
};
