it('user flow', () => {
  cy.visit('http://localhost:5000/')
  cy.url().should('contain', '/search/?sortBy=vote_average&sortOrder=desc')
  cy.get('#search').type('boss')
  cy.contains('SEARCH').click()
  cy.url().should('include', '/search/boss?sortBy=vote_average&sortOrder=desc')
  cy.get('#search').should('have.value', 'boss')
  cy.get('main').within(() => {
    cy.get('div > img').should('have.length', 3);
  })
  cy.get('main').within(() => {
    cy.get('div > img').first().click();
  })
  cy.get('#search').should('not.exist')
  cy.get('SEARCH').should('not.exist')
})
