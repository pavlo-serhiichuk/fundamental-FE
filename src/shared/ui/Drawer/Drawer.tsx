import {FC, memo, ReactNode, useCallback, useEffect} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Drawer.module.scss'
import {useTheme} from 'app/providers/ThemeProvider'
import {Portal} from 'shared/ui/Portal/Portal'
import {Overlay} from 'shared/ui/Overlay/Overlay'
import {useModal} from 'shared/lib/hooks/useModal'
import {useAnimationLibs} from 'shared/lib/components/AnimationProvider'

interface DrawerProps {
  className?: string;
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

const height = window.innerHeight - 100

const DrawerContent: FC<DrawerProps> = memo((props) => {
  const {className, children, isOpen, onClose, lazy} = props
  const {isClosing, isMounted, close} = useModal({animationDelay: 300, onClose, isOpen})
  const {theme} = useTheme()

  const {Gesture, Spring} = useAnimationLibs()
  const [{y}, api] = Spring.useSpring(() => ({y: height}))

  const openDrawer = useCallback(() => {
    api.start({y: 0, immediate: false})
  }, [api])

  useEffect(() => {
    isOpen && openDrawer()
  }, [api, isOpen, openDrawer])

  const closeDrawer = (velocity = 0) => {
    api.start({y: height, immediate: false, config: {...Spring.config.stiff, velocity}, onResolve: onClose})
  }


  const bind = Gesture.useDrag(
    ({
       last,
       velocity: [, vy],
       direction: [, dy],
       movement: [, my],
       cancel
     }) => {
      if (my < -70) cancel()

      if (last) {
        if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
          closeDrawer()
        } else {
          openDrawer()
        }
      } else {
        api.start({y: my, immediate: true})
      }
    },
    {from: () => [0, y.get()], filterTaps: true, bounds: {top: 0}, rubberband: true}
  )

  if (lazy && !isMounted) {
    return null
  }

  const display = y.to((py) => (py < height ? 'block': 'none'))

  return (
    <Portal>
      <div className={classNames(cls.Drawer, {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing
      }, [theme, className, 'app_drawer'])}>
        <Overlay onClick={close} />
        <Spring.a.div
          className={cls.sheet}
          style={{display, bottom: `calc(100vh - ${height + 390}px`, y }}
          {...bind()}
        >
          {children}
        </Spring.a.div>
      </div>
    </Portal>
  );
});

export const Drawer = (props: DrawerProps) => {
  const {isLoaded} = useAnimationLibs()

  if (!isLoaded) {
    return null
  }

  return (
    <DrawerContent {...props}/>
  )
}