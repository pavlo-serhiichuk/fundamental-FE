import {classNames} from '@/shared/lib/classNames/classNames'
import {AppRouter} from '@/app/providers/router'
import {Navbar} from '@/widgets/Navbar'
import {Sidebar} from '@/widgets/Sidebar'
import {Suspense, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getUserInit} from '@/entities/User/model/selectors/getUserInit/getUserInit'
import {getJsonSettings, getUserAuthData, initAuthData, useJsonSettings} from '@/entities/User'
import {useAppDispatch} from '@/shared/lib/hooks/useAppDispatch'
import {PageLoader} from '@/widgets/PageLoader/PageLoader'
import {ToggleFeature} from '@/shared/lib/features'
import {MainLayout} from '@/shared/layouts/MainLayout'

const App = () => {
  const dispatch = useAppDispatch()
  const init = useSelector(getUserInit)
  const isV2 = useJsonSettings()?.isV2

  useEffect(() => {
    dispatch(initAuthData())
  }, [dispatch])

  if (!init) {
    return <PageLoader />
  }

  return (
    <ToggleFeature
      isOn={isV2}
      feature={'isV2'}
      off={(
        <div className={classNames('app', {},)}>
          <Suspense fallback="">
            <Navbar />
            <div className="content-page">
              <Sidebar />
              <AppRouter />
            </div>
          </Suspense>
        </div>)}
      on={(
        <div className={classNames('app_v2', {},)}>
          <Suspense fallback="">
            <MainLayout header={<Navbar />} content={<AppRouter />} sidebar={<Sidebar />} rightBar={<div>rightBar</div>} />
          </Suspense>
        </div>
      )}
    />
  );
};

export default App;