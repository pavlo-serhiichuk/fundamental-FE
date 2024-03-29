// @ts-nocheck
export const setRate = (starsCount = 3, feedback = 'feedback') => {
    cy.getByTestId('StarRating.' + starsCount).click()
    cy.getByTestId("RatingCard.Input").type(feedback)
    cy.getByTestId("RatingCard.Send").click()
}


declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      setRate(starsCount?: number, feedback?: string): Chainable<void>
    }
  }
}