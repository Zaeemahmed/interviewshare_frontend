import React from 'react';
import { IntlProvider } from 'react-intl';
import { MockedProvider } from '@apollo/react-testing';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import wait from 'waait';
import { cache } from '@/api/cache';
import { gqlAllTeams } from '@/api/Queries/Team';
import { gqlTeamIsEditmode } from '@/api/Queries/local';
import { UserProvider } from '@/api/Context/UserContext';
import teamMock from '@/api/Mocks/Team';
import UserMock from '@/api/Mocks/User';
import Team from '../Team';

const mocks = [
    {
        request: {
            query: gqlAllTeams,
        },
        result: {
            data: {
                allTeams: teamMock.allTeams,
            },
        },
    },
];

describe('<Teams />', () => {
    let wrapper;
    let refetch = jest.fn();

    beforeEach(() => {
        wrapper = mount(
            <MockedProvider
                mocks={mocks}
                addTypename={true}
                cache={cache}
                resolvers={{}}
            >
                <IntlProvider locale="en">
                    <UserProvider value={UserMock}>
                        <Router>
                            <Team
                                team={teamMock.allTeams[0]}
                                teamRefetch={refetch}
                            />
                        </Router>
                    </UserProvider>
                </IntlProvider>
            </MockedProvider>
        );
    });

    it('is renders the header and editmode works', async () => {
        expect(
            wrapper
                .find('h3')
                .at(0)
                .text()
        ).toBe(teamMock.allTeams[0].name);
        wrapper
            .find({ 'data-testid': 'TeamEditbuttonsInactive' })
            .at(0)
            .simulate('click');
        wrapper.update();
        await wait(0);
        const teamCache = cache.readQuery({ query: gqlTeamIsEditmode });
        expect(teamCache.teamIsEditmode).toBe(true);
    });
});
