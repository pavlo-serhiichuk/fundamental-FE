import {configureStore, ReducersMapObject} from '@reduxjs/toolkit'
import {StateSchema} from './StateSchema'
import {counterReducer} from 'entities/Counter'
import {userReducer} from 'entities/User'
import {loginReducer} from 'features/AuthByUsername/model/slice/loginSlice'

export function createReduxStore (initialState?: StateSchema) {
                        // тип          // дженерик
  const storeReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginReducer
  }

  return configureStore<StateSchema>({
    reducer: storeReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState
  })
}
