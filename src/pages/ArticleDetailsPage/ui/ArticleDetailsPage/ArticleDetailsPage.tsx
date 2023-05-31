import {FC, memo, useCallback} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import cls from './ArticleDetailsPage.module.scss'
import {ArticleDetails, ArticleList, ArticleView} from 'entities/Article'
import {useNavigate, useParams} from 'react-router-dom'
import {CommentList} from 'entities/Comment'
import {Text} from 'shared/ui/Text/Text'
import {DynamicModuleLoader, ReducersList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {articleDetailsCommentsReducer, getArticleComments} from '../../model/slices/ArticleDetailsCommentsSlice'
import {useSelector} from 'react-redux'
import {getArticleCommentsError, getArticleCommentsIsLoading} from '../../model/selectors/comments'
import {useInitialEffect} from 'shared/lib/hooks/useInitialEffect'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch'
import {
  fetchCommentsByArticleId
} from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import {AddCommentForm} from 'features/addCommentForm'
import {addCommentForArticle} from 'pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle'
import {Button} from 'shared/ui/Button/Button'
import {RoutePath} from 'shared/config/routeConfig/routeConfig'
import {Page} from 'shared/ui/Page/Page'
import {
  articleDetailsPageRecReducer,
  getArticleRecommendations
} from 'pages/ArticleDetailsPage/model/slices/ArticleDetailsPageRecSlice'
import {getArticleRecIsLoading} from 'pages/ArticleDetailsPage/model/selectors/recommendations'
import {fetchArticleRecList} from 'pages/ArticleDetailsPage/model/services/fetchArticleRec/fetchArticleRec'
import {articleDetailsPageReducer} from 'pages/ArticleDetailsPage/model/slices'

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const {t} = useTranslation()
  const {className} = props
  const {id} = useParams<{id: string}>()
  const comments = useSelector(getArticleComments.selectAll)
  const recommendations = useSelector(getArticleRecommendations.selectAll)
  const isCommentsLoading = useSelector(getArticleCommentsIsLoading)
  const commentsError = useSelector(getArticleCommentsError)

  const isRecLoading = useSelector(getArticleRecIsLoading)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
    dispatch(fetchArticleRecList())
  })
  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text))
  }, [dispatch])
  if(!id) {
    return (
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        {t('Article wasn\'t found')}
      </div>
    )
  }

  const onBackToArticles = useCallback(() => {
    navigate(RoutePath.articles)
  }, [])

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <Button onClick={onBackToArticles}>
          {t('Back to articles')}
        </Button>
        <ArticleDetails id={id} />
        <Text className={cls.commentsTitle} title={t('Recommendations')} />
        <ArticleList
          articles={recommendations}
          isLoading={isRecLoading}
          view={ArticleView.SMALL}
          className={cls.recommendations}
          target={"_blank"}
        />
        <Text className={cls.commentsTitle} title={t('Comments')} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList
          isLoading={isCommentsLoading}
          comments={comments} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage)