import {ReactNode, useEffect, useMemo, useState} from 'react';
import {ThemeContext} from '@/shared/lib/context/ThemeContext';
import {Theme} from '@/shared/consts/theme'
import {useJsonSettings} from '@/entities/User'


interface ThemeProviderProps {
  initialTheme?: Theme
  children: ReactNode
}

const ThemeProvider = ({children, initialTheme}: ThemeProviderProps) => {
  const {theme: defaultTheme} = useJsonSettings()
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme || Theme.LIGHT)
  const [isThemeInited, setThemeInited] = useState(false)
  console.log('def 1', defaultTheme)

  useEffect(() => {
    if (!isThemeInited && defaultTheme) {
      setTheme(defaultTheme)
      setThemeInited(true)
      document.body.className = defaultTheme
    }
  }, [defaultTheme, isThemeInited])

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



