import {FC} from 'react'
import {Page} from '@/shared/ui/Page'
import {EditableProfileCard} from '@/features/editableProfileCard'
import {useParams} from 'react-router-dom'
import {ProfileRating} from '@/features/profileRating'

interface ProfileProps {
  className?: string;
}

const ProfilePage: FC<ProfileProps> = () => {
  const {id} = useParams<{ id: string }>()

  if(!id) {
    return null
  }

  return (
    <Page data-testid="ProfilePage">
      <EditableProfileCard id={id} />
      <ProfileRating profileId={id}/>
    </Page>

  );
};

export default ProfilePage