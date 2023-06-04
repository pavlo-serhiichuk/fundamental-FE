import {USER_LOCALSTORAGE} from 'shared/consts/localStorage'
import axios from 'axios'

// const baseURL = __IS_DEV__ ? "http://localhost:8000": "https://production.ua"

export const $api = axios.create({
  baseURL: __API__
})

$api.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorization = localStorage.getItem(USER_LOCALSTORAGE) || ''
  }
  return config
})