import React from 'react';
import { mount } from 'enzyme';
import { IntlProvider } from 'react-intl';
import ContainerStatusNoInfo from '../ContainerStatusNoInfo';

describe('<ContainerStatusNoInfo />', () => {
    let wrapper;

    beforeEach(() => {
        const onClick = jest.fn(() => {});

        wrapper = mount(
            <IntlProvider locale="en">
                <ContainerStatusNoInfo onClick={onClick} />
            </IntlProvider>
        );
    });

    it('renders properly', () => {
        expect(wrapper.find('ContainerStatusNoInfo').length).toBe(1);
    });

    it('should have one button', () => {
        expect(wrapper.find('Button').length).toBe(1);
    });
});
