import {FC, memo, useMemo, useState} from 'react'
import {classNames} from '@/shared/lib/classNames/classNames'
import {ThemeSwitcher} from '@/features/ThemeSwitcher'
import {LangSwitcher} from '@/features/LangSwitcher/LangSwitcher'
import {Button, ButtonSize, ButtonTheme} from '@/shared/ui/Button'
import cls from './Sidebar.module.scss'
import {SidebarItem} from '@/widgets/Sidebar/ui/SidebarItem/SidebarItem'
import {useSelector} from 'react-redux'
import {getSidebarItems} from '../../module/selectors/getSidebarItems'
import {VStack} from '@/shared/ui/Stack'
import {ToggleFeature} from '@/shared/lib/features'
import {AppLogo} from '@/shared/ui/AppLogo/AppLogo'
import {FeatureFlags} from '@/shared/types/featureFlags'
import {Icon} from '@/shared/ui/Icon'
import {getUserAuthData, useJsonSettings} from '@/entities/User'

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = memo((props) => {
  const {className} = props

  const [collapsed, setCollapsed] = useState(false)
  const onToggle = () => setCollapsed(prev => !prev)
  const sidebarItemsList = useSelector(getSidebarItems)
  const isV2 = useJsonSettings()?.isV2

  const itemsList = useMemo(() => {
    return sidebarItemsList.map(item =>
      <SidebarItem
        item={item}
        collapsed={collapsed}
        key={item.path}
      />)
  }, [collapsed, sidebarItemsList])

  return (
    <ToggleFeature
      isOn={isV2}
      feature={'isV2'}
      off={(
        <aside
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
          <VStack role={'navigation'} className={cls.items}>
            {itemsList}
          </VStack>
          <div className={cls.switcher}>
            <LangSwitcher className={cls.lang} />
            <ThemeSwitcher />
          </div>
        </aside>
      )}
      on={(
        <aside
          data-testid="sidebar"
          className={classNames(cls.SidebarV2, {[cls.collapsed]: collapsed}, [className])}>
          <VStack justify={'center'}>
            <AppLogo />
            <VStack role={'navigation'} className={cls.items}>
              {itemsList}
            </VStack>
          </VStack>
          <div className={cls.switcher}>
            <LangSwitcher className={cls.lang} />
            <ThemeSwitcher />
          </div>
        </aside>
      )}
    />
  );
});