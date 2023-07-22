import {FC, useState} from 'react'
import cls from './NotificationButton.module.scss'
import {memo} from 'react'
import {Button, ButtonTheme} from 'shared/ui/Button/Button'
import {Icon} from 'shared/ui/Icon/Icon'
import NotificationsIcon from 'shared/assets/icons/notifications.svg'
import {NotificationList} from 'entities/Notification'
import {Popover} from 'shared/ui/Popups'
import {Drawer} from 'shared/ui/Drawer/Drawer'
import {BrowserView, MobileView} from 'react-device-detect'

export const NotificationButton: FC = memo((props) => {
  const [isOpen, setIsOpen] = useState(false)
  const trigger = (
    <Button onClick={() => setIsOpen(true)} theme={ButtonTheme.CLEAR}>
      <Icon inverted Svg={NotificationsIcon} />
    </Button>
  )
  return (
    <div>
      <BrowserView>
        <Popover
          direction={'bottom left'}
          trigger={trigger}
        >
          <NotificationList className={cls.notifications} />
        </Popover>
      </BrowserView>
      <MobileView>
        {trigger}
        <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <NotificationList />
        </Drawer>
      </MobileView>

    </div>
  );
});