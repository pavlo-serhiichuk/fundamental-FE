import React, {useState} from 'react';
import {useTranslation} from 'react-i18next'
import {Input} from 'shared/ui/Input/Input'

const MainPage = () => {
  const {t} = useTranslation()
  const [value, setValue] = useState('')

  const onChange = (val: string) => {
    setValue(val)
  }

  return (
    <div>
      <p><b>{t('MainPage')}</b></p>
    </div>
  );
};

export default MainPage;