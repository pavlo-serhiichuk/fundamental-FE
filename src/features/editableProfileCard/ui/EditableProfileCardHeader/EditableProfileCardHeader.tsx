import {FC, useCallback} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import {Text} from 'shared/ui/Text/Text'
import {Button, ButtonTheme} from 'shared/ui/Button/Button'
import {useSelector} from 'react-redux'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch'
import {getUserAuthData} from 'entities/User'
import {HStack} from 'shared/ui/Stack'
import {getProfileReadonly} from 'features/editableProfileCard/model/selectors/getProfileReadonly/getProfileReadonly'
import {getProfileData} from 'features/editableProfileCard/model/selectors/getProfileData/getProfileData'
import {profileActions, updateProfileData} from 'features/editableProfileCard'

interface ProfilePageHeaderProps {
  className?: string;
}


export const EditableProfileCardHeader:FC<ProfilePageHeaderProps> = (props) => {
  const {t} = useTranslation()
  const authData = useSelector(getUserAuthData)
  const profileData = useSelector(getProfileData)
  const {
    className
  } = props

  const readonly = useSelector(getProfileReadonly)
  const dispatch = useAppDispatch()

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [dispatch])

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [dispatch])

  const onSave = useCallback(() => {
    dispatch(updateProfileData())
  }, [dispatch])

  return (
    <HStack max justify={'between'} className={classNames('', {}, [className])}>
      <Text title={t('Profile')} />
      {authData?.id === profileData?.id
        ? readonly
          ? <Button
            theme={ButtonTheme.OUTLINE}
            onClick={onEdit}
            data-testid={'EditableProfileCardHeader.EditButton'}
          >
            {t('Edit')}
          </Button>
          : <HStack gap={'8'}>
            <Button
              theme={ButtonTheme.OUTLINE_RED}
              onClick={onCancelEdit}
              data-testid={'EditableProfileCardHeader.CancelButton'}
            >
              {t('Cancel')}
            </Button>
            <Button
              theme={ButtonTheme.OUTLINE}
              onClick={onSave}
              data-testid={'EditableProfileCardHeader.SaveButton'}
            >
              {t('Save')}
            </Button>
          </HStack>
        : null
      }
    </HStack>
  );
};