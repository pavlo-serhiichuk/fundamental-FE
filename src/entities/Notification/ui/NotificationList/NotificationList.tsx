import {FC} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import cls from './NotificationList.module.scss'
import {memo} from 'react'
import {useNotifications} from 'entities/Notification/api/notificationApi'
import {VStack} from 'shared/ui/Stack'
import {NotificationItem} from 'entities/Notification/ui/NotificationItem/NotificationItem'
import {Skeleton} from 'shared/ui/Skeleton/Skeleton'

interface NotificationListProps {
  className?: string;
}

export const NotificationList: FC<NotificationListProps> = memo((props) => {
  const {t} = useTranslation()
  const {className} = props
  const {data, isLoading} = useNotifications(null, {
    pollingInterval: 5000
  })

  if (isLoading) {
    return (
      <VStack
        max
        gap={'16'}
        className={classNames(cls.NotificationList, {}, [className])}>
        <Skeleton  width={'300px'} borderRadius={'8px'} height="80px"/>
        <Skeleton  width={'300px'} borderRadius={'8px'} height="80px"/>
        <Skeleton  width={'300px'} borderRadius={'8px'} height="80px"/>
      </VStack>
    )
  }

  return (
    <VStack
      max
      gap={'16'}
      className={classNames(cls.NotificationList, {}, [className])}>
      {data?.map(item => (
        <NotificationItem key={item.id} item={item}/>
      ))}
    </VStack>
  );
});