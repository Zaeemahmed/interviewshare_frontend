// input value in input field
Cypress.Commands.add('input', (name, input, clickEnter) => {
    const inputTerm = clickEnter ? `${input}{enter}` : `${input}`;
    cy.get(`input[name="${name}"]`)
        .as('input')
        .click()
        .type(`${inputTerm}`);

    return cy.get('@input');
});
