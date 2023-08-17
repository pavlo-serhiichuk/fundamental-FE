import {rtkApi} from '@/shared/api/rtkApi'
import {IArticleRating} from '@/entities/Rating'

interface GetProfileRatingArg {
  userId: string
  profileId: string
}

interface RateProfileArg {
  userId: string
  profileId: string
  rate: number
  feedback?: string
}

const profileRatingApi = rtkApi.injectEndpoints({
  endpoints: build => ({
    getProfileRating: build.query<IArticleRating[], GetProfileRatingArg>({
      query: ({userId, profileId}) => ({
        url: '/profiles-ratings',
        params: {
          userId,
          profileId
        }
      })
    }),
    rateProfile: build.mutation<void, RateProfileArg>({
      query: (arg) => ({
        url: '/profiles-ratings',
        method: 'POST',
        body: arg
      })
    }),

  })
})

export const useGetProfileRating = profileRatingApi.useGetProfileRatingQuery
export const useRateProfile = profileRatingApi.useRateProfileMutation
