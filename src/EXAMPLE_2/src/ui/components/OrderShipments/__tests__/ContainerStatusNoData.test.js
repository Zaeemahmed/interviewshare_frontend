import React from 'react';
import { mount } from 'enzyme';
import { IntlProvider } from 'react-intl';
import ContainerStatusNoData from '../ContainerStatusNoData';

describe('<ContainerStatusNoData />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <IntlProvider locale="en">
                <ContainerStatusNoData />
            </IntlProvider>
        );
    });

    it('renders properly', () => {
        expect(wrapper.find('ContainerStatusNoData').length).toBe(1);
    });
});
