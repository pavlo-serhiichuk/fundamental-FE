import {MainPage} from '@/pages/MainPage'
import {AboutPage} from '@/pages/AboutPage'
import {ProfilePage} from '@/pages/ProfilePage'
import {ArticlesPage} from '@/pages/ArticlesPage'
import {ArticleDetailsPage} from '@/pages/ArticleDetailsPage'
import {ArticleEditPage} from '@/pages/ArticleEditPage'
import {AdminPage} from '@/pages/AdminPage'
import {UserRole} from '@/entities/User'
import {ForbiddenPage} from '@/pages/ForbiddenPage'
import {NotFoundPage} from '@/pages/NotFoundPage'
import {AppRoutes, RoutePath} from '@/shared/consts/router'
import {AppRouteProps} from '@/shared/types/router'

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