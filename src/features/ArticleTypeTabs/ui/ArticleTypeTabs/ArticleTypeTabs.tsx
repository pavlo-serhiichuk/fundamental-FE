import {FC, useCallback, useMemo} from 'react'
import {useTranslation} from 'react-i18next'
import {memo} from 'react'
import {TabItem, Tabs} from '@/shared/ui/Tabs'
import {ArticleType} from '@/entities/Article/model/consts/consts'

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType
  onChangeType: (type: ArticleType) => void

}

export const ArticleTypeTabs: FC<ArticleTypeTabsProps> = memo((props) => {
  const {t} = useTranslation()
  const {className, value, onChangeType} = props

  const onTabClick = useCallback((tab: TabItem) => {
    onChangeType(tab.value as ArticleType)
  }, [])

  const typeTabs: TabItem[] = useMemo(() =>
    [{
      value: ArticleType.IT,
      content: t(ArticleType.IT)
    },
      {
        value: ArticleType.ECONOMICS,
        content: t(ArticleType.ECONOMICS)
      },
      {
        value: ArticleType.SCIENCE,
        content: t(ArticleType.SCIENCE)
      },
      {
        value: ArticleType.ALL,
        content: t(ArticleType.ALL)
      }], [t]
  )

  return (
    <Tabs
      tabs={typeTabs}
      value={value}
      onTabClick={onTabClick}
    />
  );
});