import {StateSchema} from 'app/providers/StoreProvider'
import {createSelector} from '@reduxjs/toolkit'

export const getUIScroll = (state: StateSchema) => state.uiDetector.scroll
export const getUIScrollByPath = createSelector(
  getUIScroll,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0
)