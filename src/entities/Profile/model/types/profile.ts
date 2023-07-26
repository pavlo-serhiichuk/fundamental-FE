import {Currency} from '@/entities/Currency/model/types/currency'
import {Country} from '@/entities/Country/model/types/country'

export interface Profile {
  id?: string
  firstname?: string,
  lastname?: string,
  age?: number,
  country?: Country,
  currency?: Currency,
  city?: string,
  username?: string,
  avatar?: string
}

