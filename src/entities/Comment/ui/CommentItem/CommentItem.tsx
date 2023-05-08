import {FC, memo} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import cls from './CommentItem.module.scss'
import {Comment} from '../../model/types/comment'
import {Skeleton} from 'shared/ui/Skeleton/Skeleton'
import {Text, TextSize} from 'shared/ui/Text/Text'
import {Avatar} from 'shared/ui/Avatar/Avatar'
import {AppLink} from 'shared/ui/AppLink/AppLink'
import {RoutePath} from 'shared/config/routeConfig/routeConfig'

interface CommentItemProps {
  className?: string;
  comment?: Comment
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
        <div className={cls.userInfo}>
          <Skeleton borderRadius={'50%'} height={50} width={50} />
          <Skeleton height={30} width={150} />
        </div>
        <Skeleton height={50} width={500} marginTop={10} />
      </div>
    )
  }

  if(!comment) {
    return null
  }

  return (
    <div className={classNames(cls.CommentItem, {}, [className])}>
      <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={cls.userInfo}>
        <Avatar size={30} src={comment.user?.avatar} />
        <Text title={comment.user?.username} size={TextSize.M} />
      </AppLink>
      <Text text={comment.text} />
    </div>
  );
});