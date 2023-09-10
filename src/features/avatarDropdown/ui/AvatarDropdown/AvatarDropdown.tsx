import {FC, memo, useCallback} from 'react'
import {useTranslation} from 'react-i18next'
import {Dropdown} from '@/shared/ui/Popups'
import {Avatar} from '@/shared/ui/Avatar'
import {useDispatch, useSelector} from 'react-redux'
import {getUserAuthData, isUserAdmin, isUserManager, userActions} from '@/entities/User'
import {getRouteAdmin, getRouteProfile} from '@/shared/consts/router'

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown: FC<AvatarDropdownProps> = memo((props) => {
  const {t} = useTranslation()
  const {className} = props
  const authData = useSelector(getUserAuthData)
  const isAdmin = useSelector(isUserAdmin)
  const isManager = useSelector(isUserManager)
  const dispatch = useDispatch()

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  const isAdminPageAvailable = isAdmin || isManager

  if(!authData) {
    return null
  }

  return (
    <div >
      <Dropdown
        items={[
          ...(isAdminPageAvailable ? [{
            content: t('Admin'),
            href: getRouteAdmin()
          }]: []),
          {
            content: t('Profile'),
            href: getRouteProfile(authData.id)
          },
          {
            content: t('Exit'),
            onClick: onLogout
          },
        ]}
        trigger={<Avatar size={30} src={authData.avatar} />}
        direction={'bottom left'}
      />
    </div>
  );
});