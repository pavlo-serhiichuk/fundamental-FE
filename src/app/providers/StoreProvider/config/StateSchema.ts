import {CounterSchema} from '@/entities/Counter'
import {UserSchema} from '@/entities/User'
import {LoginSchema} from '@/features/AuthByUsername'
import {AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject} from '@reduxjs/toolkit'
import {AxiosInstance} from 'axios'
import {ArticleDetailsSchema} from '@/entities/Article'
import {
  ArticleDetailsCommentsSchema,
  ArticleDetailsPageRecSchema,
  ArticleDetailsPageSchema
} from '@/pages/ArticleDetailsPage'
import {AddCommentFormSchema} from '@/features/addCommentForm'
import {ArticlesPageSchema} from '@/pages/ArticlesPage'
import {UIDetectorSchema} from '@/features/UlDetector'
import {rtkApi} from '@/shared/api/rtkApi'
import {ProfileSchema} from '@/features/editableProfileCard'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
  uiDetector: UIDetectorSchema
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
  //async reducers
  loginForm?: LoginSchema
  profile?: ProfileSchema
  articleDetails?: ArticleDetailsSchema
  addCommentForm?: AddCommentFormSchema
  articlesPage?: ArticlesPageSchema
  articleDetailsPageRec?: ArticleDetailsPageRecSchema
  articleDetailsPageComments?: ArticleDetailsCommentsSchema

}

export type StateSchemaKey = keyof StateSchema


export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}


export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
  reducerManager: ReducerManager
}

export interface ThunkExtraArg {
  api: AxiosInstance
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArg
  state: StateSchema
}