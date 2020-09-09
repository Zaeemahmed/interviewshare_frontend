import {  } from 'react-i18next';

context('EventList', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('Renders EventList', () => {
        // https://on.cypress.io/viewport

        // cy.get('#navbar').should('be.visible');
        cy.viewport(320, 480);

        // the navbar should have collapse since our screen is smaller
        // cy.get('#navbar').should('not.be.visible');
        // cy.get('.navbar-toggle')
        //     .should('be.visible')
        //     .click();
        // cy.get('.nav')
        //     .find('a')
        //     .should('be.visible');

        // lets see what our app looks like on a super large screen
        cy.viewport(2999, 2999);

        // cy.viewport() accepts a set of preset sizes
        // to easily set the screen to a device's width and height

        // We added a cy.wait() between each viewport change so you can see
        // the change otherwise it is a little too fast to see :)

        cy.viewport('macbook-15');
        cy.wait(200);
    });

    it('Event Create Button', () => {
        cy.get('[data-cy=EventCreate]').click();

        cy.location('pathname').should('include', 'eventCreate')
    });
});

