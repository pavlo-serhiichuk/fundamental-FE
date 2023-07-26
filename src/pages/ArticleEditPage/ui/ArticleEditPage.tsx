import {FC} from 'react'
import {classNames} from '@/shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import {memo} from 'react'
import {Page} from '@/shared/ui/Page/Page'
import {useParams} from 'react-router-dom'

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage: FC<ArticleEditPageProps> = memo((props) => {
  const {t} = useTranslation()
  const {className} = props
  const {id} = useParams<{id: string}>()
  const isEdit = Boolean(id)
  return (
    <Page className={classNames('', {}, [className])}>
      {isEdit
        ? t('Editing of an article with') + ' ' + id
        : t('Creating of a new article')
      }
    </Page>
  );
});

export default ArticleEditPage