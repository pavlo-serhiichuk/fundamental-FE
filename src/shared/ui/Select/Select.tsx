import {ChangeEvent, useMemo} from 'react'
import {classNames} from '@/shared/lib/classNames/classNames'
import cls from './Select.module.scss'

export interface SelectOption<T extends string> {
  value: T
  content: string
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string
  options?: SelectOption<T>[]
  value?: T;
  onChange?: (value: T) => void
  readonly?: boolean
}

export const Select = <T extends string>(props: SelectProps<T>) => {
  const {
    className,
    label,
    options,
    value,
    onChange,
    readonly
  } = props

  const optionsList = useMemo(() => {
   return options?.map(option => (<option key={option.value} className={cls.option} value={option.value}>{option.content}</option>))
  }, [options])

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T)
  }

  return (
    <div className={classNames(cls.Select, {}, [className])}>
      {label && (
        <span className={cls.label}>
          {label}:
        </span>
      )}
      <select
        disabled={readonly}
        className={cls.select}
        value={value}
        onChange={onChangeHandler}
      >
        {optionsList}
      </select>
    </div>
  );
};