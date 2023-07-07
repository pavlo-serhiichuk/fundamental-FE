import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {memo} from 'react';
import {Text} from 'shared/ui/Text/Text'
import {ArticleList, ArticleView} from 'entities/Article'
import {VStack} from 'shared/ui/Stack'
import {useArticleRecomm} from '../../api/articleRecommendationsApi'

interface ArticleRecommendationsListProps {
    className?: string;
}


export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const {data: articles, isLoading, error} = useArticleRecomm(4)

  if(isLoading || error || !articles) {
    return null
  }

    return (
        <VStack gap={'8'} className={classNames('', {}, [className])}>
            <Text className={''} title={t('Recommendations')} />
            <ArticleList
              articles={articles}
              isLoading={isLoading}
              view={ArticleView.SMALL}
              className={''}
              target={"_blank"}
            />
        </VStack>
    );
});