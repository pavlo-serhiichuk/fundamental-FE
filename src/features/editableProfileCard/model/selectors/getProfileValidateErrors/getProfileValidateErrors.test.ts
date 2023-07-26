import {StateSchema} from '@/app/providers/StoreProvider'
import {getProfileValidateErrors} from './getProfileValidateErrors'
import {ValidateProfileError} from '../../../model/consts/consts'

describe('getProfileValidateErrors.test', () => {
  test('should return filled validateErrors', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: [
          ValidateProfileError.SERVER_ERROR,
          ValidateProfileError.NO_DATA,
        ]
      }
    }
    expect(getProfileValidateErrors(state as StateSchema)).toEqual( [
      ValidateProfileError.SERVER_ERROR,
      ValidateProfileError.NO_DATA,
    ] )
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined)
  })
})