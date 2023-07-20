import {Menu} from '@headlessui/react';
import {Fragment, ReactNode} from 'react'
import cls from './Dropdown.module.scss'
import popupsCls from '../../styles/popups.module.scss'
import {classNames} from 'shared/lib/classNames/classNames'
import {DropdownDirection} from 'shared/types/ui'
import {AppLink} from 'shared/ui/AppLink/AppLink'
import {mapDirectionClass} from '../../styles/consts'

interface DropdownItem {
  disabled?: boolean
  content?: ReactNode,
  onClick?: () => void
  href?: string
}

interface DropdownProps {
  className?: string
  items: DropdownItem[]
  trigger: ReactNode
  direction?: DropdownDirection
}

export function Dropdown(props: DropdownProps) {
  const {className, trigger, items, direction = 'bottom left'} = props
  return (
    <Menu
      as={'div'}
      className={classNames(cls.Dropdown, {}, [className, popupsCls.popup])}
    >
      <Menu.Button className={popupsCls.trigger}>
        {trigger}
      </Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, [mapDirectionClass[direction]])}>
          {items.map((item, i) => {
          const content = ({active}: { active: boolean }) => (
            <button
              type={'button'}
              onClick={item.onClick}
              disabled={item.disabled}
              className={classNames(cls.item, {[popupsCls.active]: active})}
            >
              {item.content}
            </button>
          )

          if(item.href) {
            return (
              <Menu.Item key={i} as={AppLink} to={item.href} disabled={item.disabled}>
                {content}
              </Menu.Item>
            )
          }

          return (
            <Menu.Item key={i} as={Fragment} disabled={item.disabled}>
              {content}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  )
}