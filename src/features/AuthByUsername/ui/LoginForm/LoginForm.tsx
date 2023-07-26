import {FC, memo, useCallback} from 'react'
import {classNames} from '@/shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import {useTranslation} from 'react-i18next'
import {Button, ButtonTheme} from '@/shared/ui/Button/Button'
import {Input} from '@/shared/ui/Input/Input'
import {useSelector} from 'react-redux'
import {loginActions, loginReducer} from '../../model/slice/loginSlice'
import {loginByUsername} from '../../model/services/loginByUsername/loginByUsername'
import {Text, TextTheme} from '@/shared/ui/Text/Text'
import {getLoginUsername} from '../../model/selectors/getLoginUsername/getLoginUsername'
import {getLoginPassword} from '../../model/selectors/getLoginPassword/getLoginPassword'
import {getLoginError} from '../../model/selectors/getLoginError/getLoginError'
import {getLoginIsLoading} from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import {DynamicModuleLoader, ReducersList} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {useAppDispatch} from '@/shared/lib/hooks/useAppDispatch'

export interface LoginFormProps {
  className?: string;
  onSuccess?: () => void
}

const initialReducers: ReducersList = {
  loginForm: loginReducer
}

const LoginForm: FC<LoginFormProps> = memo((props) => {
  const {className, onSuccess} = props
  const {t} = useTranslation()
  const dispatch = useAppDispatch()

  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const error = useSelector(getLoginError)
  const isLoading = useSelector(getLoginIsLoading)

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch, username, password])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch, password, username])

  const onLoginClick = useCallback(async () => {
    const res = await dispatch(loginByUsername({username, password}))
    res.meta.requestStatus === 'fulfilled' && onSuccess?.()
  }, [dispatch, password, username])

  return (
    <DynamicModuleLoader
      removeAfterUnmount
      reducers={initialReducers}
    >
      <div className={classNames(cls.LoginForm, {}, [className])}>
        <Text title={t('Login')} />
        <Input
          autofocus
          onChange={onChangeUsername}
          placeholder={t('Enter username')}
          className={cls.input}
          type="text"
          value={username}
        />
        <Input
          onChange={onChangePassword}
          placeholder={t('Enter password')}
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
    </DynamicModuleLoader>
  );
});

export default LoginForm