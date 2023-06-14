import {Menu} from '@headlessui/react';
import {Fragment, ReactNode} from 'react'
import cls from './Dropdown.module.scss'
import {classNames} from 'shared/lib/classNames/classNames'
import {DropdownDirection} from 'shared/types/ui'
import {AppLink} from 'shared/ui/AppLink/AppLink'

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

const mapDirectionClass: Record<DropdownDirection, string> = {
  'top left': cls.optionsTopLeft,
  'top right': cls.optionsTopRight,
  'bottom left': cls.optionsBottomLeft,
  'bottom right': cls.optionsBottomRight,
}

export function Dropdown(props: DropdownProps) {
  const {className, trigger, items, direction = 'bottom right'} = props

  return (
    <Menu
      as={'div'}
      className={classNames(cls.Dropdown, {}, [className])}
    >
      <Menu.Button className={cls.btn}>
        {trigger}
      </Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, [mapDirectionClass[direction]])}>
        {items.map(item => {

          const content = ({active}: { active: boolean }) => (
            <button
              type={'button'}
              onClick={item.onClick}
              disabled={item.disabled}
              className={classNames(cls.item, {[cls.active]: active})}
            >
              {item.content}
            </button>
          )

          if(item.href) {
            return (
              <Menu.Item as={AppLink} to={item.href} disabled={item.disabled}>
                {content}
              </Menu.Item>
            )
          }

          return (
            <Menu.Item as={Fragment} disabled={item.disabled}>
              {content}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  )
}