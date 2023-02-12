import {render} from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import App from './app/App'
import {ThemeProvider} from './app/providers/ThemeProvider'
import './shared/config/i18n/i18n'

render(
  <Router>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Router>
  , document.getElementById('root'))