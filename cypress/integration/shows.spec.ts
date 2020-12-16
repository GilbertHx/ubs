describe('TV Show list', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Displays a card with an image and a name after a successfull search', () => {
        const query = 'Home'
        cy.get('.searchInput').type(query)
        cy.get('.card').find('img').first().should('have.class', 'show-cover-img')
        
        cy.get('.card').find('p').first().should('have.class', 'card-title')
    })

    it('A click of an item result should add it to a table in the page', () => {
        const query = 'Home'
        cy.get('.searchInput')
        .type(query)

        cy.get('.card')
        .first()
        .click()

        cy.get('.mTable')
        .find('tbody tr')
        .should('exist')
        .and('have.length', 1)
    })

    it('A click of a row in the table should remove it from the table', () => {
        const query = 'Home'
        cy.get('.searchInput')
        .type(query)

        cy.get('.card')
        .first()
        .click()

        cy.get('.mTable')
        .find('tbody tr')
        .click()

        cy.get('.mTable')
        .should('not.exist')
    })
})