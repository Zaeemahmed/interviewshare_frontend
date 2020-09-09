import { getDecodedToken } from '@/api/oAuth';

/*
All Roles:
    |  supplier
    |  supplier_agent
    |  supply_chain_manager
    |  customer_agent
    v  customer
*/

// Examples: order-123-supply_chain_manager / order-55-customer
export const orderPermission = (orderId, currentUser) => {
    //Search in currentUser.groups
    if (currentUser?.groups?.length > 0) {
        const foundGroup = currentUser.groups.find(group => {
            //erp_connector must be excluded
            if (!group.name.includes(`-erp_connector`)) {
                return group.name.includes(`order-${orderId}-`);
            } else {
                return false;
            }
        });

        return foundGroup?.name.split('-')[2];
    }

    // Search in JWT Token
    const decodedToken = getDecodedToken();
    const foundGroup = decodedToken?.groups?.find(group => {
        //erp_connector must be excluded
        if (!group.includes(`-erp_connector`)) {
            return group.includes(`order-${orderId}-`);
        } else {
            return false;
        }
    });

    return foundGroup?.split('-')[2];
};

export const isRoleInAnyOrder = (role, currentUser) => {
    //Search in currentUser.groups
    if (currentUser?.groups?.length > 0) {
        return currentUser.groups.some(
            group => group.name.includes('order') && group.name.includes(role)
        );
    }

    // Search in JWT Token
    const decodedToken = getDecodedToken();
    return !!decodedToken?.groups?.some(
        group => group.includes('order') && group.includes(role)
    );
};

export const isCustomerInAnyOrder = currentUser =>
    isRoleInAnyOrder('customer', currentUser);

export const isSupplyChainManagerInAnyOrder = currentUser =>
    isRoleInAnyOrder('supply_chain_manager', currentUser);

export const showSupplier = (orderId, currentUser) =>
    ['supply_chain_manager', 'supplier', 'supplier_agent'].includes(
        orderPermission(orderId, currentUser)
    );

export const showCustomer = (orderId, currentUser) =>
    ['supply_chain_manager', 'customer', 'customer_agent'].includes(
        orderPermission(orderId, currentUser)
    );

export const isSupplyChainManager = (orderId, currentUser) =>
    ['supply_chain_manager'].includes(orderPermission(orderId, currentUser));

export const isSupplier = (orderId, currentUser) =>
    ['supplier', 'supplier_agent'].includes(
        orderPermission(orderId, currentUser)
    );

export const isCustomer = (orderId, currentUser) =>
    ['customer', 'customer_agent'].includes(
        orderPermission(orderId, currentUser)
    );

export const isTeamManager = (teamId, currentUser) =>
    currentUser?.groups?.some(group =>
        group.name.includes(`team-${teamId}-manager`)
    );

// export const isSupplyChainManager = (order, currentUserId) =>
//     order.supplyChainManagerUser.id === currentUserId;

export const getPermissions = (orderId, currentUser) => ({
    showSupplier: showSupplier(orderId, currentUser),
    showCustomer: showCustomer(orderId, currentUser),
    showSupplyChainManager: isSupplyChainManager(orderId, currentUser),
    isSupplier: isSupplier(orderId, currentUser),
    isCustomer: isCustomer(orderId, currentUser),
    isSupplyChainManager: isSupplyChainManager(orderId, currentUser),
    isSupplyChainManagerInAnyOrder: isSupplyChainManagerInAnyOrder(
        orderId,
        currentUser
    ),
    isCustomerInAnyOrder: isCustomerInAnyOrder(currentUser),
    orderPermission: orderPermission(orderId, currentUser),
});
