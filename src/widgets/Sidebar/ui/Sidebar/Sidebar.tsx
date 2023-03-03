import {FC, useState} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import {ThemeSwitcher} from 'widgets/ThemeSwitcher'
import {LangSwitcher} from 'widgets/LangSwitcher/LangSwitcher'
import {Button, ButtonSize, ButtonTheme} from 'shared/ui/Button/Button'
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink'
import {useTranslation} from 'react-i18next'
import {RoutePath} from 'shared/config/routeConfig/routeConfig'
import AboutIcon from 'shared/assets/icons/about_us.svg'
import MainIcon from 'shared/assets/icons/main.svg'
import cls from './Sidebar.module.scss'

interface SidebarProps {
  className?: string;
}

export const Sidebar:FC<SidebarProps> = (props) => {
  const {
      className
  } = props

  const [collapsed, setCollapsed] = useState(false)
  const {t} = useTranslation()
  const onToggle = () => setCollapsed(prev => !prev)

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cls.collapsedBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
      >
        {collapsed ? '>': '<'}
      </Button>
      <div className={cls.items}>
        <AppLink
          to={RoutePath.main}
          theme={AppLinkTheme.SECONDARY}
          className={cls.item}>
          <MainIcon className={cls.icon} />
          {collapsed ? '' : <span className={cls.link}>{t('Main')}</span>}
        </AppLink>
        <AppLink
          to={RoutePath.about}
          theme={AppLinkTheme.SECONDARY}
          className={cls.item}>
          <AboutIcon className={cls.icon} />
          {collapsed ? '' : <span className={cls.link}>{t('About')}</span>}
        </AppLink>
      </div>
      <div className={cls.switcher}>
        <LangSwitcher className={cls.lang}/>
        <ThemeSwitcher />
      </div>
    </div>
  );
};