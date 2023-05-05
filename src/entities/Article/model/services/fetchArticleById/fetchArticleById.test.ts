import {TestAsyncThunk} from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import {fetchArticleById} from './fetchArticleById'
import {ArticleType} from 'entities/Article/model/types/article'

const data = {
  id: 'string',
  title: 'string',
  subtitle: 'string',
  image: 'string',
  views: 23,
  created: 'string',
  type: [ArticleType.IT],
  blocks: []
}

describe('fetchArticleById.test', () => {

  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById)

    thunk.api.get.mockReturnValue(Promise.resolve( { data }))
    const action = await thunk.callThunk('1')

    expect(thunk.api.get).toHaveBeenCalled()
    expect(action.meta.requestStatus).toBe('fulfilled')
    expect(action.payload).toEqual(data)
  })

  test('error', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById)
    thunk.api.get.mockReturnValue(Promise.resolve({status: 403}))

    const action = await thunk.callThunk('1')

    expect(action.meta.requestStatus).toBe('rejected')
  })
})