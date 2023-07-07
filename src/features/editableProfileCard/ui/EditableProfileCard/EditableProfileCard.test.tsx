import {EditableProfileCard} from './EditableProfileCard'
import {componentRender} from 'shared/lib/tests/componentRender/componentRender'
import {screen} from '@testing-library/react'
import {Profile} from 'entities/Profile'
import {Currency} from 'entities/Currency'
import {Country} from 'entities/Country'
import {profileReducer} from 'features/editableProfileCard'
import userEvent from '@testing-library/user-event'
import {$api} from 'shared/api/api'

const profile: Profile = {
  id: '1',
  firstname: 'admin',
  lastname: 'admin',
  age: 33,
  currency: Currency.GRN,
  country: Country.Ukraine,
  city: 'Kiyv',
  username: 'admin123'
}

const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile,
    },
    user: {
      authData: {id: '1', username: 'admin'}
    }
  },
  asyncReducers: {profile: profileReducer},
}


describe('features/EditableProfileCard', () => {
  test('switch from readonly to edit mode', async () => {
    componentRender(<EditableProfileCard id={'1'} />, options)
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))
    expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument()
  })

  test('after Cancel values should be turned back', async () => {
    componentRender(<EditableProfileCard id={'1'} />, options)
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))
    await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))
    await userEvent.clear(screen.getByTestId('ProfileCard.lastname'))

    await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'newname')
    await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'newname')

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'))
    expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('admin')
    expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('admin')
  })

  test('should appear a validation Error', async () => {
    componentRender(<EditableProfileCard id={'1'} />, options)
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))
    await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'))
    expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument()
  })

  test('if there is no valid error, than app should make a PUT request', async () => {
    const mockPutRequest = jest.spyOn($api, 'put')
    componentRender(<EditableProfileCard id={'1'} />, options)
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))
    await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))
    await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'new_user')
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'))
    expect(mockPutRequest).toHaveBeenCalled()
  })
})