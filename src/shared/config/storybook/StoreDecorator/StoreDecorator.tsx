import {Story} from '@storybook/react'
import {loginReducer} from '@/features/AuthByUsername/model/slice/loginSlice'
import {StateSchema, StoreProvider} from '@/app/providers/StoreProvider'
import {ReducersList} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {articleDetailsReducer} from '@/entities/Article/model/slice/articleDetailsSlice'
import {addCommentFormReducer} from '@/features/addCommentForm/model/slice/addCommentFormSlice'
import {articleDetailsPageReducer} from '@/pages/ArticleDetailsPage/testing'
import {profileReducer} from '@/features/editableProfileCard'

const defAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  // @ts-ignore
  articleDetailsPage: articleDetailsPageReducer
}

export const
  StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList
) => (StoryComponent: Story) => (
  <StoreProvider initialState={state} asyncReducers={{...defAsyncReducers, ...asyncReducers}}>
    <StoryComponent />
  </StoreProvider>
)