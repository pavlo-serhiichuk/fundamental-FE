import {FC} from 'react'
import {Page} from 'shared/ui/Page/Page'
import {EditableProfileCard} from 'features/editableProfileCard'
import {useParams} from 'react-router-dom'
import {Text} from 'shared/ui/Text/Text'
import {useTranslation} from 'react-i18next'

interface ProfileProps {
  className?: string;
}

const ProfilePage: FC<ProfileProps> = () => {
  const {id} = useParams<{ id: string }>()
  const {t} = useTranslation()

  if (!id) {
    return <Text text={t('No id')} />
  }

  return (
    <Page>
      <EditableProfileCard id={id} />
    </Page>

  );
};

export default ProfilePage