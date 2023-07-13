import {FC, memo} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticleItem.module.scss'
import {Card} from 'shared/ui/Card/Card'
import {Skeleton} from 'shared/ui/Skeleton/Skeleton'
import {ArticleView} from '../../model/consts/consts'

interface ArticleItemSkeletonProps {
  className?: string;
  view?: ArticleView
}

export const ArticleItemSkeleton: FC<ArticleItemSkeletonProps> = memo((props) => {
  const {className, view = ArticleView.SMALL} = props

  if (view === ArticleView.BIG) {
    return (
      <div className={classNames(cls.ArticleItem, {}, [className, cls[view]])}>
        <div className={cls.created}>
          <Skeleton width={50} height={24} />
        </div>
        <Card className={cls.cart}>
          <div className={cls.header}>
            <Skeleton borderRadius={'50%'} width={30} height={30} />
            <Skeleton width={50} height={24} />
          </div>
          <Skeleton width={300} height={32} />

          <Skeleton height={250} width={'100%'} className={cls.image} />
          <div className={cls.footer}>
            <Skeleton width={50} height={24} />
            <Skeleton width={50} height={24} />
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div
      className={classNames(cls.ArticleItem, {}, [className, cls[view]])}
    >
      <Card>
        <div className={cls.created}>
          <Skeleton width={50} height={24} />
        </div>
        <div className={cls.imageWrapper}>
          <Skeleton className={cls.image} />
        </div>
        <div className={cls.articleDetails}>
          <Skeleton width={50} height={24} />
          <Skeleton width={50} height={24} />
        </div>
        <Skeleton width={50} height={24} className={cls.title} />
      </Card>
    </div>
  );
});