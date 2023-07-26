import {FC, HTMLAttributes, ReactNode} from 'react'
import {classNames} from '@/shared/lib/classNames/classNames'
import cls from './Card.module.scss'
import {memo} from 'react'

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINED = 'outlined'
}

interface CardProps extends HTMLAttributes<HTMLDivElement>{
  className?: string;
  children: ReactNode
  theme?: CardTheme
}

export const Card: FC<CardProps> = memo((props) => {
  const {className, children, theme = CardTheme.NORMAL, ...otherProps} = props

  return (
    <div
      className={classNames(cls.Card, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </div>
  );
});