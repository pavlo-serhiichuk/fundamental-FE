import {FC} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import cls from './ProfileCard.module.scss'
import {useSelector} from 'react-redux'
import {getProfileData} from 'entities/Profile/model/selectors/getProfileData/getProfileData'
import {getProfileIsLoading} from '../../model/selectors/getProfileIsLoading/getProfileIsLoading'
import {getProfileError} from 'entities/Profile/model/selectors/getProfileError/getProfileError'
import {Text} from 'shared/ui/Text/Text'
import {Button, ButtonTheme} from 'shared/ui/Button/Button'
import {Input} from 'shared/ui/Input/Input'

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard:FC<ProfileCardProps> = (props) => {
  const {t} = useTranslation('profile')
  const {
      className
  } = props

  const data = useSelector(getProfileData)
  const error = useSelector(getProfileError)
  const isLoading = useSelector(getProfileIsLoading)

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
        <div className={cls.header}>
          <Text title={t('Profile')} />
          <Button
          theme={ButtonTheme.OUTLINE}
          className={cls.editBtn}
          >
            {t('Edit')}
          </Button>
        </div>
        <div className={cls.data}>
          <Input
            value={data?.firstname}
            placeholder={t('Your name')}
            className={cls.input}
          />
          <Input
            value={data?.lastname}
            placeholder={t('Your lastname')}
            className={cls.input}
          />
        </div>
    </div>
  );
};