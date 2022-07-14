/// <reference types="Cypress" />
describe('dashboard settings page test', () => {
  it('should check and verify the settings', () => {
    cy.visit(Cypress.env('dogfoodingURL'));
    cy.url().should('include', '/about');

    cy.get(
      '.bx--side-nav__items > :nth-child(4) > .bx--side-nav__link > .bx--side-nav__link-text'
    ).click();
    cy.url().should('include', '/settings');

    // default is selected
    cy.get('.bx--tile--is-selected').contains('System');
    cy.get(
      '.bx--tile--is-selected > .bx--tile__checkmark > svg > [d="M8,1C4.1,1,1,4.1,1,8c0,3.9,3.1,7,7,7s7-3.1,7-7C15,4.1,11.9,1,8,1z M7,11L4.3,8.3l0.9-0.8L7,9.3l4-3.9l0.9,0.8L7,11z"]'
    ).should('be.visible');

    // select Dark
    cy.get('[for="id2"] > .bx--tile-content').click();
    cy.get('.bx--tile--is-selected').contains('Dark');

    // select Light
    cy.get('[for="id3"] > .bx--tile-content').click();
    cy.get('.bx--tile--is-selected').contains('Light');

    //log settings
    cy.get('#tkn--log-timestamps-toggle').should('not.be.checked');
    cy.get('.bx--toggle__switch').click();
    cy.get('#tkn--log-timestamps-toggle').should('be.checked');

    // reset to original state
    cy.get('[for="id1"] > .bx--tile-content').click();
    cy.get('.bx--toggle__switch').click();
    cy.get('#tkn--log-timestamps-toggle').should('not.be.checked');
  });
});
