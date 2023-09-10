import {createSelector} from '@reduxjs/toolkit'
import MainIcon from '@/shared/assets/icons/main.svg'
import AboutIcon from '@/shared/assets/icons/about_us.svg'
import ProfileIcon from '@/shared/assets/icons/profile.svg'
import ArticlesIcon from '@/shared/assets/icons/articles.svg'
import {getUserAuthData} from '@/entities/User'
import {SidebarItemType} from '../types/sidebar'
import {getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile} from '@/shared/consts/router'

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
      {
        path: getRouteMain(),
        Icon: MainIcon,
        text: 'Main'
      },
      {
        path: getRouteAbout(),
        Icon: AboutIcon,
        text: 'About'
      }
    ]

    if (userData) {
      sidebarItemsList.push({
          path: getRouteProfile(userData.id),
          Icon: ProfileIcon,
          text: 'Profile',
          authOnly: true,
        },
        {
          path: getRouteArticles(),
          Icon: ArticlesIcon,
          text: 'Articles',
          authOnly: true,
        })
    }
    return sidebarItemsList
  }
)