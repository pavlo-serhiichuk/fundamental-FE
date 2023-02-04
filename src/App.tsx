import {Suspense, useContext, useState} from 'react';
import {Link, Route, Routes} from 'react-router-dom'
import AboutAsync from './pages/About/AboutAsync'
import MainAsync from './pages/Main/MainAsync'
import './styles/index.scss'
import {Theme, ThemeContext} from './theme/ThemeContext'
import useTheme from './theme/useTheme'

const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={`app ${theme}`}>
      <div style={{display: 'inline-flex'}}>
        <Link to='/'>Main</Link>
        <Link to='/about'>About</Link>
        <button onClick={toggleTheme}>{theme === Theme.LIGHT ? Theme.DARK: Theme.LIGHT}</button>
      </div>
      <Suspense fallback={<div>LOADING...</div>}>
      <Routes>
        <Route path="/" element={<MainAsync />}  />
        <Route path="/about" element={<AboutAsync />}  />
      </Routes>
      </Suspense>
    </div>
  );
};

export default App;