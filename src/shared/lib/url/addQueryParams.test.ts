import {getQueryParams} from './addQueryParams'

describe('addQueryParams.test', () => {
  test('', () => {
    const params = getQueryParams({
      test: 'value'
    })
    expect(params).toEqual('?test=value')
  })

  test('', () => {
    const params = getQueryParams({
      test: 'value',
      second: 2,
    })
    expect(params).toEqual('?test=value&second=2')
  })

  test('', () => {
    const params = getQueryParams({
      test: 'value',
      second: 2,
      third: undefined
    })
    expect(params).toEqual('?test=value&second=2')
  })
})