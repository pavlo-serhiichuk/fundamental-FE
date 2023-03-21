import {FC} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import {useTranslation} from 'react-i18next'
import {Button} from 'shared/ui/Button/Button'
import {Input} from 'shared/ui/Input/Input'

interface LoginFormProps {
  className?: string;
}

export const LoginForm:FC<LoginFormProps> = (props) => {
  const {t} = useTranslation()

  const {
      className
  } = props

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        autofocus
        placeholder={t("Enter username")}
        className={cls.input} type="text"
      />
      <Input
        placeholder={t("Enter password")}
        className={cls.input} type="text"
      />
      <Button className={cls.loginBtn}>
        {t('Enter')}
      </Button>
    </div>
  );
};