import {classNames} from 'shared/lib/classNames/classNames'
import {useTheme} from './providers/ThemeProvider'
import {AppRouter} from 'app/providers/router'
import {Navbar} from 'widgets/Navbar'
import {Sidebar} from 'widgets/Sidebar'
import {Suspense, useEffect} from 'react'
import {userActions} from 'entities/User'
import {useDispatch} from 'react-redux'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

  return (
    <div className={classNames('app', {}, )}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;