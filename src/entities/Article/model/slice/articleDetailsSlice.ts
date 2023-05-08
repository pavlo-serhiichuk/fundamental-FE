import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ArticleDetailsSchema} from '../types/articleDetailsSchema'
import {fetchArticleById} from '../services/fetchArticleById/fetchArticleById'
import {Article} from 'entities/Article'

const initialState: ArticleDetailsSchema = {
  isLoading: false,
  error: undefined,
  data: undefined
}

export const articleDetailsSlice = createSlice({
  name: 'articleDetailsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchArticleById.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    })
      .addCase(fetchArticleById.fulfilled, (
        state,
        action: PayloadAction<Article>,
      ) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  }
})

export const { actions: articleDetailsActions } = articleDetailsSlice
export const { reducer: articleDetailsReducer } = articleDetailsSlice