import {useTranslation} from 'react-i18next'

const AboutPage = () => {
  const {t} = useTranslation('about')
  console.log('about page')
  return (
    <div>
      <p>
        <b>{t('About page')}</b>
      </p>
    </div>
  );
};

export default AboutPage;