import {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom'
import {AboutAsync as About} from 'pages/About'
import {MainAsync as Main} from 'pages/Main'
import './styles/index.scss'
import {Theme} from './providers/ThemeProvider/lib/ThemeContext'
import {classNames} from 'shared/lib/classNames/classNames'
import {useTheme} from './providers/ThemeProvider'

const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {hovered: true, }, [theme])}>
      <div style={{display: 'inline-flex'}}>
        <Link to='/'>Main</Link>
        <Link to='/about'>About</Link>
        <button onClick={toggleTheme}>{theme === Theme.LIGHT ? Theme.DARK: Theme.LIGHT}</button>
      </div>
      <Suspense fallback={<div>LOADING...</div>}>
      <Routes>
        <Route path="/" element={<Main />}  />
        <Route path="/about" element={<About />}  />
      </Routes>
      </Suspense>
    </div>
  );
};

export default App;