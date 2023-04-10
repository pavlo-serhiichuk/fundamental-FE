import {TestAsyncThunk} from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import {userActions} from 'entities/User'
import {loginByUsername} from './loginByUsername'


describe('loginByUsername.test', () => {

  test('success login', async () => {
    const userValue = {username: '123', id: '1'}

    const thunk = new TestAsyncThunk(loginByUsername)

    thunk.api.post.mockReturnValue(Promise.resolve({data: userValue}))
    const action = await thunk.callThunk({username: '123', password: '123'})

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(thunk.api.post).toHaveBeenCalled()
    expect(action.meta.requestStatus).toBe('fulfilled')
    expect(action.payload).toEqual(userValue)
  })

  test('error login', async () => {
    const thunk = new TestAsyncThunk(loginByUsername)
    thunk.api.post.mockReturnValue(Promise.resolve({status: 403}))

    const action = await thunk.callThunk({username: '123', password: '123'})

    expect(thunk.api.post).toHaveBeenCalled()
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(action.meta.requestStatus).toBe('rejected')
    expect(action.payload).toEqual('Wrong username or password')
  })
})