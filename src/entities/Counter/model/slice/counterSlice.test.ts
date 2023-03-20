import {counterReducer, CounterSchema} from 'entities/Counter'
import {StateSchema} from 'app/providers/StoreProvider'
import {DeepPartial} from '@reduxjs/toolkit'
import {counterActions} from 'entities/Counter/model/slice/counterSlice'

describe('counterSlice.test', () => {
  test('decrement', () => {
    const state: CounterSchema  = {value: 10}

    expect(counterReducer(state , counterActions.decrement()))
      .toEqual({value: 9})
  })

  test('increment', () => {
    const state: CounterSchema  = {value: 10}

    expect(counterReducer(state , counterActions.increment()))
      .toEqual({value: 11})
  })

  test('works with empty state', () => {

    expect(counterReducer(undefined, counterActions.increment()))
      .toEqual({value: 11})
  })
})