import {FC, memo, useCallback} from 'react'
import {useTranslation} from 'react-i18next'
import {RatingCard} from '@/entities/Rating'
import {Skeleton} from '@/shared/ui/Skeleton'
import {useGetProfileRating, useRateProfile} from '@/features/profileRating/api/profileRatingApi'
import {useSelector} from 'react-redux'
import {getUserAuthData} from '@/entities/User'

export interface ProfileRatingProps {
  profileId: string
  className?: string;
}

const ProfileRating: FC<ProfileRatingProps> = memo((props) => {
  const {t} = useTranslation()
  const {className, profileId} = props
  const userData = useSelector(getUserAuthData)

  const [rateProfileMutation] = useRateProfile()
  const {data, isLoading}  = useGetProfileRating({userId: userData?.id ?? '', profileId})
  const rating = data?.[0]

  const handleRateProfile = useCallback((starsCount: number, feedback?: string) => {
    try {
      rateProfileMutation({
        profileId,
        feedback,
        rate: starsCount,
        userId: userData?.id ?? '',
      })
    } catch (e) {
      console.log(e)
    }
  }, [profileId, rateProfileMutation, userData?.id])

  const onCancel = useCallback((starsCount: number) => {
    handleRateProfile(starsCount)
  }, [])

  const onAccept = useCallback((starsCount: number, feedback?: string) => {
    handleRateProfile(starsCount, feedback)
  }, [])

  if (isLoading) {
    return (
      <Skeleton width="100%" height={120} />
    )
  }

  return (
      <RatingCard
        onCancel={onCancel}
        onAccept={onAccept}
        rate={rating?.rate}
        className={className}
        title={t('Estimate this profile')}
        feedbackTitle={t('Please, leave your feedback')}
        hasFeedback
      />
  );
});

export default ProfileRating