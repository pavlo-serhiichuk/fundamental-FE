import {ReactNode} from 'react'
import {Listbox as HListBox} from '@headlessui/react'
import cls from './ListBox.module.scss'
import popupsCls from '../../styles/popups.module.scss'
import {classNames} from '@/shared/lib/classNames/classNames'
import {Button} from '@/shared/ui/Button/Button'
import {HStack} from '@/shared/ui/Stack'
import {DropdownDirection} from '@/shared/types/ui'
import {mapDirectionClass} from '../../styles/consts'

export interface ListBoxItem {
  value: string
  content: ReactNode
  disabled?: boolean
}

interface ListBoxProps {
  items?: ListBoxItem[]
  className?: string
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  readonly?: boolean
  direction?: DropdownDirection
  label?: string
}

export function ListBox(props: ListBoxProps) {
  const {
    items,
    className,
    value,
    defaultValue,
    onChange,
    readonly,
    direction = 'bottom left',
    label
  } = props

  return (
    <HStack gap={'8'}>
      {label && <span>{label}: </span>}
      <HListBox
        disabled={readonly}
        as={'div'}
        className={classNames(cls.ListBox, {}, [className])}
        value={value}
        onChange={onChange}
      >
        <HListBox.Button className={cls.trigger}>
          <Button disabled={readonly}>
            {value ?? defaultValue}
          </Button>
        </HListBox.Button>
        <HListBox.Options className={classNames(cls.options, {}, [mapDirectionClass[direction]])}>
          {items?.map((item) => (
            <HListBox.Option
              className={cls.item}
              key={item.value}
              value={item.value}
              disabled={item.disabled}
            >
              {({active, selected}) => (
                <li
                  className={classNames(cls.item, {[popupsCls.active]: active || selected, [popupsCls.disabled]: item.disabled})}
                >
                  {item.content}
                  {selected && '💡'}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  )
}