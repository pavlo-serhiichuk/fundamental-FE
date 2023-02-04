import { Suspense } from 'react';
import {Link, Route, Routes} from 'react-router-dom'
import AboutAsync from './pages/About/AboutAsync'
import MainAsync from './pages/Main/MainAsync'
import './main.scss'

const App = () => {
  return (
    <div className="app">
      <div style={{display: 'inline-flex'}}>
        <Link to='/'>Main</Link>
        <Link to='/about'>About</Link>
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