import {componentRender} from '@/shared/lib/tests/componentRender/componentRender'
import {AppRouter} from './AppRouter'
import {getRouteAbout, getRouteAdmin, getRouteMain, getRouteProfile} from '@/shared/consts/router'
import {screen} from '@testing-library/react'
import {NotFoundPage} from '@/pages/NotFoundPage'
import {UserRole} from '@/entities/User'

describe('app/router/AppRouter', function () {

  test('Page should render', async () => {
        componentRender(<AppRouter />, {
          route: getRouteAbout(),
        })

    const page = await screen.findByTestId('AboutPage')
    expect(page).toBeInTheDocument()
  })

  test('Page is not found', async () => {
        componentRender(<AppRouter />, {
          route: '/brokenpath',
        })

    const page = await screen.findByTestId('NotFoundPage')
    expect(page).toBeInTheDocument()
  })

  test('Redirect of not authed user', async () => {
        componentRender(<AppRouter />, {
          route: getRouteProfile('1'),
        })

    const page = await screen.findByTestId('MainPage')
    expect(page).toBeInTheDocument()
  })

  test('Allowed routing for authed user', async () => {
        componentRender(<AppRouter />, {
          route: getRouteProfile('1'),
          initialState: {
            user: {authData: {}}
          }
        })

    const page = await screen.findByTestId('ProfilePage')
    expect(page).toBeInTheDocument()
  })

  test('Routing is blocked (no role)', async () => {
        componentRender(<AppRouter />, {
          route: getRouteAdmin(),
          initialState: {
            user: {authData: {}}
          }
        })

    const page = await screen.findByTestId('ForbiddenPage')
    expect(page).toBeInTheDocument()
  })

  test('Routing is allowed (has role)', async () => {
        componentRender(<AppRouter />, {
          route: getRouteAdmin(),
          initialState: {
            user: {authData: {roles: [UserRole.ADMIN]}}
          }
        })

    const page = await screen.findByTestId('AdminPage')
    expect(page).toBeInTheDocument()
  })
})

export {}