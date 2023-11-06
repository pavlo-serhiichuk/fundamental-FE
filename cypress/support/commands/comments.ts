// @ts-nocheck
export const addComment = (text: string) => {
    cy.getByTestId('AddCommentForm.Input').type(text)
    cy.getByTestId('AddCommentForm.Send').click()
}


declare global {
  namespace Cypress {
    interface Chainable {
      addComment(text: string): Chainable<void>
    }
  }
}