import {FC, memo} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import {Theme, useTheme} from 'app/providers/ThemeProvider'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import BlueIcon from 'shared/assets/icons/theme-blue.svg'
import {Button, ButtonTheme} from 'shared/ui/Button/Button'
import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher:FC<ThemeSwitcherProps> = memo((props) => {
  const {
      className
  } = props

  const {theme, toggleTheme} = useTheme()

  return (
      <Button
        theme={ButtonTheme.CLEAR}
        onClick={toggleTheme}
        className={classNames(cls.ThemeSwitcher, {}, [className])}
      >
        {theme === Theme.LIGHT
          ? <DarkIcon />
          : theme === Theme.DARK ? <BlueIcon height={50} /> : <LightIcon height={50} />}
      </Button>
  );
});