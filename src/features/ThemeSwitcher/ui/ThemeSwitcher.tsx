import {FC, memo, useCallback} from 'react'
import {classNames} from '@/shared/lib/classNames/classNames'
import LightIcon from '@/shared/assets/icons/theme-light.svg'
import DarkIcon from '@/shared/assets/icons/theme-dark.svg'
import BlueIcon from '@/shared/assets/icons/theme-blue.svg'
import {Button, ButtonTheme} from '@/shared/ui/Button'
import cls from './ThemeSwitcher.module.scss'
import useTheme from '@/shared/lib/hooks/useTheme'
import {useAppDispatch} from '@/shared/lib/hooks/useAppDispatch'
import {saveJsonSettings} from '@/entities/User'
import {Theme} from '@/shared/consts/theme'
import {Icon} from '@/shared/ui/Icon'

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
      <Icon
        Svg={theme === Theme.LIGHT ? DarkIcon : theme === Theme.DARK ? BlueIcon : LightIcon}
        height={50}
        width={50}
      />
      {/*{theme === Theme.LIGHT*/}
      {/*  ? <DarkIcon />*/}
      {/*  : theme === Theme.DARK ? <BlueIcon height={50} /> : <LightIcon height={50} />}*/}
    </Button>
  );
});


