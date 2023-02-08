import {Link} from 'react-router-dom'
import './styles/index.scss'
import {Theme} from './providers/ThemeProvider/lib/ThemeContext'
import {classNames} from 'shared/lib/classNames/classNames'
import {useTheme} from './providers/ThemeProvider'
import {AppRouter} from 'app/providers/router'
import {Navbar} from 'widgets/Navbar'

const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {hovered: true,}, [theme])}>
      <div>
        <Navbar />
      </div>
      <AppRouter />
      <button onClick={toggleTheme}>{theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT}</button>
    </div>
  );
};

export default App;