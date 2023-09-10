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

export const getRouteMain = () => '/'
export const getRouteAbout = () => '/about'
export const getRouteProfile = (id: string) => `/profile/${id}`
export const getRouteArticles = () => '/articles'
export const getRouteArticleDetails = (id: string) => `/articles/${id}`
export const getRouteArticleCreate = () => '/articles/create'
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`
export const getRouteAdmin = () => '/admin'
export const getRouteForbidden = () => '/forbidden'