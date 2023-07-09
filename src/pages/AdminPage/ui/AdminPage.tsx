import {useTranslation} from 'react-i18next'
import {Page} from 'shared/ui/Page/Page'

const AdminPage = () => {
  const {t} = useTranslation('about')

  return (
    <Page>
      <p>
        <b>{t('!!! Admin page')}</b>
      </p>
    </Page>
  );
};

export default AdminPage;