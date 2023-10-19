import {classNames} from '@/shared/lib/classNames/classNames'
import {AppRouter} from '@/app/providers/router'
import {Navbar} from '@/widgets/Navbar'
import {Sidebar} from '@/widgets/Sidebar'
import {Suspense, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getUserInit} from '@/entities/User/model/selectors/getUserInit/getUserInit'
import {initAuthData} from '@/entities/User'
import {useAppDispatch} from '@/shared/lib/hooks/useAppDispatch'
import {PageLoader} from '@/widgets/PageLoader/PageLoader'

const App = () => {
  const dispatch = useAppDispatch()
  const init = useSelector(getUserInit)

  useEffect(() => {
    dispatch(initAuthData())
  }, [dispatch])

  if(!init) {
    return <PageLoader />
  }

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