///<reference types="cypress"/>

describe('Event Setup Form', () => {
    beforeEach(() => {
        cy.visit('/eventsetup');
    });

    context('validates', () => {
        it('valid name', () => {
            cy.fixture('eventSetup.json')
                .as('user')
                .then(user => {
                    cy.input('name', user.name, false).then(input => {
                        expect(input).to.have.attr('aria-invalid', 'false');
                    });
                });
        });

        it('invalid name', () => {
            cy.fixture('eventSetup.json')
                .as('user')
                .then(user => {
                    cy.input('name', user.invalidName, false);
                });
            cy.contains(/Name with atleast 5 character/i).should('be.visible');
        });

        it('valid email', () => {
            cy.fixture('eventSetup.json')
                .as('user')
                .then(user => {
                    cy.input('email', user.validEmail, false).then(input => {
                        expect(input).to.have.attr('aria-invalid', 'false');
                    });
                });
        });

        it('invalid email', () => {
            cy.fixture('eventSetup.json')
                .as('user')
                .then(user => {
                    cy.input('email', user.invalidEmail, false);
                });
            cy.contains(/invalid email/i).should('be.visible');
        });
    });
});
