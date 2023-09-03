import React, {FC, memo} from 'react'
import {useTranslation} from 'react-i18next'
import cls from './SidebarItem.module.scss'
import {AppLink, AppLinkTheme} from '@/shared/ui/AppLink'
import {useSelector} from 'react-redux'
import {getUserAuthData} from '@/entities/User'
import {SidebarItemType} from '@/widgets/Sidebar/module/types/sidebar'

interface SidebarItemProps {
  item: SidebarItemType,
  collapsed: boolean
}

export const SidebarItem: FC<SidebarItemProps> = memo(({item, collapsed}) => {
  const {t} = useTranslation()
  const isAuth = useSelector(getUserAuthData)

  if (item.authOnly && !isAuth) {
    return null
  }

  return (
      <AppLink
        to={item.path}
        theme={AppLinkTheme.SECONDARY}
        className={cls.item}>
        <item.Icon className={cls.icon} />
        {collapsed ? '' : <span>{t(item.text)}</span>}
      </AppLink>
  );
});
