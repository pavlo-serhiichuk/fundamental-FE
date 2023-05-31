import {FC, HTMLAttributeAnchorTarget, memo} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticleList.module.scss'
import {Article, ArticleView} from '../../model/types/article'
import {ArticleItem} from '../ArticleItem/ArticleItem'
import {ArticleItemSkeleton} from 'entities/Article/ui/ArticleItem/ArticleListItemSkeleton'
import {useSelector} from 'react-redux'
import {getArticlesPageHasMore} from 'pages/ArticlesPage/model/selectors/getArticlesListSelectors'
import {Text, TextSize} from 'shared/ui/Text/Text'
import {useTranslation} from 'react-i18next'

interface ArticleListProps {
  className?: string;
  articles: Article[]
  isLoading: boolean
  view: ArticleView
  target?: HTMLAttributeAnchorTarget
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
  .fill(0)
  .map((item, index) => (
    <ArticleItemSkeleton view={view} key={index} />
  ))

export const ArticleList: FC<ArticleListProps> = memo((props) => {
  const {t} = useTranslation()
  const {className, articles, isLoading, view, target} = props
  const hasMore = useSelector(getArticlesPageHasMore)
  const renderArticle = (article: Article) => {
    return (
      <ArticleItem
        target={target}
        key={article.id}
        article={article}
        view={view}
      />
    )
  }

  if(!isLoading && !articles.length) {
    return <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      <Text text={t('No article with these params')} size={TextSize.L}/>
    </div>
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