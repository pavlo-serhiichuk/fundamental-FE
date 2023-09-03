import {FC, useCallback} from 'react'
import {classNames} from '@/shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import {memo} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {Button} from '@/shared/ui/Button'
import {useSelector} from 'react-redux'
import {getCanEditArticle} from '@/pages/ArticleDetailsPage/model/selectors/article'
import {HStack} from '@/shared/ui/Stack'
import {RoutePath} from '@/shared/consts/router'

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader: FC<ArticleDetailsPageHeaderProps> = memo((props) => {
  const {t} = useTranslation()
  const {className} = props
  const navigate = useNavigate()
  const {id} = useParams<{id: string}>()
  const canEdit = useSelector(getCanEditArticle)

  const onBackToArticles = useCallback(() => {
    navigate(RoutePath.articles)
  }, [])

  const onEditArticle = useCallback(() => {
    navigate(`${RoutePath.articles_details}${id}/edit`)
  }, [])

  return (
    <HStack justify={'between'} className={classNames('', {}, [className])}>
      <Button onClick={onBackToArticles}>
        {t('Back to articles')}
      </Button>
      {canEdit &&
          <Button onClick={onEditArticle} className={''}>
            {t('Edit')}
          </Button>
      }
    </HStack>
  );
});