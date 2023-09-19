import {USER_LOCALSTORAGE} from '../../../src/shared/consts/localStorage'
import {User} from '../../../src/entities/User'
import { selectByTestId } from '../../helpers/selectByTestId'

export const updateProfile = (firstname: string, lastname: string) => {
  cy.getByTestId('EditableProfileCardHeader.EditButton').click()
  cy.getByTestId('ProfileCard.firstname').clear().type(firstname)
  cy.getByTestId('ProfileCard.lastname').clear().type(lastname)
  cy.getByTestId('EditableProfileCardHeader.SaveButton').click()
}

export const resetProfile = (profileId: string) => {
  return cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: {Authorization: 'asdg'},
    body: {
      id: "4",
      firstname: "Test",
      lastname: "User",
      age: 20,
      country: "Armenia",
      city: "Yerevan",
      username: "test-user",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw0QAlaEH4XTEh16bFUKKiKxjO_bzbLAS9bQ&usqp=CAU",
      currency: "USD"
    }
  })
}

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(firstname: string, lastname: string): Chainable<void>
      resetProfile(profileId: string): Chainable<void>
    }
  }
}