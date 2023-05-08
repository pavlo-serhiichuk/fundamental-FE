import {FC, memo} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import cls from './CommentList.module.scss'
import {Comment} from '../../model/types/comment'
import {CommentItem} from '../CommentItem/CommentItem'
import {Text, TextSize} from 'shared/ui/Text/Text'

interface CommentListProps {
  className?: string;
  comments: Comment[]
  isLoading?: boolean
  error?: string | undefined
}

export const CommentList: FC<CommentListProps> = memo((props) => {
  const {t} = useTranslation()
  const {className, comments, isLoading} = props

  if (isLoading) {
    return (
      <div className={classNames(cls.CommentList, {}, [className])}>
        <CommentItem  isLoading />
        <CommentItem  isLoading />
      </div>
    )
  }

  return (
    <div className={classNames(cls.CommentList, {}, [className])}>
      {!comments.length && <Text size={TextSize.L} text={t('No comments for this article')} />}
      {comments.map(comment =>
        <CommentItem
          key={comment.id}
          isLoading={isLoading}
          comment={comment}
        />)}
    </div>
  );
});