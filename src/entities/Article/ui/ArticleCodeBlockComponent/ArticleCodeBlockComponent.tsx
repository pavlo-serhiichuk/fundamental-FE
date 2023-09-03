import {FC, memo} from 'react'
import {classNames} from '@/shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import cls from './ArticleCodeBlockComponent.module.scss'
import {ArticleCodeBlock} from '../../model/types/article'
import {Code} from '@/shared/ui/Code'

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> = memo((props) => {
  const {t} = useTranslation()
  const {
    className,
    block
  } = props

  return (
    <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
      <Code text={block.code} />
    </div>
  );
})