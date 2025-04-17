/// <reference types='Cypress' />

Cypress.Commands.add('login', (email, senha) => {
    cy.visit('https://automationpratice.com.br/')
    cy.get('.right_list_fix > :nth-child(1) > a').click()
  
    if (email !== '') {
      cy.get('#user').type(email)
    }
  
    if (senha !== '') {
      cy.get('#password').type(senha)
    }
  
    cy.get('#btnLogin').click()
  })
  