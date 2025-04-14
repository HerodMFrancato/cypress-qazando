/// <reference types='Cypress' />

describe('Login', () => {
    it('Login com sucesso', () => {
        cy.visit('https://automationpratice.com.br/')
        cy.get('.right_list_fix > :nth-child(1) > a').click()
        cy.get('#user').type('herod@qazando.com.br')
        cy.get('#password').type('123456')
        cy.get('#btnLogin').click()
        cy.get('#swal2-title').should('be.visible')
        cy.get('#swal2-title').should('have.text', 'Login realizado')
    });

    it('Login com senha invalida', () => {
        cy.visit('https://automationpratice.com.br/')
        cy.get('.right_list_fix > :nth-child(1) > a').click()
        cy.get('#user').type('herod@qazando.com.br')
        cy.get('#password').type('123')
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('be.visible')
        cy.get('.invalid_input').should('have.text', 'Senha inválida.')
    });
});