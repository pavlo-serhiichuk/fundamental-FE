import {FC} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import cls from './Overlay.module.scss'
import {memo} from 'react'

interface OverlayProps {
  className?: string;
  onClick?: () => void
}

export const Overlay: FC<OverlayProps> = memo((props) => {
  const {className, onClick} = props

  return (
    <div onClick={onClick} className={classNames(cls.Overlay, {}, [className])}/>
  );
});