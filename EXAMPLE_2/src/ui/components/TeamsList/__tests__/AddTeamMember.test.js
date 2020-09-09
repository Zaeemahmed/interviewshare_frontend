import React from 'react';
import { mount } from 'enzyme';
import { MockedProvider } from '@apollo/react-testing';
import { IntlProvider } from 'react-intl';
import teamMock from '@/api/Mocks/Team';
import { TeamContext } from '@/api/Context/TeamContext';
import { gqlAllTeams } from '@/api/Queries/Team';
import AddTeamMember from '../AddTeamMember';

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

describe('<AddTeamMember />', () => {
    let wrapper;
    beforeEach(() => {
        let isManager = false;

        wrapper = mount(
            <IntlProvider locale="en">
                <MockedProvider mocks={mocks}>
                    <TeamContext.Provider value={{ team: teamMock }}>
                        <AddTeamMember isManager={isManager} />
                    </TeamContext.Provider>
                </MockedProvider>
            </IntlProvider>
        );
    });

    it('renders properly', () => {
        expect(wrapper.find('AddTeamMember').length).toBe(1);
    });

    it('should find a plus icon and click', () => {
        wrapper.find('Icon').simulate('click');

        expect(wrapper.find('Input').length).toBe(1);
        expect(wrapper.find('Button').length).toBe(2);
    });

    it('should revert to a previous design when cancel button is clicked', () => {
        wrapper.find('Icon').simulate('click');

        //.at(0) must be used because there are 2 buttons created by Ant-Design Buttonss
        wrapper
            .find({ 'data-testid': 'cancelButton' })
            .at(0)
            .simulate('click');

        expect(wrapper.find('Icon').length).toBe(1);
    });
});
