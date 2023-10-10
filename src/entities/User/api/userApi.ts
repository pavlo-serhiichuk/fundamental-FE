import {rtkApi} from '@/shared/api/rtkApi'
import {User} from '@/entities/User'
import {JsonSettings} from '@/entities/User/model/types/jsonSettings'

interface SetJsonSettingsArg {
  userId: string
  jsonSettings: JsonSettings
}

const userApi = rtkApi.injectEndpoints({
  endpoints: build => ({
    setJsonSettings: build.mutation<User, SetJsonSettingsArg>({
      query: ({jsonSettings,userId}) => ({
        url: '/users/' + userId,
        method: 'PATCH',
        body: {
          jsonSettings,
        }
      })
    }),
    getUserDataById: build.query<User, string>({
      query: (userId) => ({
        url: '/users/' + userId,
        method: 'GET',
      })
    })
  })
})

export const setJsonSettingsMutation = userApi.endpoints.setJsonSettings.initiate
export const getUserDataByIdQuery = userApi.endpoints.getUserDataById.initiate