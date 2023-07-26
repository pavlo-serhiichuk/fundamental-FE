import {FC, useCallback, useMemo, memo} from 'react'
import {classNames} from '@/shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import cls from './ArticleSortSelector.module.scss'
import {Select, SelectOption} from '@/shared/ui/Select/Select'
import {SortOrder} from '@/shared/types'
import {ArticleSortField} from '../../model/consts/consts'

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField,
  order: SortOrder
  onChangeOrder: (newOrder: SortOrder) => void
  onChangeSort: (newSort: ArticleSortField) => void
}

export const ArticleSortSelector: FC<ArticleSortSelectorProps> = memo((props) => {
  const {t} = useTranslation()
  const {
    sort,
    order,
    onChangeOrder,
    onChangeSort,
    className
  } = props

  const orderOptions = useMemo<SelectOption[]>(() => [
    {
      content: t('ascending'),
      value: 'asc'
    }, {
      content: t('descending'),
      value: 'desc'
    },
  ], [t])

  const sortFieldOptions = useMemo<SelectOption[]>(() => [
    {
      content: t('date'),
      value: ArticleSortField.CREATED
    }, {
      content: t('name'),
      value: ArticleSortField.TITLE
    }, {
      content: t('views'),
      value: ArticleSortField.VIEWS
    },
  ], [t])

  const changeSortHandler = useCallback((newSort: string) => {
    onChangeSort(newSort as ArticleSortField)
  }, [onChangeSort])

  const changeOrderHandler = useCallback((newOrder: string) => {
    onChangeOrder(newOrder as SortOrder)
  }, [onChangeOrder])

  return (
    <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
      <Select
        label={t('Sort BY')}
        options={sortFieldOptions}
        value={sort}
        onChange={changeSortHandler}
      />
      <Select
        label={t('by')}
        options={orderOptions}
        value={order}
        onChange={changeOrderHandler}
      />
    </div>
  );
});