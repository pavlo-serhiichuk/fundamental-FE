import {FC, memo, useCallback, useEffect} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import cls from './ArticleDetails.module.scss'
import {DynamicModuleLoader, ReducersList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {articleDetailsReducer} from '../../model/slice/articleDetailsSlice'
import {fetchArticleById} from '../../model/services/fetchArticleById/fetchArticleById'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch'
import {useSelector} from 'react-redux'
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails'
import {Text, TextAlign, TextSize} from 'shared/ui/Text/Text'
import {Skeleton} from 'shared/ui/Skeleton/Skeleton'
import {Avatar} from 'shared/ui/Avatar/Avatar'
import EyeIcon from 'shared/assets/icons/eye.svg'
import CalendarIcon from 'shared/assets/icons/calendar.svg'
import {Icon} from 'shared/ui/Icon/Icon'
import {ArticleBlock, ArticleBlockType} from '../../model/types/article'
import {ArticleCodeBlockComponent} from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import {ArticleTextBlockComponent} from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import {ArticleImageBlockComponent} from '../ArticleImageBlockComponent/ArticleImageBlockComponent'

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

export const ArticleDetails: FC<ArticleDetailsProps> = memo((props) => {
  const {t} = useTranslation()
  const {className, id} = props
  const dispatch = useAppDispatch()
  const article = useSelector(getArticleDetailsData)
  const isLoading = useSelector(getArticleDetailsIsLoading)
  const error = useSelector(getArticleDetailsError)

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch(block.type) {
      case ArticleBlockType.CODE:
        return <ArticleCodeBlockComponent
          key={block.id}
          className={cls.block}
          block={block}
        />
      case ArticleBlockType.TEXT:
        return <ArticleTextBlockComponent
          key={block.id}
          className={cls.block}
          block={block}
        />
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlockComponent
          key={block.id}
          className={cls.block}
          block={block}
        />
      default:
        return null
    }
  }, [])

  useEffect(() => {
    if(__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id))
    }
  }, [dispatch, id])

  let content

  if (isLoading) {
    content = (
      <>
        <Skeleton className={cls.avatar} width={100} height={100} borderRadius={'50%'} />
        <Skeleton className={cls.title} width={450} height={30} />
        <Skeleton className={cls.skeleton} width={600} height={60} />
        <Skeleton className={cls.skeleton} width={500} height={60} />
      </>
    )
  } else if (error) {
    content = (
      <Text
        align={TextAlign.CENTER}
        text={t('Error during article loading.')}
      />
    )
  } else if (article) {
    content = (
      <>
        <div className={cls.avatarWrapper}>
          <Avatar
            size={200}
            src={article?.image}
            className={cls.avatar}
          />
        </div>
        <Text
          className={cls.title}
          title={article?.title}
          text={article?.subtitle}
          size={TextSize.L}
        />
        <div className={cls.articleInfo}>
          <Icon Svg={EyeIcon} className={cls.icon}/>
          <Text text={String(article?.views)} />
        </div>
        <div className={cls.articleInfo}>
          <Icon Svg={CalendarIcon} className={cls.icon}/>
          <Text text={article?.created} />
        </div>
        {article?.blocks.map(renderBlock)}
      </>
    )
  }

  const reducers: ReducersList = {
    articleDetails: articleDetailsReducer
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.ArticleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
});