import {useTranslation} from 'react-i18next'

const AboutPage = () => {
  const {t} = useTranslation('about')
  return (
    <div>
      <p><b>{t('AboutPage')}</b></p>
    </div>
  );
};

export default AboutPage;