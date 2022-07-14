/// <reference types="Cypress" />
describe('dashboard read only test', () => {
  it('should check that version and namespace information is displayed', () => {
    cy.visit(Cypress.env('dogfoodingURL'));
    cy.url().should('include', '/about');

    cy.get('#main-content-header').contains('About Tekton');
    cy.get();
    cy.get('#tkn--about--dashboard-tile > h3').contains('Dashboard');
    cy.get('#tkn--about--dashboard-tile > dl > :nth-child(4)').should(
      'be.visible'
    );
    cy.get('dl > :nth-child(6)').contains('v0.');
  });
});
