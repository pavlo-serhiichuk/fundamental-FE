import {FC} from 'react'
import cls from './NotificationButton.module.scss'
import {memo} from 'react'
import {Button, ButtonTheme} from 'shared/ui/Button/Button'
import {Icon} from 'shared/ui/Icon/Icon'
import NotificationsIcon from 'shared/assets/icons/notifications.svg'
import {NotificationList} from 'entities/Notification'
import {Popover} from 'shared/ui/Popups'

export const NotificationButton: FC = memo((props) => {

  return (
      <Popover
        direction={'bottom left'}
        trigger={<Button theme={ButtonTheme.CLEAR}>
          <Icon inverted Svg={NotificationsIcon}/>
        </Button>}
      >
        <NotificationList className={cls.notifications} />
      </Popover>
  );
});