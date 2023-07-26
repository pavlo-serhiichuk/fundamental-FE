import {FC, memo, useCallback} from 'react'
import {classNames} from '@/shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import cls from './ArticleDetails.module.scss'
import {DynamicModuleLoader, ReducersList} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {articleDetailsReducer} from '../../model/slice/articleDetailsSlice'
import {fetchArticleById} from '../../model/services/fetchArticleById/fetchArticleById'
import {useAppDispatch} from '@/shared/lib/hooks/useAppDispatch'
import {useSelector} from 'react-redux'
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails'
import {Text, TextAlign, TextSize} from '@/shared/ui/Text/Text'
import {Skeleton} from '@/shared/ui/Skeleton/Skeleton'
import {Avatar} from '@/shared/ui/Avatar/Avatar'
import EyeIcon from '@/shared/assets/icons/eye.svg'
import CalendarIcon from '@/shared/assets/icons/calendar.svg'
import {Icon} from '@/shared/ui/Icon/Icon'
import {ArticleBlock} from '../../model/types/article'
import {ArticleCodeBlockComponent} from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import {ArticleTextBlockComponent} from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import {ArticleImageBlockComponent} from '../ArticleImageBlockComponent/ArticleImageBlockComponent'
import {useInitialEffect} from '@/shared/lib/hooks/useInitialEffect'
import {HStack} from '@/shared/ui/Stack'
import {ArticleBlockType} from '@/entities/Article/model/consts/consts'

interface ArticleDetailsProps {
  className?: string;
  id?: string | undefined;
}

export const ArticleDetails: FC<ArticleDetailsProps> = memo((props) => {
  const {t} = useTranslation()
  const {className, id} = props
  const dispatch = useAppDispatch()
  const article = useSelector(getArticleDetailsData)
  const isLoading = useSelector(getArticleDetailsIsLoading)
  const error = useSelector(getArticleDetailsError)
  useInitialEffect(() => dispatch(fetchArticleById(id)))

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

  let content

  if (isLoading) {
    content = (
      <>
        <HStack justify={'center'} max>
          <Skeleton className={cls.avatar} width={150} height={150} borderRadius={'50%'} />
        </HStack>
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
        <HStack justify={'center'} max>
          <Avatar
            size={200}
            src={article?.image}
            className={cls.avatar}
          />
        </HStack>
        <Text
          className={cls.title}
          title={article?.title}
          text={article?.subtitle}
          size={TextSize.L}
        />
        <HStack gap={'8'}>
          <Icon Svg={EyeIcon}/>
          <Text text={String(article?.views)} />
        </HStack>
        <HStack gap={'8'}>
          <Icon Svg={CalendarIcon}/>
          <Text text={article?.created} />
        </HStack>
        {article?.blocks.map(renderBlock)}
      </>
    )
  }

  const reducers: ReducersList = {
    articleDetails: articleDetailsReducer
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.ArticleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
});