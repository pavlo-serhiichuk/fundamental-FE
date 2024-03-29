import {FC, ReactNode, useEffect} from 'react'
import {useDispatch, useStore} from 'react-redux'
import {ReduxStoreWithManager, StateSchema} from '@/app/providers/StoreProvider'
import {StateSchemaKey} from '@/app/providers/StoreProvider/config/StateSchema'
import {Reducer} from '@reduxjs/toolkit'

//all reducers
export type ReducersList = {
  [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>
}

interface DynamicModuleLoaderProps {
  children: ReactNode
  reducers: ReducersList
  removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const {
    children,
    reducers,
    removeAfterUnmount = true
  } = props

  const dispatch = useDispatch()
  const store = useStore() as ReduxStoreWithManager

  useEffect(() => {
    const mountedReducers = store.reducerManager.getReducerMap()
    Object.entries(reducers).forEach(([name, reducer]) => {
      const mounted = mountedReducers[name as StateSchemaKey]
      // Add new reducer only if it's absent
      if (!mounted) {
        store.reducerManager.add(name as StateSchemaKey, reducer)
        dispatch({type: `@INIT ${name} reducer`})
      }
    })
    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as StateSchemaKey)
          dispatch({type: `@DESTROY ${name} reducer`})
        })
      }
    }
  }, [])

  return (
    <>
      {children}
    </>
  )
};