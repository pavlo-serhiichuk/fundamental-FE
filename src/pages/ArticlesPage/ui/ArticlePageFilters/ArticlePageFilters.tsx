import {FC, memo, useCallback} from 'react'
import {classNames} from '@/shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import cls from './ArticlePageFilters.module.scss'
import {
  ArticleType,
  ArticleView,
  ArticleTypeTabs,
  ArticleSortField,
  ArticleSortSelector,
  ArticleViewSelector
} from '@/entities/Article'
import {articlesPageActions} from '../../model/slices/articlesPageSlice'
import {useAppDispatch} from '@/shared/lib/hooks/useAppDispatch'
import {useSelector} from 'react-redux'
import {Card} from '@/shared/ui/Card'
import {Input} from '@/shared/ui/Input'
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageView
} from '../../model/selectors/getArticlesListSelectors'
import {SortOrder} from '@/shared/types/sort'
import {fetchArticlesList} from '../../model/services/fetchArticlesList'
import {useDebounce} from '@/shared/lib/hooks/useDebounce'
import {getArticlesPageType} from '../../model/selectors/getArticlesListSelectors'

interface ArticlePageFiltersProps {
  className?: string;
}

export const ArticlePageFilters: FC<ArticlePageFiltersProps> = memo((props) => {
  const {t} = useTranslation()
  const {className} = props
  const dispatch = useAppDispatch()
  const view = useSelector(getArticlesPageView)
  const sort = useSelector(getArticlesPageSort)
  const order = useSelector(getArticlesPageOrder)
  const search = useSelector(getArticlesPageSearch)
  const type = useSelector(getArticlesPageType)

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({replace: true}))
  }, [dispatch])

  const debouncedFetchData = useDebounce(fetchData, 500)

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view))
  }, [dispatch])

  const onChangeSort = useCallback((sort: ArticleSortField) => {
    dispatch(articlesPageActions.setSort(sort))
    dispatch(articlesPageActions.setPage(1))
    fetchData()
  }, [dispatch, fetchData])

  const onChangeOrder = useCallback((view: SortOrder) => {
    dispatch(articlesPageActions.setOrder(view))
    dispatch(articlesPageActions.setPage(1))
    fetchData()
  }, [dispatch, fetchData])

  const onChangeSearch = useCallback((search: string) => {
    dispatch(articlesPageActions.setSearch(search))
    dispatch(articlesPageActions.setPage(1))
    debouncedFetchData()
  }, [dispatch, debouncedFetchData])

  const onChangeType = useCallback((value: ArticleType) => {
    dispatch(articlesPageActions.setType(value))
    dispatch(articlesPageActions.setPage(1))
    fetchData()
  }, [dispatch, fetchData])

  return (
    <div className={classNames(cls.ArticlePageFilters, {}, [className])}>
      <div className={cls.sortWrapper}>
        <ArticleSortSelector
          sort={sort}
          order={order}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleViewSelector onViewClick={onChangeView} view={view} />
      </div>
      <Card className={cls.search}>
        <Input
          value={search}
          onChange={onChangeSearch}
          placeholder={t('Search article...')}
        />
      </Card>
      <ArticleTypeTabs onChangeType={onChangeType} value={type} />
    </div>
  );
});