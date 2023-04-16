import {ChangeEvent, FC, memo, useMemo} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import cls from './Select.module.scss'

export interface SelectOption {
  value: string
  content: string
}

interface SelectProps {
  className?: string;
  label?: string
  options?: SelectOption[]
  value?: string;
  onChange?: (value: string) => void
  readonly?: boolean
}

export const Select: FC<SelectProps> = memo((props) => {
  const {t} = useTranslation()
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
    onChange?.(e.target.value)
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
});