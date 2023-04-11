import {FC, useEffect} from 'react'
import {useTranslation} from 'react-i18next'
import {DynamicModuleLoader, ReducersList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {fetchProfileData, profileReducer} from 'entities/Profile'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch'
import {ProfileCard} from 'entities/Profile/ui/ProfileCard/ProfileCard'

const reducers: ReducersList = {
  profile: profileReducer
}

interface ProfileProps {
  className?: string;
}

const ProfilePage: FC<ProfileProps> = () => {

  const {t} = useTranslation()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [])

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
        <ProfileCard />
    </DynamicModuleLoader>
  );
};

export default ProfilePage