import './styles/index.scss'
import {classNames} from 'shared/lib/classNames/classNames'
import {useTheme} from './providers/ThemeProvider'
import {AppRouter} from 'app/providers/router'
import {Navbar} from 'widgets/Navbar'

const App = () => {
  const {theme} = useTheme()

  return (
    <div className={classNames('app', {hovered: true,}, [theme])}>
      <div>
        <Navbar />
      </div>
      <AppRouter />
    </div>
  );
};

export default App;