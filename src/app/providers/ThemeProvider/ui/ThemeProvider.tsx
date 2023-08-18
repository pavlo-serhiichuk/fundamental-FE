import { ReactNode, useMemo, useState} from 'react';
import {ThemeContext} from '../../../../shared/lib/context/ThemeContext';
import {Theme} from '@/shared/consts/theme'
import {LOCAL_STORAGE_THEME_KEY} from '@/shared/consts/localStorage'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

interface ThemeProviderProps {
  initialTheme?: Theme
  children: ReactNode
}

const ThemeProvider = ({children, initialTheme}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)

  const defaultProps = useMemo(() => ({
    theme,
    setTheme
  }), [theme])

  return (
    <div>
      <ThemeContext.Provider value={defaultProps}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
};

export default ThemeProvider;