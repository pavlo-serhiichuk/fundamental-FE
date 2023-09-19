import React, {FC, ReactNode} from 'react'
import {classNames} from '@/shared/lib/classNames/classNames'
import cls from './Flex.module.scss'

export type FlexJustify = 'start' | 'end' | 'between' | 'center'
export type FlexDirection = 'row' | 'column'
export type FlexAlign = 'start' | 'end' | 'center'
export type FlexGap = '8' | '12' | '16' | '32'

const justifyClasses: Record<FlexJustify, string> = {
  start: cls.justifyStart,
  end: cls.justifyEnd,
  between: cls.justifyBetween,
  center: cls.justifyCenter,

}

const alignClasses: Record<FlexAlign, string> = {
  start: cls.alignStart,
  end: cls.alignEnd,
  center: cls.alignCenter,
}

const directionClasses: Record<FlexDirection, string> = {
  row: cls.directionRow,
  column: cls.directionColumn,
}

const gapClasses: Record<FlexGap, string> = {
  8: cls.gap8,
  12: cls.gap12,
  16: cls.gap16,
  32: cls.gap32,
}

export interface FlexProps extends DivProps{
  className?: string
  children: ReactNode
  justify?: FlexJustify
  direction?: FlexDirection
  align?: FlexAlign
  gap?: FlexGap
  max?: boolean
}

type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Flex: FC<FlexProps> = (props) => {
  const {
    className,
    children,
    justify = 'start',
    direction = 'row',
    align = 'center',
    gap,
    max,
    ...otherProps
  } = props

  const classes = [
    className,
    justifyClasses[justify],
    directionClasses[direction],
    alignClasses[align],
    gap && gapClasses[gap],
  ]

  return (
    <div className={classNames(cls.Flex, {[cls.max]: max}, classes)} {...otherProps}>
      {children}
    </div>
  );
};