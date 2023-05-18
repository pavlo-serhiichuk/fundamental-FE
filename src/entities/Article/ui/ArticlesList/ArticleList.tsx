import {FC} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticleList.module.scss'
import {memo} from 'react'
import {Article, ArticleView} from '../../model/types/article'
import {ArticleItem} from '../ArticleItem/ArticleItem'
import {ArticleItemSkeleton} from 'entities/Article/ui/ArticleItem/ArticleListItemSkeleton'
import {useSelector} from 'react-redux'
import {getArticlesPageHasMore} from 'pages/ArticlesPage/model/selectors/getArticlesListSelectors'

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
  const {className, articles, isLoading, view} = props
  const hasMore = useSelector(getArticlesPageHasMore)
  const renderArticle = (article: Article) => {
    return (
      <ArticleItem key={article.id} article={article} view={view} />
    )
  }
  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {articles.length
        ? articles.map(renderArticle)
        : null}
      {isLoading && hasMore && getSkeletons(view)}
    </div>
  );
});