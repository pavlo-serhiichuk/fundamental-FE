import { Provider } from 'react-redux'
import {FC, ReactNode} from 'react'
import {createReduxStore} from 'app/providers/StoreProvider/config/createReduxStore'
import {StateSchema} from 'app/providers/StoreProvider/config/StateSchema'
import {DeepPartial, ReducersMapObject} from '@reduxjs/toolkit'

interface StoreProviderProps {
  children: ReactNode
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider:FC<StoreProviderProps> = (props) => {
  const {
    children,
    initialState,
    asyncReducers
  } = props

  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as  ReducersMapObject<StateSchema>
  )

  return <Provider store={store}>
    {children}
  </Provider>
}