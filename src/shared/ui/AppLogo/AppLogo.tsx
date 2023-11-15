import {FC} from 'react'
import {classNames} from '@/shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import cls from './AppLogo.module.scss'
import {memo} from 'react'
import CubeIcon from '@/shared/assets/icons/_cube.svg'
import {Icon} from '@/shared/ui/Icon'

interface AppLogoProps {
  className?: string;
}

export const AppLogo: FC<AppLogoProps> = memo((props) => {
  const {t} = useTranslation()
  const {className} = props

  return (
    <div className={classNames(cls.AppLogo, {}, [className])}>
      <CubeIcon width={100} height={100}/>
    </div>
  );
});