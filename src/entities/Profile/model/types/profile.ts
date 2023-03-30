import {Country, Currency} from 'shared/consts/common'

export interface ProfileType {
  firstname: string,
  lastname: string,
  age: number,
  country: Country,
  currency: Currency,
  city: 'Vinnitsya',
  username: string,
  avatar: string
}

export interface ProfileSchema {
  data?: ProfileType
  isLoading: boolean
  error?: string
  readonly: boolean

}