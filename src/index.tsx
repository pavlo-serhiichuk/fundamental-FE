import {render} from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import App from './app/App'
import {ThemeProvider} from './app/providers/ThemeProvider'
import './shared/config/i18n/i18n'
import {ErrorBoundary} from 'app/providers/ErrorBoundary'

render(
  <Router>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </Router>
  , document.getElementById('root'))