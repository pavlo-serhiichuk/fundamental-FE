import {FC, memo} from 'react'
import {classNames, Mods} from 'shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import cls from './Text.module.scss'

export enum TextAlign {
  CENTER = 'center',
  LEFT = 'left',
  RIGHT = 'right'
}

export enum TextSize {
  S = 'size_s',
  M = 'size_M',
  L = 'size_L',
}

interface TextProps {
  className?: string;
  theme?: string
  title?: string
  text?: string
  align?: TextAlign
  size?: TextSize
}

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
  INVERTED = 'inverted'
}

type HeaderTagType = 'h1' | 'h2' | 'h3'
const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  [TextSize.S]: 'h3',
  [TextSize.M]: 'h2',
  [TextSize.L]: 'h1',
}

export const Text: FC<TextProps> = memo((props) => {
  const {t} = useTranslation()
  const {
    className,
    theme = TextTheme.PRIMARY,
    title,
    text,
    size = TextSize.M,
    align = TextAlign.LEFT
  } = props

  const mods: Mods = {
    [cls[theme]]: true,
    [cls[align]]: true,
    [cls[size]]: true
  }

  const HeaderTag = mapSizeToHeaderTag[size]

  return (
    <div className={classNames(cls.Text, mods, [className])}>
      {title && <HeaderTag className={cls.title}>{t(title)}</HeaderTag>}
      {text && <p className={cls.text}>{t(text)}</p>}
    </div>
  );
});