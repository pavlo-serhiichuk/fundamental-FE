import {FC, memo} from 'react'
import {useSelector} from 'react-redux'
import {getArticles} from '../../model/slices/articlesPageSlice'
import {getArticlesListError, getArticlesListIsLoading, getArticlesPageView} from '../../model/selectors/getArticlesListSelectors'
import {ArticleList} from '@/entities/Article'

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