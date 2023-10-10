import {FC, memo, useCallback} from 'react'
import {classNames} from '@/shared/lib/classNames/classNames'
import LightIcon from '@/shared/assets/icons/theme-light.svg'
import DarkIcon from '@/shared/assets/icons/theme-dark.svg'
import BlueIcon from '@/shared/assets/icons/theme-blue.svg'
import {Button, ButtonTheme} from '@/shared/ui/Button'
import cls from './ThemeSwitcher.module.scss'
import {Theme} from '@/shared/consts/theme'
import useTheme from '@/shared/lib/hooks/useTheme'
import {useAppDispatch} from '@/shared/lib/hooks/useAppDispatch'
import {saveJsonSettings} from '@/entities/User'

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher:FC<ThemeSwitcherProps> = memo((props) => {
  const {
    className
  } = props

  const {theme, toggleTheme} = useTheme()
  const dispatch = useAppDispatch()

  const onToggle = useCallback(() => {
    toggleTheme((newTheme) => dispatch(saveJsonSettings({
      theme: newTheme
    })))
  }, [dispatch, toggleTheme])

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={onToggle}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
    >
      {theme === Theme.LIGHT
        ? <DarkIcon />
        : theme === Theme.DARK ? <BlueIcon height={50} /> : <LightIcon height={50} />}
    </Button>
  );
});


