/// <reference types='Cypress' />

describe('Produtos', () => {
    it('Procurando e adicionando produto no carrinho', () => {
        cy.login('herod@qazando.com.br', '123456')
        cy.buscar('monitor')
        cy.get('#swal2-title').should('be.visible')
        cy.get('.swal2-confirm').click()
        cy.get(':nth-child(1) > .product_wrappers_one > .content > .title > a').click()
        cy.get('.links_Product_areas > .theme-btn-one').click()
        cy.get('#swal2-title').should('be.visible')
      });

      it('Procurando e adicionando produto no carrinho e removendo', () => {
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
        cy.get(':nth-child(3) > .offcanvas-toggle > .fa').click()
        cy.get('.offcanvas-cart > :nth-child(4) > .text-right > .offcanvas-wishlist-item-delete > .fa').click()
      });

      it.only('Finalizando compra de produto', () => {
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
        cy.get(':nth-child(3) > .offcanvas-toggle > .fa').click()
        cy.get('.offcanvas-cart-action-button > :nth-child(2) > .theme-btn-one').click()
        cy.get('#fname').type('teste')
        cy.get('#lname').type('teste')
        cy.get('#cname').type('teste')
        cy.get('#email').type('herod@qazando.com.br')
        cy.get('#country').select('usa')
        cy.get('#city').select('Aland Islands')
        cy.get('#zip').type('00000000')
        cy.get('#faddress').type('Rua Teste')
        cy.get('#messages').type('No comments')
        cy.get('.checkout-area-bg > .theme-btn-one').click()
        cy.get(':nth-child(2) > h3').should('be.visible')
        cy.get(':nth-child(2) > :nth-child(2) > .theme-btn-one').click()
        cy.get('h2').should('be.visible')
      });

      
});