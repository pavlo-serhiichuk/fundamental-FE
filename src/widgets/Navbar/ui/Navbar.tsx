import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import {useTranslation} from 'react-i18next'
import {memo, useCallback, useState} from 'react'
import {Button, ButtonTheme} from 'shared/ui/Button/Button'
import {LoginModal} from 'features/AuthByUsername'
import {useDispatch, useSelector} from 'react-redux'
import {getUserAuthData, userActions} from 'entities/User'
import {Text, TextTheme} from 'shared/ui/Text/Text'
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink'
import {RoutePath} from 'shared/config/routeConfig/routeConfig'

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({className}: NavbarProps) => {
  const {t} = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)
  const authData = useSelector(getUserAuthData)
  const dispatch = useDispatch()
  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

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
        <Button
          // size={ButtonSize.M}
          theme={ButtonTheme.CLEAR_INVERTED}
          onClick={onLogout}
          className={cls.exit}
        >
          {t('Exit')}
        </Button>
      </header>
    );
  }

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        // size={ButtonSize.M}
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