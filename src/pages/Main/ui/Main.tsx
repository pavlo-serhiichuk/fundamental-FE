import {useTranslation} from 'react-i18next'

const Main = () => {
  const {t} = useTranslation()

  return (
    <div>
      <p><b>{t('Main')}</b></p>
    </div>
  );
};

export default Main;