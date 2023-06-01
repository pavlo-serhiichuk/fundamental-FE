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

  return (
    <div className={classNames(cls.Text, mods, [className])}>
      {title && <p className={cls.title}>{t(title)}</p>}
      {text && <p className={cls.text}>{t(text)}</p>}
    </div>
  );
});