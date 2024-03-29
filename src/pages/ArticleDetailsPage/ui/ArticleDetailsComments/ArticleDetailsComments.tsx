import {FC, useCallback, Suspense} from 'react'
import {classNames} from '@/shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import {memo} from 'react'
import {AddCommentForm} from '@/features/addCommentForm'
import {CommentList} from '@/entities/Comment'
import {addCommentForArticle} from '@/pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle'
import cls from '@/pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage.module.scss'
import {useSelector} from 'react-redux'
import {getArticleComments} from '@/pages/ArticleDetailsPage/model/slices/ArticleDetailsCommentsSlice'
import {useAppDispatch} from '@/shared/lib/hooks/useAppDispatch'
import {Text} from '@/shared/ui/Text'
import {getArticleCommentsIsLoading} from '@/pages/ArticleDetailsPage/model/selectors/comments'
import {Loader} from '@/shared/ui/Loader'

interface ArticleDetailsCommentsProps {
  className?: string;
  id: string | undefined
}

export const ArticleDetailsComments: FC<ArticleDetailsCommentsProps> = memo((props) => {
  const {t} = useTranslation()
  const {className, id} = props
  const dispatch = useAppDispatch()
  const comments = useSelector(getArticleComments.selectAll)
  const isLoading = useSelector(getArticleCommentsIsLoading)

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text))
  }, [dispatch])

  return (
    <div className={classNames('', {}, [className])}>
      <Text className={cls.commentsTitle} title={t('Comments')} />
      <Suspense fallback={<Loader />}>
        <AddCommentForm onSendComment={onSendComment} />
      </Suspense>
      <CommentList
        isLoading={isLoading}
        comments={comments}
      />
    </div>
  );
});