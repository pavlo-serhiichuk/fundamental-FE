import {FC, ReactNode} from 'react'
import {classNames} from '@/shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import cls from './Popover.module.scss'
import popupsCls from '../../styles/popups.module.scss'
import {memo} from 'react'
import { Popover as HPopover } from '@headlessui/react'
import {DropdownDirection} from '@/shared/types/ui'
import {mapDirectionClass} from '@/shared/ui/Popups/styles/consts'

interface PopoverProps {
  className?: string;
  trigger: ReactNode
  direction?: DropdownDirection
  children: ReactNode
}

export const Popover: FC<PopoverProps> = memo((props) => {
  const {className, trigger, direction = 'bottom right', children} = props
  const {t} = useTranslation()

  const menuClasses = [mapDirectionClass[direction]]

  return (
    <HPopover className={classNames(cls.Popover, {}, [className, popupsCls.popup])}>
      <HPopover.Button as={'div'} className={popupsCls.trigger}>
        {trigger}
      </HPopover.Button>
      <HPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>
        {children}
      </HPopover.Panel>
    </HPopover>
  );
});