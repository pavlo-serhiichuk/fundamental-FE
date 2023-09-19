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

  it('on stabs(fixtures)', () => {
    cy.intercept('GET', '**/articles?*', {fixture: 'articles.json'})
    cy.getByTestId('ArticleList').should('exist')
    cy.getByTestId('ArticleItem').should('have.length.greaterThan', 3)
  })

  it.skip('and articles doesnt load', () => {
    cy.getByTestId('Parallel university test id').should('exist')
  })
})