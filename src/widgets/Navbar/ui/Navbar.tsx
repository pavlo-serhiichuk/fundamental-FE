import {classNames} from '@/shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import {useTranslation} from 'react-i18next'
import {memo, useCallback, useState} from 'react'
import {Button, ButtonTheme} from '@/shared/ui/Button'
import {LoginModal} from '@/features/AuthByUsername'
import {useSelector} from 'react-redux'
import {getUserAuthData, useJsonSettings} from '@/entities/User'
import {Text, TextTheme} from '@/shared/ui/Text'
import {AppLink, AppLinkTheme} from '@/shared/ui/AppLink'
import {HStack} from '@/shared/ui/Stack'
import {NotificationButton} from '@/features/notificationButton'
import {AvatarDropdown} from '@/features/avatarDropdown'
import {getRouteArticleCreate} from '@/shared/consts/router'
import {ToggleFeature} from '@/shared/lib/features'

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({className}: NavbarProps) => {
  const {t} = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)
  const authData = useSelector(getUserAuthData)
  const isV2 = useJsonSettings()?.isV2

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  if (authData) {
    return (
      <ToggleFeature
        isOn={isV2}
        feature={'isV2'}
        off={(
        <header className={classNames(cls.Navbar, {}, [className])}>
          <Text
            className={cls.appName}
            title={t('Fundamental FE')}
            theme={TextTheme.INVERTED}
          />
          <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={getRouteArticleCreate()}
          >
            {t('+ Create article')}
          </AppLink>
          <HStack gap={'16'} max justify={'end'}>
            <NotificationButton />
            <AvatarDropdown />
          </HStack>
        </header>
      )}
      on={(
        <header className={classNames(cls.NavbarV2, {}, [className])}>
          <HStack gap={'16'} max justify={'end'}>
            <NotificationButton />
            <AvatarDropdown />
          </HStack>
        </header>
      )}/>
    );
  }

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={onShowModal}
      >
        {t('Enter')}
      </Button>
      {isAuthModal &&
          <LoginModal
              isOpen={isAuthModal}
              onClose={onCloseModal}
          />
      }
    </div>
  );
});