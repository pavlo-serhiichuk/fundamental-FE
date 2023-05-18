import {FC, useCallback, useEffect} from 'react'
import {useTranslation} from 'react-i18next'
import {DynamicModuleLoader, ReducersList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  ProfileCard,
  profileActions,
  profileReducer, getProfileValidateErrors, ValidateProfileError
} from 'entities/Profile'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch'
import {useSelector} from 'react-redux'
import {ProfilePageHeader} from './ProfilePageHeader/ProfilePageHeader'
import {Currency} from 'entities/Currency'
import {Country} from 'entities/Country'
import {Text, TextTheme} from 'shared/ui/Text/Text'
import {useParams} from 'react-router-dom'
import {useInitialEffect} from 'shared/lib/hooks/useInitialEffect'
import {Page} from 'shared/ui/Page/Page'

const reducers: ReducersList = {
  profile: profileReducer
}

interface ProfileProps {
  className?: string;
}

const ProfilePage: FC<ProfileProps> = () => {

  const {t} = useTranslation()
  const dispatch = useAppDispatch()

  const formData = useSelector(getProfileForm)
  const error = useSelector(getProfileError)
  const isLoading = useSelector(getProfileIsLoading)
  const readonly = useSelector(getProfileReadonly)
  const validateErrors = useSelector(getProfileValidateErrors)
  const {id} = useParams<{ id: string }>()

  useInitialEffect(() => dispatch(fetchProfileData(id)))

  const validateErrorTranslates = {
    [ValidateProfileError.NO_DATA]: t(''),
    [ValidateProfileError.SERVER_ERROR]: t('Server error during saving'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('Incorrect country'),
    [ValidateProfileError.INCORRECT_AGE]: t('Incorrect age'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('User should have a firstname and a lastname')
  }


  const onChangeFirstname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({firstname: value || ''}))
  }, [dispatch])

  const onChangeLastname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({lastname: value || ''}))
  }, [dispatch])

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({city: value || ''}))
  }, [dispatch])

  const onChangeAge = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({age: Number(value?.replace(/[^.0-9]/g, '') || 0)}))
  }, [dispatch])

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({avatar: value || ''}))
  }, [dispatch])

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({username: value || ''}))
  }, [dispatch])

  const onChangeCurrency = useCallback((currency?: Currency) => {
    dispatch(profileActions.updateProfile({currency}))
  }, [dispatch])

  const onChangeCountry = useCallback((country?: Country) => {
    dispatch(profileActions.updateProfile({country}))
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page>
        <ProfilePageHeader />
        {validateErrors?.length && validateErrors.map(err =>
          <Text
            key={err}
            text={validateErrorTranslates[err]}
            theme={TextTheme.ERROR}
          />)}
        <ProfileCard
          data={formData}
          error={error}
          isLoading={isLoading}
          readonly={readonly}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeCity={onChangeCity}
          onChangeAge={onChangeAge}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ProfilePage