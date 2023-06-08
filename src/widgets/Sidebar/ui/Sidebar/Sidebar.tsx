import {FC, memo, useMemo, useState} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import {ThemeSwitcher} from 'widgets/ThemeSwitcher'
import {LangSwitcher} from 'widgets/LangSwitcher/LangSwitcher'
import {Button, ButtonSize, ButtonTheme} from 'shared/ui/Button/Button'
import cls from './Sidebar.module.scss'
import {SidebarItem} from 'widgets/Sidebar/ui/SidebarItem/SidebarItem'
import {useSelector} from 'react-redux'
import {getSidebarItems} from '../../module/selectors/getSidebarItems'
import {VStack} from 'shared/ui/Stack/ui/VStack/VStack'

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = memo((props) => {
  const {className} = props

  const [collapsed, setCollapsed] = useState(false)
  const onToggle = () => setCollapsed(prev => !prev)
  const sidebarItemsList = useSelector(getSidebarItems)

  const itemsList = useMemo(() => {
    return sidebarItemsList.map(item =>
      <SidebarItem
        item={item}
        collapsed={collapsed}
        key={item.path}
      />)
  }, [collapsed, sidebarItemsList])

  return (
    <menu
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
        {collapsed ? '>' : '<'}
      </Button>
      <VStack className={cls.items}>
        {itemsList}
      </VStack>
      <div className={cls.switcher}>
        <LangSwitcher className={cls.lang} />
        <ThemeSwitcher />
      </div>
    </menu>
  );
});