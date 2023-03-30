import {FC, memo} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import cls from './Text.module.scss'

interface TextProps {
  className?: string;
  theme?: string
  title?: string
  text?: string
}

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

export const Text: FC<TextProps> = memo((props) => {
  const {t} = useTranslation()
  const {
    className,
    theme,
    title,
    text
  } = props

  return (
    <div className={classNames(cls.Text, {[cls[theme]]: true}, [className])}>
      {title && <p className={cls.title}>{t(title)}</p>}
      {text && <p className={cls.text}>{t(text)}</p>}
    </div>
  );
});