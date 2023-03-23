import {FC, memo, useCallback} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import {useTranslation} from 'react-i18next'
import {Button, ButtonTheme} from 'shared/ui/Button/Button'
import {Input} from 'shared/ui/Input/Input'
import {useDispatch, useSelector} from 'react-redux'
import {loginActions} from '../../model/slice/loginSlice'
import {getLoginState} from '../../model/selectors/getLoginState/getLoginState'
import {loginByUsername} from '../../model/services/loginByUsername/loginByUsername'
import {Text, TextTheme} from 'shared/ui/Text/Text'

interface LoginFormProps {
  className?: string;
}

export const LoginForm:FC<LoginFormProps> = memo((props) => {
  const {className} = props
  const {t} = useTranslation()
  const dispatch = useDispatch()
  const {username, password, error, isLoading} = useSelector(getLoginState)

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch, username, password])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch, password, username])

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({username, password}))
  }, [dispatch, password, username])

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('Login')}/>
      <Input
        autofocus
        onChange={onChangeUsername}
        placeholder={t("Enter username")}
        className={cls.input}
        type="text"
        value={username}
      />
      <Input
        onChange={onChangePassword}
        placeholder={t("Enter password")}
        className={cls.input} type="text"
        value={password}
      />
      {error && <Text theme={TextTheme.ERROR} text={error} />}
      <Button
        theme={ButtonTheme.OUTLINE}
        className={cls.loginBtn}
        onClick={onLoginClick}
      >
        {t('Enter')}
      </Button>
    </div>
  );
});