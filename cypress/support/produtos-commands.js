/// <reference types='Cypress' />

Cypress.Commands.add('buscar', (produto) => {
    cy.get('.swal2-confirm').click()
    cy.get(':nth-child(1) > .search_width > img').click()
    cy.get('form > input').type(produto)
    cy.get('.btn').click()
  })