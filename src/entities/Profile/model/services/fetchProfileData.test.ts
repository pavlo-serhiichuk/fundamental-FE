import {TestAsyncThunk} from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import {fetchProfileData} from './fetchProfileData'
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

describe('fetchProfileData.test', () => {

  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)

    thunk.api.get.mockReturnValue(Promise.resolve({data}))
    const action = await thunk.callThunk()

    expect(thunk.api.get).toHaveBeenCalled()
    expect(action.meta.requestStatus).toBe('fulfilled')
    expect(action.payload).toEqual(data)
  })

  test('error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({status: 403}))

    const action = await thunk.callThunk()

    expect(action.meta.requestStatus).toBe('rejected')
  })
})