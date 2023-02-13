import {useTranslation} from 'react-i18next'

const About = () => {
  const {t} = useTranslation('about')
  return (
    <div>
      <p><b>{t('About')}</b></p>
    </div>
  );
};

export default About;