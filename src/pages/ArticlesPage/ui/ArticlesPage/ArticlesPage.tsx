import {FC, memo, useCallback} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticlesPage.module.scss'
import {ArticleList, ArticleView, ArticleViewSelector} from 'entities/Article'
import {articlesPageActions, articlesPageReducer, getArticles} from '../../model/slices/articlesPageSlice'
import {DynamicModuleLoader} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {useInitialEffect} from 'shared/lib/hooks/useInitialEffect'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch'
import {fetchArticlesList} from '../../model/services/fetchArticlesList'
import {useSelector} from 'react-redux'
import {
  getArticlesListError,
  getArticlesListIsLoading,
  getArticlesPageView
} from '../../model/selectors/getArticlesListSelectors'

interface ArticlesPageProps {
  className?: string;
}

const reducers = {
  articlesPage: articlesPageReducer
}

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
  const {className} = props
  const dispatch = useAppDispatch()
  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlesListIsLoading)
  const error = useSelector(getArticlesListError)
  const view = useSelector(getArticlesPageView)

  useInitialEffect(() => {
    dispatch(fetchArticlesList())
    dispatch(articlesPageActions.initState())
  })

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view))
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.ArticlesPage, {}, [className])}>
        <ArticleViewSelector onViewClick={onChangeView} view={view} />
        <ArticleList
          articles={articles}
          isLoading={isLoading}
          view={view}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage)