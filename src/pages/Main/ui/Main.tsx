import {useTranslation} from 'react-i18next'
import {BugButton} from 'app/providers/ErrorBoundary/ui/BugButton'

const Main = () => {
  const {t} = useTranslation()

  return (
    <div>
      <p><b>{t('Main')}</b></p>
      <BugButton />
    </div>
  );
};

export default Main;