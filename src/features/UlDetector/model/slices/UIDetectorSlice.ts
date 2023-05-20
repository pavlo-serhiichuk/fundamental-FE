import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {UIDetectorSchema} from '../../model/types/UIDetectorSchema'

const initialState: UIDetectorSchema = {
  scroll: {}
}

export const UIDetectorSlice = createSlice({
  name: 'UIDetectorSlice',
  initialState,
  reducers: {
    setScroll: (state, {payload}: PayloadAction<{path: string; position: number}>) => {
      state.scroll[payload.path] = payload.position
    }
  }
})

export const { actions: uiDetectorActions } = UIDetectorSlice
export const { reducer: uiDetectorReducer } = UIDetectorSlice
