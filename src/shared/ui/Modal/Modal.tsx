import React, {FC, ReactNode, useCallback, useEffect, useRef, useState} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Modal.module.scss'
import {Portal} from 'shared/ui/Portal/Portal'
import {useTheme} from 'app/providers/ThemeProvider'

interface ModalProps {
  className?: string;
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

export const Modal: FC<ModalProps> = (props) => {
  const {
    className,
    children,
    isOpen,
    onClose,
    lazy
  } = props

  const [isClosing, setIsClosing] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>()
  const {theme} = useTheme()

  useEffect(() => {
    if(isOpen) {
      setIsMounted(true)
    }
  }, [isOpen])

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true)
      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, 300)
    }
  }, [])

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  const onKeydown: any = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler()
    }
  }, [closeHandler])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeydown)
    }

    return () => {
      clearTimeout(timerRef.current)
      window.removeEventListener('keydown', onKeydown)
    }
  }, [isOpen, onKeydown])


  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  }

  if (lazy && !isMounted) {
    return null
  }

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};