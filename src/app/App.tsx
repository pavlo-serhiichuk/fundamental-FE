import {Link} from 'react-router-dom'
import './styles/index.scss'
import {Theme} from './providers/ThemeProvider/lib/ThemeContext'
import {classNames} from 'shared/lib/classNames/classNames'
import {useTheme} from './providers/ThemeProvider'
import {AppRouter} from 'app/providers/router'

const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {hovered: true, }, [theme])}>
      <div style={{display: 'inline-flex'}}>
        <Link to='/'>Main</Link>
        <Link to='/about'>About</Link>
        <button onClick={toggleTheme}>{theme === Theme.LIGHT ? Theme.DARK: Theme.LIGHT}</button>
      </div>
      <AppRouter />
    </div>
  );
};

export default App;