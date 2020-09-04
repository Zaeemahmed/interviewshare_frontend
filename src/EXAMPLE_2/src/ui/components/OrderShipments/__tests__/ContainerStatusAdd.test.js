import React from 'react';
import { mount } from 'enzyme';
import { IntlProvider } from 'react-intl';
import ContainerStatusAdd from '../ContainerStatusAdd';

describe('<ContainerStatusAdd />', () => {
    let wrapper;

    beforeEach(() => {
        const onClick = jest.fn(() => {});

        wrapper = mount(
            <IntlProvider locale="en">
                <ContainerStatusAdd onClick={onClick} />
            </IntlProvider>
        );
    });

    it('renders properly', () => {
        expect(wrapper.find('ContainerStatusAdd').length).toBe(1);
    });

    it('should have one button', () => {
        expect(wrapper.find('Button').length).toBe(1);
    });
});
