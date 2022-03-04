describe('Open a recipe', () => {
    it('Opens a recipe', () => {
        cy.visit('http://localhost:3000/')
        cy.get('.recipe').first().click()
    })
  })

describe('Create a recipe', () => {
    it('Create a recipe (see consol.log)', () => {
        cy.visit('http://localhost:3000/')
        cy.get('.ingredient').first().click()
        cy.get('.ingredient').last().click()
        cy.get('.createRecipe').last().click()
    })
})