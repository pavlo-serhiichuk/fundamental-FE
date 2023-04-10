import {Story} from '@storybook/react'
import {loginReducer} from 'features/AuthByUsername/model/slice/loginSlice'
import {StateSchema, StoreProvider} from 'app/providers/StoreProvider'
import {ReducersList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const defAsyncReducers: ReducersList = {
  loginForm: loginReducer
}

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList
) => (StoryComponent: Story) => (
  <StoreProvider initialState={state} asyncReducers={{...defAsyncReducers, ...asyncReducers}}>
    <StoryComponent />
  </StoreProvider>
)