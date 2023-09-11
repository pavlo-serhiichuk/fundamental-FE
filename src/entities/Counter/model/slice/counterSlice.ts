import type { PayloadAction } from '@reduxjs/toolkit'
import {CounterSchema} from '@/entities/Counter'
import {buildSlice} from '@/shared/lib/store'

const initialState: CounterSchema = {
  value: 10,
}

export const counterSlice = buildSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const {
  actions: counterActions,
  reducer: counterReducer,
  useActions: useCounterActions
} = counterSlice
