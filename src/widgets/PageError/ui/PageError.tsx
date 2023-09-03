import {FC} from 'react'
import {classNames} from '@/shared/lib/classNames/classNames'
import cls from './PageError.module.scss'
import {useTranslation} from 'react-i18next'
import {Button} from '@/shared/ui/Button'

interface PageErrorProps {
  className?: string;
}

export const PageError:FC<PageErrorProps> = (props) => {

  const {t} = useTranslation()

  function reload () {
    location.reload()
  }

  return (
    <div className={classNames(cls.PageError)}>
      <p>{t('Something went wrong')}</p>
      <Button onClick={reload}>{t('Reload page')}</Button>
    </div>
  );
};