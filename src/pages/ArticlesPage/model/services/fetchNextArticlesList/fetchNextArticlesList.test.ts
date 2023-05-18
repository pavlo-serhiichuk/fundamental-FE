import {TestAsyncThunk} from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import {fetchNextArticlesList} from './fetchNextArticlesList'
import {fetchArticlesList} from '../fetchArticlesList'

jest.mock('../fetchArticlesList')

describe('fetchNextArticlesList', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesList, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        isLoading: false,
        limit: 5,
        hasMore: true
      }
    })

    await thunk.callThunk()

    expect(thunk.dispatch).toBeCalledTimes(4)
    expect(fetchArticlesList).toHaveBeenCalledWith({page: 3})
  })
  test('fetchArticlesList not called', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesList, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        isLoading: false,
        limit: 5,
        hasMore: false
      }
    })

    await thunk.callThunk()

    expect(thunk.dispatch).toBeCalledTimes(2)
    expect(fetchArticlesList).not.toHaveBeenCalled()
  })
})