import {StateSchema} from 'app/providers/StoreProvider'
import {getProfileForm} from './getProfileForm'
import {Country} from 'entities/Country'
import {Currency} from 'entities/Currency'


const data = {
  username: 'admin',
  age: 33,
  country: Country.Ukraine,
  lastname: 'Serh',
  firstname: 'Pavlo',
  city: 'Vii',
  currency: Currency.GRN,
}

describe('getProfileForm.test', () => {
  test('should return filled part of state', () => {
    const state: DeepPartial<StateSchema> = {profile:
        {
          form: data
        }}
    expect(getProfileForm(state as StateSchema)).toEqual( data)
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getProfileForm(state as StateSchema)).toEqual(undefined)
  })
})