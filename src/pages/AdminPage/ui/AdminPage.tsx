import {useTranslation} from 'react-i18next'
import {Page} from '@/shared/ui/Page'

const AdminPage = () => {
  const {t} = useTranslation('about')

  return (
    <Page data-testid="AdminPage">
      <p>
        <b>{t('!!! Admin page')}</b>
      </p>
    </Page>
  );
};

export default AdminPage;