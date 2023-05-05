import {CSSProperties, FC, useMemo} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Avatar.module.scss'
import DefImage from 'shared/assets/test/programmer.jpeg'
interface AvatarProps {
  className?: string;
  src?: string | undefined
  size?: number;
  alt?: string
}

export const Avatar: FC<AvatarProps> = (props) => {
  const {
    className,
    src = DefImage,
    size,
    alt
  } = props

  const styles = useMemo<CSSProperties>(() => ({
    width: size || 50,
    height: size || 50
  }), [size])

  return (
    <img
      alt={alt}
      src={src}
      style={styles}
      className={classNames(cls.Avatar, {}, [className])}
    />
  );
};