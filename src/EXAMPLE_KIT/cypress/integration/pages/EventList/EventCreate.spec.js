import {  } from 'react-i18next';

context('EventCreate', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/eventCreate');
    });


    it('Event Create', () => {

        cy.get('#name')
            .type('TEST_EVENT').should('have.value', 'TEST_EVENT')

        const randomMnemonic = new Date().getTime().toString().substr(-4,4);
        cy.get('#mnemonic')
            .type('TEST'+randomMnemonic).should('have.value', 'TEST'+randomMnemonic)

        cy.get('#location')
            .type('Innenstadt Gebäude 1').should('have.value', 'Innenstadt Gebäude 1')

        cy.get('#city')
            .type('Berlin').should('have.value', 'Berlin')

        cy.get('#start_time')
            .click().get('.MuiButton-textPrimary').click({multiple:true});

        cy.get('#end_time')
            .click().get('.MuiButton-textPrimary').click({multiple:true});

        cy.get('#language').click().get('[data-cy=optionlanguage0]').click({multiple:true});

        cy.get('[type=submit]').click();
    });

});


context('EventDelete', () => {


    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

    it('Event Delete Button', () => {
        cy.get('TEST_EVENT');//.get('[data-cy=EventDelete]').click({multiple: true});

    });
});
