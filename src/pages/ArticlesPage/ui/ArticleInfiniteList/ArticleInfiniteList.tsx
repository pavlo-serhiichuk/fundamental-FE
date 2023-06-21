import {FC, memo} from 'react'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'
import {getArticles} from 'pages/ArticlesPage/model/slices/articlesPageSlice'
import {getArticlesListError, getArticlesListIsLoading, getArticlesPageView} from 'pages/ArticlesPage'
import {ArticleList} from 'entities/Article'

interface ArticleInfiniteListProps {
  className?: string;
}

export const ArticleInfiniteList: FC<ArticleInfiniteListProps> = memo((props) => {
    const {className} = props
    const articles = useSelector(getArticles.selectAll)
    const isLoading = useSelector(getArticlesListIsLoading)
    const error = useSelector(getArticlesListError)
    const view = useSelector(getArticlesPageView)

    if (error) {
      return <div>oh shit... here we again</div>
    }

    return (
      <ArticleList
        articles={articles}
        isLoading={isLoading}
        view={view}
        className={className}
      />
    )
  })
;