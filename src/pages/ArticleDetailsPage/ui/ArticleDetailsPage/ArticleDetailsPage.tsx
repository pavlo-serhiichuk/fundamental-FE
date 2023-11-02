import {FC, memo} from 'react'
import {classNames} from '@/shared/lib/classNames/classNames'
import cls from './ArticleDetailsPage.module.scss'
import {ArticleDetails} from '@/entities/Article'
import {useParams} from 'react-router-dom'
import {DynamicModuleLoader, ReducersList} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {useInitialEffect} from '@/shared/lib/hooks/useInitialEffect'
import {useAppDispatch} from '@/shared/lib/hooks/useAppDispatch'
import {
  fetchCommentsByArticleId
} from '@/pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import {Page} from '@/shared/ui/Page'
import {fetchArticleRecList} from '@/pages/ArticleDetailsPage/model/services/fetchArticleRec/fetchArticleRec'
import {ArticleDetailsPageHeader} from '@/pages/ArticleDetailsPage/ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader'
import {ArticleRecommendationsList} from '@/features/articleRecommendationsList'
import {ArticleDetailsComments} from '@/pages/ArticleDetailsPage/ui/ArticleDetailsComments/ArticleDetailsComments'
import {ArticleRating} from '@/features/articleRating'
import {getFeatureFlag, toggleFeatures} from '@/shared/lib/features'
import {Card} from '@/shared/ui/Card'
import {articleDetailsPageRecReducer} from '@/pages/ArticleDetailsPage/model/slices/ArticleDetailsPageRecSlice'
import {articleDetailsCommentsReducer} from '@/pages/ArticleDetailsPage/model/slices/ArticleDetailsCommentsSlice'

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
// @ts-ignore
  articleDetailsPageRec: articleDetailsPageRecReducer,
  articleDetailsPageComments: articleDetailsCommentsReducer
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const {className} = props
  const {id} = useParams<{id: string}>()
  const dispatch = useAppDispatch()
  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
    dispatch(fetchArticleRecList())
  })

  if(!id) {
    return null
  }

  const rating = toggleFeatures({
    name: 'isArticleRatingEnabled',
    on: () => <ArticleRating articleId={id} />,
    off: () => <Card>There is gonna be card rating</Card>
  })

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        {rating}
        <ArticleRecommendationsList />
        <ArticleDetailsComments id={id} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage)