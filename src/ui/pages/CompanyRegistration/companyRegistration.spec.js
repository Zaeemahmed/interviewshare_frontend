import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { mount } from 'cypress-react-unit-test';
import CompanyRegistraction from './CompanyRegistration';

describe('Company form', () => {
    it(' should mounts the component', () => {
        mount(<CompanyRegistraction />);
    });
});
