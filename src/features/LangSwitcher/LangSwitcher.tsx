import {FC, memo} from 'react'
import {classNames} from '@/shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import {Button, ButtonTheme} from '@/shared/ui/Button'

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher:FC<LangSwitcherProps> = memo((props) => {
  const {
      className
  } = props

  const {t, i18n} = useTranslation()
  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'ua' ? 'en' : 'ua' )
  }

  return (
    <Button
      onClick={toggle}
      theme={ButtonTheme.CLEAR}
      className={classNames('', {}, [className])}>
      {t('language')}
    </Button>
  );
});