const teamMock = {
    allTeams: [
        {
            id: '51',
            name: 'QA Test',
            organizationUsers: [
                {
                    id: '91',
                    user: {
                        id: '63',
                        firstName: 'Test',
                        lastName: 'User1',
                        email: 'test.user1@gmail.com',
                    },
                    isAdmin: false,
                    isManager: false,
                },
                {
                    id: '145',
                    user: {
                        id: '49',
                        firstName: 'Test',
                        lastName: 'User2',
                        email: 'test.user2@gmail.com',
                    },
                    isAdmin: false,
                    isManager: false,
                },
                {
                    id: '145',
                    user: {
                        id: '49',
                        firstName: 'Test',
                        lastName: 'User3',
                        email: 'test.user3@gmail.com',
                    },
                    isAdmin: false,
                    isManager: true,
                },
            ],
        },
    ],
};

export default teamMock;
