import {FC} from 'react'
import {classNames, Mods} from '@/shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import cls from './ProfileCard.module.scss'
import {Text, TextAlign, TextTheme} from '@/shared/ui/Text'
import {Input} from '@/shared/ui/Input'
import {Profile} from '../../model/types/profile'
import {Loader} from '@/shared/ui/Loader'
import {Avatar} from '@/shared/ui/Avatar'
import {Currency, CurrencySelect} from '@/entities/Currency'
import {Country} from '@/entities/Country/model/types/country'
import {CountrySelect} from '@/entities/Country'
import {HStack, VStack} from '@/shared/ui/Stack'

interface ProfileCardProps {
  className?: string
  data?: Profile
  error?: string
  isLoading?: boolean
  readonly?: boolean
  onChangeFirstname?: (value?: string) => void
  onChangeLastname?: (value?: string) => void
  onChangeCity?: (value?: string) => void
  onChangeAge?: (value?: string) => void
  onChangeUsername?: (value?: string) => void
  onChangeAvatar?: (value?: string) => void
  onChangeCurrency?: (value?: Currency) => void
  onChangeCountry?: (value?: Country) => void
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
  const {
    className,
    data,
    error,
    isLoading,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeCity,
    onChangeAge,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props

  const {t} = useTranslation('profile')

  if (isLoading) {
    return (
      <VStack gap={'12'} max
        className={classNames(cls.ProfileCard, {[cls.loading]: true}, [className])}>
        <Loader />
      </VStack>
    )
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          title={t('Error happened')}
          text={t('Try to reload this page')}
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
        />
      </div>
    )
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  }

  return (
    <VStack gap={'12'} max className={classNames(cls.ProfileCard, mods, [className])}>
          <HStack max justify={'center'}>
            <Avatar size={150} alt="avatar" src={data?.avatar} />
          </HStack>
        <Input
          value={data?.firstname}
          label={t('Your name')}
          onChange={onChangeFirstname}
          readonly={readonly}
          data-testid={'ProfileCard.firstname'}
        />
        <Input
          value={data?.lastname}
          label={t('Your lastname')}
          className={cls.input}
          onChange={onChangeLastname}
          readonly={readonly}
          data-testid={'ProfileCard.lastname'}
        />
        <Input
          value={data?.age}
          label={t('Your age')}
          className={cls.input}
          onChange={onChangeAge}
          readonly={readonly}
        />
        <Input
          value={data?.city}
          label={t('Your city')}
          className={cls.input}
          onChange={onChangeCity}
          readonly={readonly}
        />
        <Input
          value={data?.username}
          label={t('Username')}
          className={cls.input}
          onChange={onChangeUsername}
          readonly={readonly}
        />
        <Input
          value={data?.avatar}
          label={t('Avatar link')}
          className={cls.input}
          onChange={onChangeAvatar}
          readonly={readonly}
        />
        <CurrencySelect
          className={cls.input}
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
        />
        <CountrySelect
          className={cls.input}
          value={data?.country}
          onChange={onChangeCountry}
          readonly={readonly}
        />
    </VStack>
  );
};