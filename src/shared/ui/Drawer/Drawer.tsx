import {FC, ReactNode} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import cls from './Drawer.module.scss'
import {memo} from 'react'
import {useTheme} from 'app/providers/ThemeProvider'
import {Portal} from 'shared/ui/Portal/Portal'
import {Overlay} from 'shared/ui/Overlay/Overlay'

interface DrawerProps {
  className?: string;
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
}

export const Drawer: FC<DrawerProps> = memo((props) => {
  const {t} = useTranslation()
  const {
    className,
    children,
    isOpen,
    onClose,
  } = props

  const {theme} = useTheme()

  return (
    <Portal>
      <div className={classNames(cls.Drawer, {[cls.opened]: isOpen}, [theme, className, 'app_drawer'])}>
        <Overlay onClick={onClose} />
        <div className={cls.content}>
          {children}
        </div>
      </div>
    </Portal>
  );
});