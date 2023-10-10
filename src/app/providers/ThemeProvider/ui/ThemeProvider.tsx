import {ReactNode, useEffect, useMemo, useState} from 'react';
import {ThemeContext} from '@/shared/lib/context/ThemeContext';
import {Theme} from '@/shared/consts/theme'
import {useJsonSettings} from '@/entities/User'


interface ThemeProviderProps {
  initialTheme?: Theme
  children: ReactNode
}

const ThemeProvider = ({children, initialTheme}: ThemeProviderProps) => {
  const {theme: defaultTheme = Theme.LIGHT} = useJsonSettings()
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)
  const [isThemeInited, setThemeInited] = useState(false)
  useEffect(() => {
    if (!isThemeInited) {
      setTheme(defaultTheme)
      setThemeInited(true)
    }
  }, [defaultTheme])

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



