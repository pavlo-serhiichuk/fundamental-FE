// @ts-ignore
import React from 'react'
import {EditableProfileCard} from '../../src/features/editableProfileCard'
import {TestProvider} from '../../src/shared/lib/tests/componentRender/componentRender'

const TEST_USER_ID = '4'

const options = {
  initialState: {
    user: {
      authData: {
        id: TEST_USER_ID
      }
    }
  }
}

describe('EditableProfileCard.cy.tsx', () => {
  it('playground', () => {
    cy.intercept('**/profile/*', {fixture: 'profile.json'})


    cy.mount(
      <TestProvider options={options}>
        <EditableProfileCard id={TEST_USER_ID} />
      </TestProvider>
    )
  })
})