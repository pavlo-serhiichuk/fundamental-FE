import {FC} from 'react'
import {classNames} from '@/shared/lib/classNames/classNames'
import cls from './NotFoundPage.module.scss'
import {useTranslation} from 'react-i18next'
import {Page} from '@/shared/ui/Page'

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage:FC<NotFoundPageProps> = (props) => {
  const {
      className
  } = props

  const {t} = useTranslation()
  return (
    <Page
      data-testid="NotFoundPage"
      className={classNames(cls.NotFoundPage, {}, [className])}
    >
      {t('Page wasn\'t found' )}
    </Page>
  );
};