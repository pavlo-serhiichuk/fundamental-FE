import {FC, HTMLAttributeAnchorTarget, memo, useCallback} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import cls from './ArticleItem.module.scss'
import {Article, ArticleBlockType, ArticleTextBlock, ArticleType, ArticleView} from '../../model/types/article'
import EyeIcon from 'shared/assets/icons/eye.svg'
import {Icon} from 'shared/ui/Icon/Icon'
import {Text} from 'shared/ui/Text/Text'
import {Card} from 'shared/ui/Card/Card'
import {Avatar} from 'shared/ui/Avatar/Avatar'
import {Button, ButtonTheme} from 'shared/ui/Button/Button'
import {ArticleTextBlockComponent} from 'entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent'
import {useNavigate} from 'react-router-dom'
import {RoutePath} from 'shared/config/routeConfig/routeConfig'
import {AppLink} from 'shared/ui/AppLink/AppLink'

interface ArticleItemProps {
  className?: string;
  article: Article
  view?: ArticleView
  target?: HTMLAttributeAnchorTarget
}

export const ArticleItem: FC<ArticleItemProps> = memo((props) => {
  const {t} = useTranslation()
  const {className, article, view = ArticleView.SMALL, target} = props
  const navigate = useNavigate()

  const topics = <Text text={article.type?.join(' | ')} className={cls.articleTypes} />
  const views = <div className={cls.views}>
    <Icon Svg={EyeIcon} />
    <Text text={String(article.views)} />
  </div>

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks.find(block => block.type === ArticleBlockType.TEXT) as ArticleTextBlock
    return (
      <div className={classNames(cls.ArticleItem, {}, [className, cls[view]])}>
        <div className={cls.created}>{article.created}</div>
        <Card className={cls.cart}>
          <div className={cls.header}>
            <Avatar size={30} src={article.user.avatar} />
            <Text title={article.user.username} className={cls.username} />
          </div>
          <Text title={article.title} className={cls.title} />
          {topics}
          <img src={article.image} alt={article.image} className={cls.image} />
          {textBlock && (
            <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
          )}
          <div className={cls.footer}>
            <AppLink to={RoutePath.articles_details + article.id}>
              <Button theme={ButtonTheme.OUTLINE}>
                {t('Read further...')}
              </Button>
            </AppLink>
            {views}
          </div>
        </Card>
      </div>
    )
  }

  return (
    <AppLink to={RoutePath.articles_details + article.id} target={target}>
      <div
        className={classNames(cls.ArticleItem, {}, [className, cls[view]])}
      >
        <Card>
          <div className={cls.created}>{article.created}</div>
          <div className={cls.imageWrapper}>
            <img className={cls.image} alt={article.title} src={article.image} />
          </div>
          <div className={cls.articleDetails}>
            {topics}
            {views}
          </div>
          <Text text={article.title} className={cls.title} />
        </Card>
      </div>
    </AppLink>
  );
});