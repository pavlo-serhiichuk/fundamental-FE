import {FC, memo, useCallback} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import cls from './ArticleDetailsPage.module.scss'
import {ArticleDetails} from 'entities/Article'
import {useParams} from 'react-router-dom'
import {CommentList} from 'entities/Comment'
import {Text} from 'shared/ui/Text/Text'
import {DynamicModuleLoader, ReducersList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {articleDetailsCommentsReducer, getArticleComments} from '../../model/slices/ArticleDetailsCommentsSlice'
import {useSelector} from 'react-redux'
import {
  getArticleCommentsError,
  getArticleCommentsIsLoading
} from '../../model/selectors/comments'
import {useInitialEffect} from 'shared/lib/hooks/useInitialEffect'
import {fetchArticleById} from 'entities/Article/model/services/fetchArticleById/fetchArticleById'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch'
import {fetchCommentsByArticleId} from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import {AddCommentForm} from 'features/addCommentForm'
import {addCommentForArticle} from 'pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle'

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const {t} = useTranslation()
  const {className} = props
  const {id} = useParams<{id: string}>()
  const comments = useSelector(getArticleComments.selectAll)
  const isCommentsLoading = useSelector(getArticleCommentsIsLoading)
  const commentsError = useSelector(getArticleCommentsError)
  const dispatch = useAppDispatch()

  useInitialEffect(() => dispatch(fetchCommentsByArticleId(id)))
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

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <ArticleDetails id={id} />
        <Text className={cls.commentsTitle} title={t('Comments')} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList
          isLoading={isCommentsLoading}
          comments={comments} />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage)