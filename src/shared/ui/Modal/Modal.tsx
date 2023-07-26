import React, {FC, MutableRefObject, ReactNode, useCallback, useEffect, useRef, useState} from 'react'
import {classNames, Mods} from '@/shared/lib/classNames/classNames'
import cls from './Modal.module.scss'
import {Portal} from '@/shared/ui/Portal/Portal'
import {useTheme} from '@/app/providers/ThemeProvider'
import {Overlay} from '@/shared/ui/Overlay/Overlay'
import {useModal} from '@/shared/lib/hooks/useModal'

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

  const {
    isClosing,
    isMounted,
    close
  } = useModal({animationDelay: 300, onClose, lazy, isOpen})

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  }

  if (lazy && !isMounted) {
    return null
  }

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <Overlay onClick={close} />
          <div className={cls.content}>
            {children}
          </div>
      </div>
    </Portal>
  );
};