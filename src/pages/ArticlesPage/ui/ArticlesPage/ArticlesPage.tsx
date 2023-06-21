import {FC, memo, useCallback} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticlesPage.module.scss'
import {articlesPageReducer} from '../../model/slices/articlesPageSlice'
import {DynamicModuleLoader} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {useInitialEffect} from 'shared/lib/hooks/useInitialEffect'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch'
import {Page} from 'shared/ui/Page/Page'
import {fetchNextArticlesList} from '../../model/services/fetchNextArticlesList/fetchNextArticlesList'
import {initArticlesPage} from '../../model/services/initArticlesPage/initArticlesPage'
import {useTranslation} from 'react-i18next'
import {ArticlePageFilters} from 'pages/ArticlesPage/ui/ArticlePageFilters/ArticlePageFilters'
import {useSearchParams} from 'react-router-dom'
import {ArticleInfiniteList} from 'pages/ArticlesPage/ui/ArticleInfiniteList/ArticleInfiniteList'

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
  const [searchParams] = useSearchParams()

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams))
  })

  const onLoadNextPart = useCallback(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchNextArticlesList())
    }
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page
        onScrollEnd={onLoadNextPart}
        className={classNames(cls.ArticlesPage, {}, [className])}>
        <ArticlePageFilters />
        <ArticleInfiniteList />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage)