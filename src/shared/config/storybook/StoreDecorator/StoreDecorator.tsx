import {Story} from '@storybook/react'
import {DeepPartial, ReducersMapObject} from '@reduxjs/toolkit'
import {loginReducer} from 'features/AuthByUsername/model/slice/loginSlice'
import {StateSchema, StoreProvider} from 'app/providers/StoreProvider'

const defAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer
}

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
) => (StoryComponent: Story) => (
  <StoreProvider initialState={state} asyncReducers={{...defAsyncReducers, ...asyncReducers}}>
    <StoryComponent />
  </StoreProvider>
)