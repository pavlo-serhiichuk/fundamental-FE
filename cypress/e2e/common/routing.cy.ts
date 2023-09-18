import {selectByTestId} from '../../helpers/selectByTestId'

describe('Routing', () => {
  describe('User is not auth', () => {
    it('Go to main page', () => {
      cy.visit('/')
      cy.get(selectByTestId('MainPage')).should('exist')
    })

    it('User open profile page', () => {
      cy.visit('/profile/1')
      cy.get(selectByTestId('MainPage')).should('exist')
    })

    it('User open un existed route', () => {
      cy.visit('/asdfsfdsfdfg')
      cy.get(selectByTestId('NotFoundPage')).should('exist')
    })
  })

  describe('User is auth', () => {
    beforeEach(() => {
      cy.login()
    })

    it('Go to main page', () => {
      cy.visit('/profile/1')
      cy.get(selectByTestId('ProfilePage')).should('exist')
    })

    it('Go to articles page', () => {
      cy.login('admin', '123')
      cy.visit('/articles')
      cy.get(selectByTestId('ArticlesPage')).should('exist')
    })
  })
})