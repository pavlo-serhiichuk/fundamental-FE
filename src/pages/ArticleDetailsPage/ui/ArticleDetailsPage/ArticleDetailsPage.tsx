import {FC, memo} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import cls from './ArticleDetailsPage.module.scss'
import {ArticleDetails} from 'entities/Article'
import {useParams} from 'react-router-dom'

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const {t} = useTranslation()
  const {className} = props
  const {id} = useParams<{id: string}>()

  if(!id) {
    return (
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        {t('Article wasn\'t found')}
      </div>
    )
  }

  return (
    <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      <ArticleDetails id={id} />
    </div>
  );
};

export default memo(ArticleDetailsPage)