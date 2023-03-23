import {ButtonHTMLAttributes, FC} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: string;
  disabled?: boolean
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    square,
    size = ButtonSize.M,
    disabled = false,
    ...other
  } = props

  const mods: Record<string, boolean> = {
    [cls[theme]]: true, //takes value of ButtonTheme enum and use it as a class
    [cls.square]: square,
    [cls[size]]: true,
    [cls.disabled]: disabled
  }

  return (
    <button
      disabled={disabled}
      className={classNames(cls.Button, mods, [className])}
      {...other}
    >
      {children}
    </button>
  );
};