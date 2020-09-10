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
                    cy.input('name', user.invalidName, false).then(input => {
                        expect(input).to.have.attr('aria-invalid', 'true');
                    });
                });
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

        it('invalid email', () => {
            cy.input('email', '0kola@g@mil.com', false);
            cy.contains(/invalid email/i).should('be.visible');
        });

        it('manually insert date', () => {
            cy.task('date', 2).then(date => {
                cy.input('date', date, false).then(input => {
                    expect(input).to.have.attr('aria-invalid', 'false');
                });
            });
        });

        it('invalid older date from current dates', () => {
            cy.task('date', -3).then(date => {
                cy.input('date', date, false).then(input => {
                    expect(input).to.have.attr('aria-invalid', 'true');
                });
            });
        });

        it('valid message', () => {
            cy.fixture('eventSetup.json')
                .as('user')
                .then(user => {
                    cy.input('message', user.message, false).then(input => {
                        expect(input).to.have.attr('aria-invalid', 'false');
                    });
                });
        });

        it('test date picker', () => {
            cy.get(
                'path[d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"]'
            ).click();

            cy.contains(`${new Date().getFullYear()}`).click();
            cy.contains(`${new Date().getFullYear() + 3}`).click();
            cy.contains('OK').click();

            cy.get('input[name="date"]').should(
                'have.attr',
                'aria-invalid',
                'false'
            );
        });
    });
});

describe('create', () => {
    it('event setup', () => {
        cy.input('name', 'John Doe', true)
            .type('johnyDoe@john.doe{enter}')
            .type('10/12/2034');

        cy.fixtures('eventSetup.json')
            .as('user')
            .then(user => {
                cy.input('message', user.message, false);
            });
    });

    // TODO
    // stub server response on form is submitted
});
