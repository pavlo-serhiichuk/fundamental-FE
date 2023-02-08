import {FC} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ThemeSwitcher.module.scss'
import {Theme, useTheme} from 'app/providers/ThemeProvider'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import {Button, ButtonTheme} from 'shared/ui/Button/ui/Button'

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher:FC<ThemeSwitcherProps> = (props) => {
  const {
      className
  } = props

  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames(cls.ThemeSwitcher, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR}
        onClick={toggleTheme}
      >
        {theme === Theme.LIGHT ? <DarkIcon height={35} /> : <LightIcon height={35} />}
      </Button>
    </div>
  );
};