import {FC, useCallback} from 'react'
import {useTranslation} from 'react-i18next'
import {memo} from 'react'
import {RatingCard} from '@/entities/Rating'
import {useGetArticleRating, useRateArticle} from '../../api/articleRatingApi'
import {useSelector} from 'react-redux'
import {getUserAuthData} from '@/entities/User'
import {Skeleton} from '@/shared/ui/Skeleton'

export interface ArticleRatingProps {
  className?: string;
  articleId: string
}

const ArticleRating: FC<ArticleRatingProps> = memo((props) => {
  const {t} = useTranslation()
  const {className, articleId} = props
  const userData = useSelector(getUserAuthData)

  const [rateArticleMutation] = useRateArticle()
  const {data, isLoading} = useGetArticleRating({articleId, userId: userData?.id ?? ''})
  const rating = data?.[0]

  const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
    try {
      rateArticleMutation({
        articleId,
        rate: starsCount,
        feedback,
        userId: userData?.id ?? '',
      })
    } catch (e) {
      console.log(e)
    }
  }, [articleId, rateArticleMutation, userData?.id])

  const onAccept = useCallback((starsCount: number, feedback?: string) => {
    handleRateArticle(starsCount, feedback)
  }, [])

  const onCancel = useCallback((starsCount: number) => {
    handleRateArticle(starsCount)
  }, [])

  if (isLoading) {
    return (
      <Skeleton width="100%" height={120} />
    )
  }


  return (
    <RatingCard
      onCancel={onCancel}
      onAccept={onAccept}
      rate={rating?.rate}
      className={className}
      title={t('Estimate this article')}
      feedbackTitle={t('Please, leave your feedback')}
      hasFeedback
    />
  );
});

export default ArticleRating