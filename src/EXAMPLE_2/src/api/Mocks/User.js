const UserMock = {
    __typename: 'User',
    id: 'VXNlcjo0',
    firstName: 'Max',
    lastName: 'Mustermann',
    groups: [
        {
            id: '413',
            name: 'order-70-supply_chain_manager',
        },
        {
            id: '582',
            name: 'order-98-supply_chain_manager',
        },
        {
            id: '583',
            name: 'team-51-manager',
        },
    ],
    documentsThatCanBeUploadedByThisGroup: {
        id: '1',
    },
    documentsThatCanBeSeenByThisGroup: {
        id: '1',
    },
    documentsThatCanBeApprovedByThisGroup: {
        id: '1',
    },
};

export default UserMock;
