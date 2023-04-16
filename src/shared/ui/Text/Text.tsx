import {FC, memo} from 'react'
import {classNames, Mods} from 'shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import cls from './Text.module.scss'

export enum TextAlign {
  CENTER = 'center',
  LEFT = 'left',
  RIGHT = 'right'
}

interface TextProps {
  className?: string;
  theme?: string
  title?: string
  text?: string
  align?: TextAlign
}

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

export const Text: FC<TextProps> = memo((props) => {
  const {t} = useTranslation()
  const {
    className,
    theme = TextTheme.PRIMARY,
    title,
    text,
    align = TextAlign.LEFT
  } = props

  const mods: Mods = {
    [cls[theme]]: true,
    [cls[align]]: true,
  }

  return (
    <div className={classNames(cls.Text, mods, [className])}>
      {title && <p className={cls.title}>{t(title)}</p>}
      {text && <p className={cls.text}>{t(text)}</p>}
    </div>
  );
});