import {useContext} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from './ThemeContext'

interface UseThemeResult {
  toggleTheme: () => void
  theme: Theme
}

const useTheme = (): UseThemeResult => {
  const {theme, setTheme} = useContext(ThemeContext)

  const toggleTheme = () => {
    // const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT

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
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return {
    theme: theme || Theme.LIGHT,
    toggleTheme
  }
};

export default useTheme;