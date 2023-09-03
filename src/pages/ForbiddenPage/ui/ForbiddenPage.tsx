import {useTranslation} from 'react-i18next'
import {Page} from '@/shared/ui/Page'

const ForbiddenPage = () => {
  const {t} = useTranslation()

  return (
    <Page>
      <p>
        <b>{t('You have no access to this page')}</b>
      </p>
    </Page>
  );
};

export default ForbiddenPage;