import {FC, memo, useCallback} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticlesPage.module.scss'
import {ArticleList} from 'entities/Article'
import {articlesPageReducer, getArticles} from '../../model/slices/articlesPageSlice'
import {DynamicModuleLoader} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {useInitialEffect} from 'shared/lib/hooks/useInitialEffect'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch'
import {useSelector} from 'react-redux'
import {
  getArticlesListError,
  getArticlesListIsLoading,
  getArticlesPage_Inited,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageView
} from '../../model/selectors/getArticlesListSelectors'
import {Page} from 'shared/ui/Page/Page'
import {fetchNextArticlesList} from '../../model/services/fetchNextArticlesList/fetchNextArticlesList'
import {initArticlesPage} from '../../model/services/initArticlesPage/initArticlesPage'
import {ArticleSortSelector} from 'entities/Article/ui/ArticleSortSelector/ArticleSortSelector'
import {useTranslation} from 'react-i18next'
import {ArticlePageFilters} from 'pages/ArticlesPage/ui/ArticlePageFilters/ArticlePageFilters'
import { useSearchParams } from 'react-router-dom'

interface ArticlesPageProps {
  className?: string;
}

const reducers = {
  articlesPage: articlesPageReducer
}

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
  const {t} = useTranslation()
  const {className} = props
  const dispatch = useAppDispatch()
  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlesListIsLoading)
  const error = useSelector(getArticlesListError)
  const view = useSelector(getArticlesPageView)
  const inited = useSelector(getArticlesPage_Inited)
  const [searchParams] = useSearchParams()
  console.log('searchParams', searchParams)
  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams))
  })

  const onLoadNextPart = useCallback(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchNextArticlesList())
    }
  }, [dispatch])

  if (error) {
    return <div>oh shit... here we again</div>
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page
        onScrollEnd={onLoadNextPart}
        className={classNames(cls.ArticlesPage, {}, [className])}>
        <ArticlePageFilters />
        <ArticleList
          articles={articles}
          isLoading={isLoading}
          view={view}
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage)