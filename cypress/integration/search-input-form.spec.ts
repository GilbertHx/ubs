/// <reference types="cypress" />

describe('Search Input form', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Focuses input on load', () => {
        cy.focused().should('have.class', 'searchInput')
    })

    it('Accepts query to search for', () => {
        const typedSearch = 'This'
        cy.get('.searchInput').type(typedSearch).should('have.value', typedSearch)
    })


    context('TV Show requests', () => {
        it('Gets some 10 tv shows and renders them', () => {
            const query = 'Girl'
            cy.get('.searchInput').type(query) 
            cy.get('.card')
            .should('have.length', 10)
        })
    })
})