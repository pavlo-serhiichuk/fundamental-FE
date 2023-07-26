import {validateProfileData} from './validateProfileData'
import {Country} from '@/entities/Country'
import {Currency} from '@/entities/Currency'
import {ValidateProfileError} from '../../../model/consts/consts'

const data = {
  username: 'admin',
  age: 33,
  country: Country.Ukraine,
  lastname: 'Serh',
  firstname: 'Pavlo',
  city: 'Vii',
  currency: Currency.GRN,
}

describe('validateProfileData.test', () => {

  test('success', async () => {
    const result = validateProfileData(data)

    expect(result).toEqual([])
  })

  test('without first and last name', async () => {
    const result = validateProfileData({...data, lastname: '', firstname: ''})

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA
    ])
  })

  test('incorrect all', async () => {
    const result = validateProfileData({})

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ])
  })

})