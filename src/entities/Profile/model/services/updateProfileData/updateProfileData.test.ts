import {updateProfileData} from './updateProfileData'
import {fetchProfileData, ValidateProfileError} from 'entities/Profile'
import {Country} from 'entities/Country'
import {Currency} from 'entities/Currency'
import {TestAsyncThunk} from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

const data = {
  username: 'admin',
  age: 33,
  country: Country.Ukraine,
  lastname: 'Serh',
  firstname: 'Pavlo',
  city: 'Vii',
  currency: Currency.GRN,
}

describe('updateProfileData.test', () => {

  test('success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data
      }
    })

    thunk.api.put.mockReturnValue(Promise.resolve({data}))

    const action = await thunk.callThunk()

    expect(thunk.api.put).toHaveBeenCalled()
    expect(action.meta.requestStatus).toBe('fulfilled')
    expect(action.payload).toEqual(data)
  })


  test('error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data
      }
    })
    thunk.api.put.mockReturnValue(Promise.resolve({status: 403}))

    const action = await thunk.callThunk()

    expect(action.meta.requestStatus).toBe('rejected')
    expect(action.payload).toEqual([ValidateProfileError.SERVER_ERROR])
  })

  test('validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: {...data, firstname: ''}
      }
    })

    const action = await thunk.callThunk()

    expect(action.meta.requestStatus).toBe('rejected')
    expect(action.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
  })
})