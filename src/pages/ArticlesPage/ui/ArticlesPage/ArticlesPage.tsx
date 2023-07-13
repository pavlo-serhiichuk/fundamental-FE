import {FC, memo, useCallback} from 'react'
import {useSearchParams} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import cls from './ArticlesPage.module.scss'
import {classNames} from 'shared/lib/classNames/classNames'
import {Page} from 'shared/ui/Page/Page'
import {articlesPageReducer} from '../../model/slices/articlesPageSlice'
import {DynamicModuleLoader} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {useInitialEffect} from 'shared/lib/hooks/useInitialEffect'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch'
import {fetchNextArticlesList} from '../../model/services/fetchNextArticlesList/fetchNextArticlesList'
import {initArticlesPage} from '../../model/services/initArticlesPage/initArticlesPage'
import {ArticlePageFilters} from '../ArticlePageFilters/ArticlePageFilters'
import {ArticleInfiniteList} from '../ArticleInfiniteList/ArticleInfiniteList'

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