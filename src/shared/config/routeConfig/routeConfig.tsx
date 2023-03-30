import {RouteProps} from 'react-router-dom'
import {Main} from 'pages/MainPage'
import {About} from 'pages/About'
import {NotFoundPage} from 'pages/NotFoundPage'
import {Profile} from 'pages/ProfilePage'

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  //last
  NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile',
  //last
  [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <Main />
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <About />
  },
  [AppRoutes.PROFILE]: {
    path: RoutePath.profile,
    element: <Profile />
  },

  //last
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />
  }
}