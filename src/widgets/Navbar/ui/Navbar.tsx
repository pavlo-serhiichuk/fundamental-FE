import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink'
import {ThemeSwitcher} from 'widgets/ThemeSwitcher'
import {useTranslation} from 'react-i18next'

interface NavbarProps {
  className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
  const {t} = useTranslation('about')

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink
          to="/"
          theme={AppLinkTheme.SECONDARY}
          className={cls.mainLink}>
          {t('Main')}
        </AppLink>
        <AppLink
          to="/about"
          theme={AppLinkTheme.RED}
          className={cls.aboutLink}>
          {t('About')}
        </AppLink>
      </div>
    </div>
  );
};