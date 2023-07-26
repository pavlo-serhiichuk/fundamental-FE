import {RouteProps} from 'react-router-dom'
import {MainPage} from '@/pages/MainPage'
import {AboutPage} from '@/pages/AboutPage'
import {NotFoundPage} from '@/pages/NotFoundPage'
import {ProfilePage} from '@/pages/ProfilePage'
import {ArticlesPage} from '@/pages/ArticlesPage'
import {ArticleDetailsPage} from '@/pages/ArticleDetailsPage'
import {ArticleEditPage} from '@/pages/ArticleEditPage'
import {AdminPage} from '@/pages/AdminPage'
import {UserRole} from '@/entities/User'
import {ForbiddenPage} from '@/pages/ForbiddenPage'

export type AppRouteProps = RouteProps & {
  authOnly?: boolean
  roles?: UserRole[]
}

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'articles_details',
  ARTICLE_CREATE = 'articles_create',
  ARTICLE_EDIT = 'articles_edit',
  ADMIN = 'admin',
  FORBIDDEN = 'forbidden',
  //last
  NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile/', // :id
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTICLE_DETAILS]: '/articles/',
  [AppRoutes.ARTICLE_CREATE]: '/articles/create',
  [AppRoutes.ARTICLE_EDIT]: '/articles/:id/edit',
  [AppRoutes.ADMIN]: '/admin',
  [AppRoutes.FORBIDDEN]: '/forbidden',
  //last
  [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />
  },
  [AppRoutes.PROFILE]: {
    path: `${RoutePath.profile}:id`,
    element: <ProfilePage />,
    authOnly: true
  },
  [AppRoutes.ARTICLES]: {
    path: RoutePath.articles,
    element: <ArticlesPage />,
    // authOnly: true,
  },
  [AppRoutes.ARTICLE_DETAILS]: {
    path: `${RoutePath.articles_details}:id`,
    element: <ArticleDetailsPage />,
    authOnly: true
  },
  [AppRoutes.ARTICLE_CREATE]: {
    path: `${RoutePath.articles_create}`,
    element: <ArticleEditPage />,
    authOnly: true
  },
  [AppRoutes.ARTICLE_EDIT]: {
    path: `${RoutePath.articles_edit}`,
    element: <ArticleEditPage />,
    authOnly: true
  },
  [AppRoutes.ADMIN]: {
    path: `${RoutePath.admin}`,
    element: <AdminPage />,
    authOnly: true,
    roles: [UserRole.MANAGER, UserRole.ADMIN]
  },
  [AppRoutes.FORBIDDEN]: {
    path: `${RoutePath.forbidden}`,
    element: <ForbiddenPage />,
   },

  //last
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />
  }
}