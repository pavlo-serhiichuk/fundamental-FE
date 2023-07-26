import {CSSProperties, FC} from 'react'
import {classNames} from '@/shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import cls from './Skeleton.module.scss'
import {memo} from 'react'

interface SkeletonProps {
  className?: string;
  height?: string | number
  width?: string | number
  borderRadius?: string
  marginTop?: string | number
}

export const Skeleton: FC<SkeletonProps> = memo((props) => {
  const {className, height, width, borderRadius, marginTop} = props

  const styles: CSSProperties = {
    height, width, borderRadius, marginTop
  }

  return (
    <div
      style={styles}
      className={classNames(cls.Skeleton, {}, [className])}>
    </div>
  );
});