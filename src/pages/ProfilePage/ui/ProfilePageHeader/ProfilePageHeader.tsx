import {FC, useCallback} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import cls from './ProfilePageHeader.module.scss'
import {Text} from 'shared/ui/Text/Text'
import {Button, ButtonTheme} from 'shared/ui/Button/Button'
import {useSelector} from 'react-redux'
import {getProfileReadonly, profileActions, updateProfileData} from 'entities/Profile'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch'

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader:FC<ProfilePageHeaderProps> = (props) => {
  const {t} = useTranslation()
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
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t('Profile')} />
      {readonly
        ? <Button
        theme={ButtonTheme.OUTLINE}
        className={cls.editBtn}
        onClick={onEdit}
      >
        {t('Edit')}
      </Button>
      : <>
          <Button
            theme={ButtonTheme.OUTLINE_RED}
            className={cls.editBtn}
            onClick={onCancelEdit}
          >
            {t('Cancel')}
          </Button>
          <Button
            theme={ButtonTheme.OUTLINE}
            onClick={onSave}
          >
            {t('Save')}
          </Button>
        </>
      }
    </div>
  );
};