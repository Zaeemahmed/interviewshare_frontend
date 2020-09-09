import React from 'react';
import { IntlProvider } from 'react-intl';
import { MockedProvider } from '@apollo/react-testing';
import wait from 'waait';
import { mount } from 'enzyme';
import { cache } from '@/api/cache';
import { apolloClient } from '@/api/react-apollo';
import { gqlTeamIsEditmode } from '@/api/Queries/local';
import teamMock from '@/api/Mocks/Team';
import currentUserMock from '@/api/Mocks/CurrentUser';
import { UserProvider } from '@/api/Context/UserContext';
import { TeamContext } from '@/api/Context/TeamContext';
import TeamHeader from '../TeamHeader/TeamHeader';

describe('<TeamHeader />', () => {
    let wrapper;
    beforeEach(() => {
        let mocks = [
            {
                request: {
                    query: gqlTeamIsEditmode,
                },
                result: {
                    data: {
                        teamIsEditmode: false,
                    },
                },
            },
        ];

        apolloClient.writeData({ data: { teamIsEditmode: false } });

        wrapper = mount(
            <MockedProvider
                mocks={mocks}
                addTypename={true}
                cache={cache}
                resolvers={{}}
            >
                <UserProvider value={currentUserMock}>
                    <TeamContext.Provider
                        value={{ team: teamMock.allTeams[0] }}
                    >
                        <IntlProvider locale="en">
                            <TeamHeader />
                        </IntlProvider>
                    </TeamContext.Provider>
                </UserProvider>
            </MockedProvider>
        );
    });

    it('renders Team Header component when `isEditable` is false', async () => {
        expect(wrapper.find('h3').text()).toBe(teamMock.allTeams[0].name);
        expect(wrapper.find('Button').length).toBe(1);
        wrapper
            .find({ 'data-testid': 'TeamEditbuttonsInactive' })
            .at(0)
            .simulate('click');
        wrapper.update(); // wait for UI update
        await wait(0); // wait for query response
        expect(
            wrapper.find({ 'data-testid': 'TeamEditbuttonsActive' }).length
        ).toBe(1);
    });
});
