import {FC, memo} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import cls from './CommentItem.module.scss'
import {Comment} from '../../model/types/comment'
import {Skeleton} from 'shared/ui/Skeleton/Skeleton'
import {Text, TextSize} from 'shared/ui/Text/Text'
import {Avatar} from 'shared/ui/Avatar/Avatar'

interface CommentItemProps {
  className?: string;
  comment: Comment
  isLoading?: boolean
}

export const CommentItem: FC<CommentItemProps> = memo((props) => {
  const {t} = useTranslation()

  const {
    className,
    comment,
    isLoading
  } = props

  if (isLoading) {
    return (
      <div className={classNames(cls.CommentItem, {}, [className])}>
        <Skeleton borderRadius={'50%'} height={50} width={50} />
        <div className={cls.userInfo}>
          <Skeleton height={30} width={150} />
          <Skeleton height={50} width={500} marginTop={10}/>
        </div>
      </div>
    )
  }

  return (
    <div className={classNames(cls.CommentItem, {}, [className])}>
      <Avatar size={50} src={comment.user?.avatar} />
      <div className={cls.userInfo}>
        <Text title={comment.user?.username} size={TextSize.M} />
        <Text text={comment.text} />
      </div>
      </div>
  );
});