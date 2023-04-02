import {configureStore, DeepPartial, ReducersMapObject} from '@reduxjs/toolkit'
import {StateSchema} from './StateSchema'
import {counterReducer} from 'entities/Counter'
import {userReducer} from 'entities/User'
import {createReducerManager} from 'app/providers/StoreProvider/config/reducerManager'
import {$api} from 'shared/api/api'
import {To} from 'history'
import {NavigateOptions} from 'react-router'

export function createReduxStore (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void
) {
                        // тип          // дженерик
  const storeReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  }

  const reducerManager = createReducerManager(storeReducers)

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,

  // @ts-ignore
    middleware: getDefaultMiddleware => getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: $api,
          navigate
        }
      }
    })
  })
  //@ts-ignore
  store.reducerManager = reducerManager
  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
