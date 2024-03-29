import React, {memo, Suspense, useCallback} from 'react';
import {Route, Routes} from 'react-router-dom'
import {PageLoader} from '@/widgets/PageLoader/PageLoader'
import {RequireAuth} from '@/app/providers/router/ui/RequareAuth'
import {routeConfig} from '@/app/providers/router/config/routeConfig'
import {AppRouteProps} from '@/shared/types/router'

export const AppRouter = memo(() => {

  const renderWithWrapper = useCallback((route: AppRouteProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>
        {route.element}
      </Suspense>
    )

    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly ? <RequireAuth roles={route.roles}>{element}</RequireAuth> : element} />
    )
  }, [])

  return (
    <Routes>
      {Object.values(routeConfig).map(renderWithWrapper)}
    </Routes>
  );
});