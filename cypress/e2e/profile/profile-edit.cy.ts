let profileId = ''

describe('User is visiting a profile page', () => {
  beforeEach(() => {
    cy.visit('')
    cy.login().then(data => {
      profileId = data.id
      cy.visit(`/profile/${data.id}`)
    })
  })

  afterEach(() => {
    cy.resetProfile(profileId)
  })

  it('and profile is loading successfully', () => {
    cy.getByTestId('ProfileCard.firstname').should('have.value', 'Test')
  })

  it('and edit it', () => {
    const firstName = 'new'
    const lastName = 'lastname'
    cy.updateProfile(firstName, lastName)
    cy.getByTestId('ProfileCard.firstname').should('have.value', firstName)
    cy.getByTestId('ProfileCard.lastname').should('have.value', lastName)
  })

  // it('and edit it', () => {})
  // it('and edit it', () => {})
})