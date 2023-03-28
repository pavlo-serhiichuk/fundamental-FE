import {StateSchema} from 'app/providers/StoreProvider'
import {AsyncThunkAction} from '@reduxjs/toolkit'
import {loginByUsername} from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername'

// @ts-ignore
type ActionCreatorType<Return,  Arg, RejectedValue> = AsyncThunkAction<Return,  Arg, {rejectedValue: RejectedValue}>

export class TestAsyncThunk<Return,  Arg, RejectedValue> {
  dispatch: jest.MockedFn<any>
  getState: () => StateSchema
  actionCreator: (arg: Arg) => ActionCreatorType<Return,  Arg, RejectedValue>

  constructor(actionCreator: (arg: Arg) => ActionCreatorType<Return,  Arg, RejectedValue> ) {
    this.actionCreator = actionCreator
    this.dispatch = jest.fn()
    this.getState = jest.fn()
  }

  async callThunk(arg: Arg) {
    // loginByUsername === createAsyncThunk
    const actionCreator = this.actionCreator(arg)

    // результат роботи loginByUsername - екшнКріейтор
    const action = await actionCreator(this.dispatch, this.getState, undefined)

    return action
  }
}