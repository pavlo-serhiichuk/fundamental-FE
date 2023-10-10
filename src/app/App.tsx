import {classNames} from '@/shared/lib/classNames/classNames'
import {AppRouter} from '@/app/providers/router'
import {Navbar} from '@/widgets/Navbar'
import {Sidebar} from '@/widgets/Sidebar'
import {Suspense, useEffect} from 'react'
import {useJsonSettings, userActions} from '@/entities/User'
import {useDispatch, useSelector} from 'react-redux'
import {getUserInit} from '@/entities/User/model/selectors/getUserInit/getUserInit'
import {JsonSettings} from '@/entities/User/model/types/jsonSettings'

const App = () => {
  const dispatch = useDispatch()
  const init = useSelector(getUserInit)

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

  return (
    <div className={classNames('app', {}, )}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          {init ? <AppRouter />: null}
        </div>
      </Suspense>
    </div>
  );
};

export default App;