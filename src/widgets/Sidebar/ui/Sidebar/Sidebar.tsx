import {FC, memo, useMemo, useState} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import {ThemeSwitcher} from 'widgets/ThemeSwitcher'
import {LangSwitcher} from 'widgets/LangSwitcher/LangSwitcher'
import {Button, ButtonSize, ButtonTheme} from 'shared/ui/Button/Button'
import {useTranslation} from 'react-i18next'
import cls from './Sidebar.module.scss'
import {SidebarItem} from 'widgets/Sidebar/ui/SidebarItem/SidebarItem'
import {SidebarItemsList} from 'widgets/Sidebar/module/items'

interface SidebarProps {
  className?: string;
}

export const Sidebar:FC<SidebarProps> = memo((props) => {
  const {
      className
  } = props

  const [collapsed, setCollapsed] = useState(false)
  const onToggle = () => setCollapsed(prev => !prev)

  const itemsList = useMemo(() => {
    return SidebarItemsList.map(item =>

      <SidebarItem
        item={item}
        collapsed={collapsed}
        key={item.path}
      />)
  }, [collapsed])

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
        {itemsList}
      </div>
      <div className={cls.switcher}>
        <LangSwitcher className={cls.lang}/>
        <ThemeSwitcher />
      </div>
    </div>
  );
});