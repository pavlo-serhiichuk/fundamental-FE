import {FC, ReactNode} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import cls from './Drawer.module.scss'
import {memo} from 'react'
import {useTheme} from 'app/providers/ThemeProvider'
import {Portal} from 'shared/ui/Portal/Portal'
import {Overlay} from 'shared/ui/Overlay/Overlay'
import {useModal} from 'shared/lib/hooks/useModal'

interface DrawerProps {
  className?: string;
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

export const Drawer: FC<DrawerProps> = memo((props) => {
  const {t} = useTranslation()
  const {
    className,
    children,
    isOpen,
    onClose,
    lazy
  } = props
  const {
    isClosing,
    isMounted,
    close
  } = useModal({animationDelay: 300, onClose, isOpen})
  const {theme} = useTheme()

  if(lazy && !isMounted) {
    return null
  }

  return (
    <Portal>
      <div className={classNames(cls.Drawer, {[cls.opened]: isOpen, [cls.isClosing]: isClosing}, [theme, className, 'app_drawer'])}>
        <Overlay onClick={close} />
        <div className={cls.content}>
          {children}
        </div>
      </div>
    </Portal>
  );
});