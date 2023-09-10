import {FC, memo} from 'react'
import {useTranslation} from 'react-i18next'
import cls from './CommentItem.module.scss'
import {Comment} from '../../model/types/comment'
import {Skeleton} from '@/shared/ui/Skeleton'
import {Text, TextSize} from '@/shared/ui/Text'
import {Avatar} from '@/shared/ui/Avatar'
import {AppLink} from '@/shared/ui/AppLink'
import {HStack, VStack} from '@/shared/ui/Stack'
import {getRouteProfile} from '@/shared/consts/router'

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
      <VStack>
        <HStack>
          <Skeleton borderRadius={'50%'} height={50} width={50} />
          <Skeleton height={30} width={150} />
        </HStack>
        <Skeleton height={50} width={500} marginTop={10} />
      </VStack>
    )
  }

  if (!comment) {
    return null
  }

  return (
    <VStack className={cls.CommentItem}>
      <AppLink to={getRouteProfile(comment.user.id)}>
        <HStack gap={'8'}>
          <Avatar size={30} src={comment.user?.avatar} />
          <Text title={comment.user?.username} size={TextSize.M} />
        </HStack>
      </AppLink>
      <Text text={comment.text} />
    </VStack>
  );
});