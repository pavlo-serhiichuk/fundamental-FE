import {FC} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import cls from './ArticleList.module.scss'
import {memo} from 'react'
import {Article, ArticleView} from '../../model/types/article'
import {ArticleItem} from '../ArticleItem/ArticleItem'
import {ArticleItemSkeleton} from 'entities/Article/ui/ArticleItem/ArticleListItemSkeleton'

interface ArticleListProps {
  className?: string;
  articles: Article[]
  isLoading: boolean
  view: ArticleView
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
  .fill(0)
  .map((item, index) => (
    <ArticleItemSkeleton view={view} key={index} />
  ))

export const ArticleList: FC<ArticleListProps> = memo((props) => {
  const {t} = useTranslation()
  const {className, articles, isLoading, view} = props

  const renderArticle = (article: Article) => {
    return (
      <ArticleItem key={article.id} article={article} view={view} />
    )
  }

  if (isLoading) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        {getSkeletons(view)}
      </div>
    )
  }

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {articles.length
        ? articles.map(renderArticle)
        : null}
    </div>
  );
});