///<reference types="cypress"/>

describe('Company form', () => {
    beforeEach(() => {
        cy.visit('/companyRegistraction');
    });

    it.only().('check for form heading', () => {
        cy.contains('Search for your next candidate').should('be.visible');
    });

    it('assert reqular name', () => {
        cy.get('input[name="name"')
            .click()
            .type('XYZ Limited')
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

    it('assert optional vat number', () => {
        cy.get('@vatNumber')
            .click()
            .type('{enter}')
            .should(/*assert pass*/);
    });
});

describe('create user company', () => {
    beforeEach(() => {
        cy.visit('/companyForm');

        cy.get('input[name=name]').as('name');
        cy.get('input[name=address]').as('address');
        cy.get('input[name=vatNumber]').as('vatNumber');
        cy.get('input[name=countryAndCity]').as('countryAndCity');

        // companyUser
        cy.fixture('users/companyUser.json', 'utf-8').then(company => {
            // text context
            this.company = company;
        });
    });

    it('create a new company on submit', () => {
        cy.get('@name')
            .click()
            .type(this.company.companyName);

        cy.get('@address')
            .click()
            .type(this.company.address);

        cy.get('@countryAndCity')
            .click()
            .type(this.company.countryAndCity);

        cy.get('@vatNumber')
            .click()
            .type(this.company.vatNumber);

        cy.get('button').click();
    });
});
