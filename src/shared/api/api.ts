import {USER_LOCALSTORAGE} from 'shared/consts/localStorage'
import axios from 'axios'

// const baseURL = __IS_DEV__ ? "http://localhost:8000": "https://production.ua"

export const $api = axios.create({
  baseURL: __API__,
  headers: {
    authorization: localStorage.getItem(USER_LOCALSTORAGE)
  }
})