/// <reference types='Cypress' />

describe('Login', () => {
    it('Login com sucesso', () => {
        cy.login('herod@qazando.com.br', '123456')
        cy.get('#swal2-title').should('be.visible')
        cy.get('#swal2-title').should('have.text', 'Login realizado')
      });

    it('Login com senha inválida', () => {
        cy.login('herod@qazando.com.br', '123')
        cy.get('.invalid_input').should('be.visible')
        cy.get('.invalid_input').should('have.text', 'Senha inválida.')
    });

    it('Login com email inválido', () => {
        cy.login('herodqazando.com.br', '123456')
        cy.get('.invalid_input').should('be.visible')
        cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
    });

    it('Login com senha vazia', () => {
        cy.login('herod@qazando.com.br', '')
        cy.get('.invalid_input').should('be.visible')
        cy.get('.invalid_input').should('have.text', 'Senha inválida.')
      })
      
      it('Login com email vazio', () => {
        cy.login('', '123456')
        cy.get('.invalid_input').should('be.visible')
        cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
      })
});