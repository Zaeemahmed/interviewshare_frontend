import React from 'react';
import { mount } from 'enzyme';
import Activity from '../Activity';

describe('Activity', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Activity leftCol="" middleCol="" />);
    });

    it('should render properly', () => {
        expect(wrapper.find('Activity').length).toBe(1);
    });

    it('should render 2 columns', () => {
        expect(wrapper.find('Col').length).toBe(2);
    });
});
