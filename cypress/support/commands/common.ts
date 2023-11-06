// @ts-nocheck
import {USER_LOCALSTORAGE} from '../../../src/shared/consts/localStorage'
import {User} from '../../../src/entities/User'
import { selectByTestId } from '../../helpers/selectByTestId'

// eslint-disable-next-line @typescript-eslint/no-inferrable-types
export const login = (username: string = 'test-user', password: string = '111') => {
  return cy.request({
    method: 'POST',
    url: `http://localhost:8000/login`,
    body: {
      username,
      password,
    },
  }).then(({body}) => {
    window.localStorage.setItem(USER_LOCALSTORAGE, JSON.stringify(body))
    return body
  })
}

export const getByTestId = (testId: string) => {
  return cy.get(selectByTestId(testId))
}

declare global {
  namespace Cypress {
    interface Chainable {
      login(username?: string, password?: string): Chainable<User>
      getByTestId(testId: string): Chainable<JQuery<HTMLElement>>
    }
  }
}