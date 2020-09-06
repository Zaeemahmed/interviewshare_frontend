import React from 'react';
import { mount } from 'enzyme';
import { IntlProvider } from 'react-intl';
import ContainerStatusEmpty from '../ContainerStatusEmpty';

describe('<ContainerStatusEmpty />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <IntlProvider locale="en">
                <ContainerStatusEmpty />
            </IntlProvider>
        );
    });

    it('renders properly', () => {
        expect(wrapper.find('ContainerStatusEmpty').length).toBe(1);
    });
});
