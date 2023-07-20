import React, {FC} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import cls from './Icon.module.scss'
import {memo} from 'react'

interface IconProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>
  inverted?: boolean
}

export const Icon: FC<IconProps> = memo((props: IconProps) => {
  const {className, Svg, inverted} = props

  return (
    <Svg className={classNames(inverted ? cls.inverted: cls.Icon, {}, [className])} />
  );
});