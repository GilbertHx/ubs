/// <reference types="cypress" />

describe('App initialization', () => {
    it('Loads with no shows on the page', () => {
        cy.visit('/')
        cy.get('.card ').should('not.exist')
        cy.get('.showTable ').should('not.exist')
    })
})