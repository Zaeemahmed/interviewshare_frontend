import React from 'react';
import { mount } from 'enzyme';
import { IntlProvider } from 'react-intl';
import ContainerStatusEdit from '../ContainerStatusEdit';

describe('<ContainerStatusEdit />', () => {
    let wrapper;

    beforeEach(() => {
        const onClick = jest.fn(() => {});

        wrapper = mount(
            <IntlProvider locale="en">
                <ContainerStatusEdit onClick={onClick} />
            </IntlProvider>
        );
    });

    it('renders properly', () => {
        expect(wrapper.find('ContainerStatusEdit').length).toBe(1);
    });

    it('should have one button', () => {
        expect(wrapper.find('Button').length).toBe(1);
    });
});
