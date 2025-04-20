/// <reference types='Cypress' />

describe('Produtos', () => {
    it('Procurando e adicionando produto no carrinho', () => {
        cy.login('herod@qazando.com.br', '123456')
        cy.get('.swal2-confirm').click()
        cy.get(':nth-child(1) > .search_width > img').click()
        cy.get('form > input').type('Monitor')
        cy.get('.btn').click()
        cy.get('#swal2-title').should('be.visible')
        cy.get('.swal2-confirm').click()
        cy.get(':nth-child(1) > .product_wrappers_one > .content > .title > a').click()
        cy.get('.links_Product_areas > .theme-btn-one').click()
        cy.get('#swal2-title').should('be.visible')
      });
});