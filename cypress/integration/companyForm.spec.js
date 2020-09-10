///<reference types="cypress"/>

describe('Company form validation', () => {
    beforeEach(() => {
        cy.visit('/companyRegistration');
    });

    it('check for form heading', () => {
        cy.contains('Search for your next candidate').should('be.visible');
    });

    it('indicate focus', () => {
        cy.get('input[name="name"]')
            .click()
            .should('have.attr', 'aria-invalid', 'false');
    });

    it('assert reqular name', () => {
        cy.get('input[name="name"]')
            .click()
            .type('XYZ Limited')
            .should('have.attr', 'aria-invalid', 'false');
    });

    it('assert french characters', () => {
        cy.get('input[name="name"]')
            .click()
            .type('Céntric Example')
            .should('have.attr', 'aria-invalid', 'false');
    });

    it('assert irregular names', () => {
        cy.get('input[name="name"]')
            .click()
            .type('xy')
            .should('have.attr', 'aria-invalid', 'true');
    });

    it('assert regular address', () => {
        cy.get('input[name="address"]')
            .click()
            .type('This is over 10 character')
            .should('have.attr', 'aria-invalid', 'false');
    });

    it('ignore optional value added tax number', () => {
        cy.get('input[name="vatNumber"]')
            .click()
            .type('{enter}')
            .should('have.attr', 'aria-invalid', 'false');
    });

    it('vat should be a number', () => {
        cy.get('input[name="vatNumber"]')
            .click()
            .type('abcde')
            .should('have.attr', 'aria-invalid', 'false');
    });
});

describe('create user company', () => {
    beforeEach(() => {
        cy.visit('/companyRegistration');
    });

    it('create a new company on submit', () => {
        cy.fixture('companyUser.json')
            .as('company')
            .then(company => {
                cy.get('input[name="name"]')
                    .click()
                    .type(company.name);

                cy.get('input[name="address"]')
                    .click()
                    .type(company.address);

                cy.get('input[name="countryAndCity"]')
                    .click()
                    .type(company.countryAndCity);

                cy.get('input[name="vatNumber"]')
                    .click()
                    .type(company.vatNumber);
            });
    });
});

// TODO
// stub form submision response
// VAT number format
// Vat should be a number
