import {useTranslation} from 'react-i18next'
import {Page} from '@/shared/ui/Page'

const AboutPage = () => {
  const {t} = useTranslation('about')

  return (
    <Page data-testid={"AboutPage"}>
      <p>
        <b>{t('About page')}</b>
      </p>
    </Page>
  );
};

export default AboutPage;