import React from 'react';
import { mount } from 'enzyme';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { MockedProvider } from '@apollo/react-testing';
import { apolloClient } from '@/api/react-apollo';
import { gqlAllTeams } from '@/api/Queries/Team';
import teamMock from '@/api/Mocks/Team';
import UserMock from '@/api/Mocks/User';
import { UserProvider } from '@/api/Context/UserContext';
import Team from '../Team';

const mocks = [
    {
        request: {
            query: gqlAllTeams,
        },
        result: {
            data: {
                me: teamMock,
            },
        },
    },
];
describe('<Team />', () => {
    let wrapper;
    let team = teamMock.allTeams[0];

    beforeEach(() => {
        wrapper = mount(
            <ApolloProvider client={apolloClient}>
                <MockedProvider mocks={mocks}>
                    <IntlProvider locale="en">
                        <UserProvider value={UserMock}>
                            <Router>
                                <Team team={teamMock.allTeams[0]} />
                            </Router>
                        </UserProvider>
                    </IntlProvider>
                </MockedProvider>
            </ApolloProvider>
        );
    });

    it('should render properly', () => {
        expect(wrapper.find('TeamUsers').length).toBe(2);
    });

    it('should have two members', () => {
        expect(wrapper.find('TeamMember').length).toBe(
            team.organizationUsers.length
        );
    });
});
