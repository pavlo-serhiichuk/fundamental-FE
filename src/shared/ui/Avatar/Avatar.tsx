import {CSSProperties, FC, useMemo} from 'react'
import {classNames} from '@/shared/lib/classNames/classNames'
import cls from './Avatar.module.scss'
import {AppImage} from '@/shared/ui/AppImage'
import {Icon} from '@/shared/ui/Icon'
import UserIcon from '@/shared/assets/icons/avatar.svg'
import {Skeleton} from '@/shared/ui/Skeleton'

interface AvatarProps {
  className?: string;
  src?: string | undefined
  size?: number;
  alt?: string
}

export const Avatar: FC<AvatarProps> = (props) => {
  const {
    className,
    src,
    size = 50,
    alt
  } = props

  const styles = useMemo<CSSProperties>(() => ({
    width: size,
    height: size
  }), [size])

  const fallback = <Skeleton width={size} height={size} borderRadius={'50%'} />
  const errorFallback = <Icon width={size} height={size} Svg={UserIcon} />

  return (
    <AppImage
      fallback={fallback}
      errorFallback={errorFallback}
      alt={alt}
      src={src}
      style={styles}
      className={classNames(cls.Avatar, {}, [className])}
    />
  );
};