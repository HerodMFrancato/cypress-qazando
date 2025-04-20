/// <reference types='Cypress' />

describe('Produtos', () => {
    it('Login com sucesso', () => {
        cy.login('herod@qazando.com.br', '123456')
        cy.get('.swal2-confirm').click()
        cy.get(':nth-child(1) > .search_width > img').click()
        cy.get('form > input').type('Monitor')
        cy.get('.btn').click()
        cy.get('#swal2-title').should('be.visible')
        cy.get('.swal2-confirm').click()
      });
});