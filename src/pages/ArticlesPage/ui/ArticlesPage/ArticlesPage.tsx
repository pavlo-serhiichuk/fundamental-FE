import {FC, memo} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import cls from './ArticlesPage.module.scss'
import {Article, ArticleList, ArticleView} from 'entities/Article'

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
  const {className} = props

  return (
    <div className={classNames(cls.ArticlesPage, {}, [className])}>
      <ArticleList
        articles={[]}
        isLoading={true}
        view={ArticleView.BIG}
      />
    </div>
  );
};

export default memo(ArticlesPage)