import {FC, memo} from 'react'
import {classNames} from '@/shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import cls from './ArticleImageBlockComponent.module.scss'
import {ArticleImageBlock} from '@/entities/Article/model/types/article'
import {Text, TextAlign} from '@/shared/ui/Text/Text'

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock
}

export const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = memo((props) => {
  const {t} = useTranslation()
  const {
    className,
    block
  } = props

  return (
    <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
      <img src={block.src} alt={block.title} className={cls.img}/>
      {block.title && (
        <Text align={TextAlign.CENTER} text={block.title}/>
      )}
    </div>
  );
})