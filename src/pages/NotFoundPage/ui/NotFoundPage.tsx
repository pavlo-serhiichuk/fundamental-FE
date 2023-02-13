import {FC} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './NotFoundPage.module.scss'
import {useTranslation} from 'react-i18next'

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage:FC<NotFoundPageProps> = (props) => {
  const {
      className
  } = props

  const {t} = useTranslation()
  return (
    <div className={classNames(cls.NotFoundPage, {}, [className])}>
      {t('Page wasn\'t found' )}
    </div>
  );
};