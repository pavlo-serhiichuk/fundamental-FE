import {FC, memo} from 'react'
import {classNames} from '@/shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import cls from './ArticleDetailsPage.module.scss'
import {ArticleDetails} from '@/entities/Article'
import {useParams} from 'react-router-dom'
import {DynamicModuleLoader, ReducersList} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {useInitialEffect} from '@/shared/lib/hooks/useInitialEffect'
import {useAppDispatch} from '@/shared/lib/hooks/useAppDispatch'
import {
  fetchCommentsByArticleId
} from '@/pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import {Page} from '@/shared/ui/Page/Page'
import {fetchArticleRecList} from '@/pages/ArticleDetailsPage/model/services/fetchArticleRec/fetchArticleRec'
import {articleDetailsPageReducer} from '@/pages/ArticleDetailsPage/model/slices'
import {ArticleDetailsPageHeader} from '@/pages/ArticleDetailsPage/ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader'
import {ArticleRecommendationsList} from '@/features/articleRecommendationsList'
import {ArticleDetailsComments} from '@/pages/ArticleDetailsPage/ui/ArticleDetailsComments/ArticleDetailsComments'

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const {className} = props
  const {id} = useParams<{id: string}>()
  const dispatch = useAppDispatch()

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
    dispatch(fetchArticleRecList())
  })

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <ArticleRecommendationsList />
        <ArticleDetailsComments id={id} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage)