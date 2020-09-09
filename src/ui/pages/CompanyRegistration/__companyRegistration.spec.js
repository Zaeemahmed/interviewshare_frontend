///<reference types="cypress"/>

import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { mount } from 'cypress-react-unit-test';
import CompanyRegistraction from './CompanyRegistration';

describe('Company form', () => {
    beforeEach(() => {
        mount(<CompanyRegistraction />);

        cy.get('input[name="name"]').as('name');
        cy.get('input[name="address"]').as('address');

        // companyUser
        cy.fixture('users/companyUser.json', 'utf-8').then(company => {
            // text context
            this.company = company;
        });
    });

    it('check for form heading', () => {
        cy.contains(/Search for your next candidate/i).should('be.visible');
    });

    it('assert reqular name', () => {
        cy.get('@name')
            .click()
            .type(this.company.companyName)
            .should(/*assert accepted*/);
    });

    it('assert french characters', () => {
        cy.get('@name')
            .click()
            .type(this.company.frenchName)
            .should(/*assert accepted*/);
    });

    it('assert irregular names', () => {
        cy.get('@name')
            .click()
            .type(this.company.irregularName)
            .should(/*assert rejection*/);
    });

    it('assert regular address', () => {
        cy.get('@address')
            .click()
            .type(this.company.regularAddress)
            .should(/*assert accepted*/);
    });
});
