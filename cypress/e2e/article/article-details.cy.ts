let currentArticleId = ''

describe('User open an article page', () => {
  beforeEach(() => {
    cy.login().then(() => {
      cy.visit('articles')
    })
    cy.createArticle().then(article => {
      currentArticleId = article.id
      cy.visit(`articles/${article.id}`)
    })
  })

  afterEach(() => {
    cy.removeArticle(currentArticleId)
  })

  it('and see article content', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist' )
  })

  it('and see article recommendations list', () => {
    cy.getByTestId('ArticleRecommendationsList').should('exist' )
  })

  it('and left a comment', () => {
    cy.getByTestId('ArticleDetails.Info')
    cy.getByTestId('AddCommentForm.Input').scrollIntoView()
    cy.addComment('comment text')
    cy.getByTestId('CommentList').should('exist')
  })

  it('and estimate the article', () => {
    cy.getByTestId('ArticleDetails.Info')
    cy.getByTestId('RatingCard').scrollIntoView()
    cy.setRate(3, 'feedback')
    cy.get(`[data-selected=true]`).should('have.length', 3)
  })
})