import {useTranslation} from 'react-i18next';
import {memo, useCallback} from 'react';
import {Currency} from '@/entities/Currency'
import {Country} from '@/entities/Country'
import {useAppDispatch} from '@/shared/lib/hooks/useAppDispatch'
import {useSelector} from 'react-redux'
import {useInitialEffect} from '@/shared/lib/hooks/useInitialEffect'
import {Text, TextTheme} from '@/shared/ui/Text/Text'
import {ProfileCard} from '@/entities/Profile'
import {getProfileForm} from '../../model/selectors/getProfileForm/getProfileForm'
import {getProfileReadonly} from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import {getProfileError} from '../../model/selectors/getProfileError/getProfileError'
import {fetchProfileData} from '../../model/services/fetchProfileData/fetchProfileData'
import {
  getProfileValidateErrors
} from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors'
import {getProfileIsLoading} from '../../model/selectors/getProfileIsLoading/getProfileIsLoading'
import {DynamicModuleLoader, ReducersList} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {profileActions, profileReducer} from '../../model/slice/profileSlice'
import {
  EditableProfileCardHeader
} from '../EditableProfileCardHeader/EditableProfileCardHeader'
import {VStack} from '@/shared/ui/Stack'
import {ValidateProfileError} from '../../model/consts/consts'

interface EditableProfileCardProps {
  className?: string;
  id?: string | undefined
}

const reducers: ReducersList = {
  profile: profileReducer
}


export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
  const {id} = props
  const {t} = useTranslation();

  const dispatch = useAppDispatch()

  const formData = useSelector(getProfileForm)
  const error = useSelector(getProfileError)
  const isLoading = useSelector(getProfileIsLoading)
  const readonly = useSelector(getProfileReadonly)
  const validateErrors = useSelector(getProfileValidateErrors)

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
      <VStack gap={'8'} max>
        <EditableProfileCardHeader />
        {validateErrors?.length && validateErrors.map(err =>
          <Text
            key={err}
            text={validateErrorTranslates[err]}
            theme={TextTheme.ERROR}
            data-testid='EditableProfileCard.Error'
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
      </VStack>

    </DynamicModuleLoader>
  );
});