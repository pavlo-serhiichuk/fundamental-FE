describe('User opens an articles page', () => {
  beforeEach(() => {
    cy.login().then(() => {
      cy.visit('articles')
    })
  })
  it('and articles upload successfully', () => {
    cy.getByTestId('ArticleList').should('exist')
    cy.getByTestId('ArticleItem').should('have.length.greaterThan', 3)
  })
  // it('passes', () => {
  //   cy.login()
  //   cy.visit('https://example.cypress.io')
  // })
})