import {FC} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import {Theme, useTheme} from 'app/providers/ThemeProvider'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import {Button, ButtonTheme} from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher:FC<ThemeSwitcherProps> = (props) => {
  const {
      className
  } = props

  const {theme, toggleTheme} = useTheme()

  return (
      <Button
        theme={ButtonTheme.CLEAR}
        onClick={toggleTheme}
        className={classNames('', {}, [className])}
      >
        {theme === Theme.LIGHT ? <DarkIcon height={35} /> : <LightIcon height={35} />}
      </Button>
  );
};