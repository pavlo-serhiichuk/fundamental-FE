import React, {useState} from 'react';
import {useTranslation} from 'react-i18next'
import {Page} from '@/shared/ui/Page'
import {StarRating} from '@/shared/ui/StarRating'
import {RatingCard} from '@/entities/Rating'

const MainPage = () => {
  const {t} = useTranslation()
  const [value, setValue] = useState('')
  const onChange = (val: string) => {
    setValue(val)
  }

  return (
    <Page>
      <p><b>{t('Main page')}</b></p>
      <RatingCard
        title={'How do you feel about our article?'}
        feedbackTitle={'Please, leave your feedback'}
        hasFeedback={true}
      />
    </Page>
  );
};

export default MainPage;