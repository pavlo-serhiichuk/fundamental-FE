import {StateSchema} from 'app/providers/StoreProvider'
import {
  getArticleDetailsData,
  getArticleDetailsIsLoading,
  getArticleDetailsError
} from './articleDetails'
import {Country} from 'entities/Country'
import {Currency} from 'entities/Currency'

describe('articleDetails', () => {
  test('should return data', () => {
    const data = {
      id: '1',
      title: 'Title'
    }
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data
      }
    }

    expect(getArticleDetailsData(state as StateSchema)).toEqual(data)
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined)
  })

  test('should return isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true
      }
    }

    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true)
  })

  test('isLoading should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false)
  })

  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: 'error'
      }
    }

    expect(getArticleDetailsError(state as StateSchema)).toEqual("error")
  })
})