import axios from 'axios';
import {loginByUsername} from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername'
import {Dispatch} from '@reduxjs/toolkit'
import {StateSchema} from 'app/providers/StoreProvider'
import {userActions} from 'entities/User'
import {TestAsyncThunk} from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

describe('loginByUsername.test', () => {
  // //обявлення типів
  // let dispatch: Dispatch
  // let getState: () => StateSchema
  //
  // beforeEach(() => {
  //   dispatch = jest.fn()
  //   getState = jest.fn()
  // })

  // test('success login', async () => {
  //   const userValue = {username: '123', id: '1'}
  //   mockedAxios.post.mockReturnValue(Promise.resolve({data: userValue}))
  //   // loginByUsername === createAsyncThunk
  //   const actionCreator = loginByUsername({username: '123', password: '123'})
  //
  //   // результат роботи loginByUsername - екшнКріейтор
  //   const action = await actionCreator(dispatch, getState, undefined)
  //
  //   console.log(action)
  //   expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
  //   expect(dispatch).toHaveBeenCalledTimes(3)
  //   expect(mockedAxios.post).toHaveBeenCalled()
  //   expect(action.meta.requestStatus).toBe('fulfilled')
  //   expect(action.payload).toEqual(userValue)
  // })
  //
  // test('error login', async () => {
  //   const userValue = {username: '123', id: '1'}
  //   mockedAxios.post.mockReturnValue(Promise.resolve({status: 403}))
  //   // loginByUsername === createAsyncThunk
  //   const actionCreator = loginByUsername({username: '123', password: '123'})
  //
  //   // результат роботи loginByUsername - екшнКріейтор
  //   const action = await actionCreator(dispatch, getState, undefined)
  //
  //   expect(mockedAxios.post).toHaveBeenCalled()
  //   expect(dispatch).toHaveBeenCalledTimes(2)
  //   expect(action.meta.requestStatus).toBe('rejected')
  //   expect(action.payload).toEqual('Wrong username or password')
  // })

  test('success login', async () => {
    const userValue = {username: '123', id: '1'}
    mockedAxios.post.mockReturnValue(Promise.resolve({data: userValue}))

    const thunk = new TestAsyncThunk(loginByUsername)
    const action = await thunk.callThunk({username: '123', password: '123'})

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(action.meta.requestStatus).toBe('fulfilled')
    expect(action.payload).toEqual(userValue)
  })

  test('error login', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({status: 403}))
    const thunk = new TestAsyncThunk(loginByUsername)
    const action = await thunk.callThunk({username: '123', password: '123'})


    expect(mockedAxios.post).toHaveBeenCalled()
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(action.meta.requestStatus).toBe('rejected')
    expect(action.payload).toEqual('Wrong username or password')
  })
})