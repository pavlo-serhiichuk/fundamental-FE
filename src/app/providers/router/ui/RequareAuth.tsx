import {Navigate, useLocation} from 'react-router-dom'
import {AppRoutes, RoutePath} from 'shared/config/routeConfig/routeConfig'
import {useSelector} from 'react-redux'
import {getUserAuthData} from 'entities/User'

export function RequireAuth({children}: {children: JSX.Element}) {
  let auth = useSelector(getUserAuthData)
  let location = useLocation()

  if (!auth) {
    return <Navigate to={RoutePath.main} state={{from: location}} replace/>
  }

  return children
}