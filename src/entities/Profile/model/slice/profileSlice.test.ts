import {profileActions, profileReducer} from './profileSlice'
import {ProfileSchema, updateProfileData, ValidateProfileError} from 'entities/Profile'
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

describe('profileSlice.test', () => {
  test('test set readonly', () => {
    const state: DeepPartial<ProfileSchema> = {readonly: false}

    expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({readonly: true})
  })

  test('test set cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = {readonly: false, validateErrors: [ValidateProfileError.NO_DATA]}

    expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
      readonly: true,
      validateErrors: []
    })
  })

  test('test update profile', () => {
    const state: DeepPartial<ProfileSchema> = {form: {username: '000'}}

    expect(
      profileReducer(state as ProfileSchema,
        profileActions.updateProfile({username: '123'})))
      .toEqual({
        form: {
          username: '123'
        }
      })
  })
  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {isLoading: false, validateErrors: [ValidateProfileError.SERVER_ERROR]}

    expect(
      profileReducer(state as ProfileSchema,
        updateProfileData.pending))
      .toEqual({
        isLoading: true,
        validateErrors: undefined
      })
  })
  test('test update profile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {isLoading: true}

    expect(
      profileReducer(state as ProfileSchema,
        updateProfileData.fulfilled(data, '')))
      .toEqual({
        isLoading: false,
        validateErrors: undefined,
        readonly: true,
        form: data,
        data: data
      })
  })
})