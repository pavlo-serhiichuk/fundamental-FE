import React, {FC, InputHTMLAttributes, memo, useEffect, useRef, useState} from 'react'
import {classNames, Mods} from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
  value?: string | number;
  className?: string;
  onChange?: (value: string) => void
  autofocus?: boolean
  readonly?: boolean
}

export const Input:FC<InputProps> = memo((props) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus = false,
    readonly,
    ...otherProps
  } = props

  const ref = useRef<HTMLInputElement>(null);
  const [isFocus, setIsFocus] = useState(false)

  useEffect(() => {
    if (autofocus) {
      setIsFocus(true)
      ref.current?.focus()
    }
  }, [autofocus])

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value)
  }

  const mods: Mods = {
    [cls.readonly]: readonly
  }

  return (
    <div className={classNames(cls.InputWrapper, mods, [className])}>
      {placeholder && <div className={cls.placeholder}>
        {`${placeholder}:`}&nbsp;
      </div>}
      <input
        ref={ref}
        type={type}
        value={value}
        onChange={onChangeHandler}
        readOnly={readonly}
      />
    </div>
  )
})