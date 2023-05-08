import {createSelector} from '@reduxjs/toolkit'
import {RoutePath} from 'shared/config/routeConfig/routeConfig'
import MainIcon from 'shared/assets/icons/main.svg'
import AboutIcon from 'shared/assets/icons/about_us.svg'
import ProfileIcon from 'shared/assets/icons/profile.svg'
import ArticlesIcon from 'shared/assets/icons/articles.svg'
import {getUserAuthData} from 'entities/User'
import {SidebarItemType} from '../types/sidebar'

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
      {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'Main'
      },
      {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'About'
      }
    ]

    if (userData) {
      sidebarItemsList.push({
          path: RoutePath.profile + userData.id,
          Icon: ProfileIcon,
          text: 'Profile',
          authOnly: true,
        },
        {
          path: RoutePath.articles,
          Icon: ArticlesIcon,
          text: 'Articles',
          authOnly: true,
        })
    }
    return sidebarItemsList
  }
)