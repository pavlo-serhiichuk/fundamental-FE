import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import {useTranslation} from 'react-i18next'
import {memo, useCallback, useState} from 'react'
import {Button, ButtonTheme} from 'shared/ui/Button/Button'
import {LoginModal} from 'features/AuthByUsername'
import {useDispatch, useSelector} from 'react-redux'
import {getUserAuthData, isUserAdmin, isUserManager, userActions} from 'entities/User'
import {Text, TextTheme} from 'shared/ui/Text/Text'
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink'
import {RoutePath} from 'shared/config/routeConfig/routeConfig'
import {Dropdown, Popover} from 'shared/ui/Popups'
import {Avatar} from 'shared/ui/Avatar/Avatar'
import {HStack} from 'shared/ui/Stack'
import {Icon} from 'shared/ui/Icon/Icon'
import NotificationsIcon from 'shared/assets/icons/notifications.svg'
import {NotificationList} from 'entities/Notification'
import {NotificationButton} from 'features/notificationButton'
import {AvatarDropdown} from 'features/avatarDropdown'

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({className}: NavbarProps) => {
  const {t} = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)
  const authData = useSelector(getUserAuthData)
  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  if (authData) {
    return (
      <header className={classNames(cls.Navbar, {}, [className])}>
        <Text
          className={cls.appName}
          title={t('Fundamental FE')}
          theme={TextTheme.INVERTED}
        />
         <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.articles_create}
        >
          {t('+ Create article')}
        </AppLink>
        <HStack gap={'16'} max justify={'end'}>
        <NotificationButton />
        <AvatarDropdown />
        </HStack>
      </header>
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