import {FC, memo, ReactNode, useCallback} from 'react'
import {classNames} from '@/shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import cls from './Tabs.module.scss'
import {Card, CardTheme} from '@/shared/ui/Card'

export interface TabItem {
  value: string
  content: ReactNode
}

interface TabsProps {
  className?: string;
  tabs: TabItem[],
  value: string
  onTabClick: (tab: TabItem) => void
}

export const Tabs: FC<TabsProps> = memo((props) => {
  const {t} = useTranslation()
  const {className, tabs, onTabClick, value} = props

  const clickHandler = useCallback((tab: TabItem) => {
    return () => {
      onTabClick(tab)
    }
  }, [onTabClick])

  return (
    <div className={classNames(cls.Tabs, {}, [className])}>
      {tabs.map(tab => {
        const theme = tab.value === value ? CardTheme.OUTLINED : CardTheme.NORMAL
          return (
            <Card
              className={cls.tab}
              key={tab.value}
              theme={theme}
              onClick={clickHandler(tab)}
            >
              {tab.content}
            </Card>
          )
        }
      )
      }
    </div>
  );
});