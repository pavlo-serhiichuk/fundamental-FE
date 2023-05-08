import {CSSProperties, FC, useMemo} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Avatar.module.scss'

interface AvatarProps {
  className?: string;
  src?: string | undefined
  size?: number;
  alt?: string
}

export const Avatar: FC<AvatarProps> = (props) => {
  const {
    className,
    src = 'https://t3.ftcdn.net/jpg/05/11/52/90/360_F_511529094_PISGWTmlfmBu1g4nocqdVKaHBnzMDWrN.jpg',
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