import {useContext} from 'react';
import {ThemeContext} from '../context/ThemeContext'
import {Theme} from '@/shared/consts/theme'
import {LOCAL_STORAGE_THEME_KEY} from '@/shared/consts/localStorage'

interface UseThemeResult {
  toggleTheme: (saveAction: (theme: Theme) => void) => void
  theme: Theme
}

const useTheme = (): UseThemeResult => {
  const {theme, setTheme} = useContext(ThemeContext)

  const toggleTheme = (saveAction: (theme: Theme) => void) => {
    let newTheme: Theme;

    switch(theme) {
      case Theme.LIGHT:
        newTheme = Theme.DARK
        break
      case Theme.DARK:
        newTheme = Theme.BLUE
        break
      case Theme.BLUE:
        newTheme = Theme.LIGHT
        break
      default:
        newTheme = Theme.LIGHT
    }

    setTheme?.(newTheme)
    document.body.className = newTheme
    saveAction?.(newTheme)
  }

  return {
    theme: theme || Theme.LIGHT,
    toggleTheme
  }
};

export default useTheme;
