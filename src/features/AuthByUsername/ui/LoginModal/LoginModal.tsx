import {FC} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './LoginModal.module.scss'
import {Modal} from 'shared/ui/Modal/Modal'
import {LoginForm} from '../LoginForm/LoginForm'

interface LoginModalProps {
  className?: string;
  isOpen: boolean
  onClose: () => void
}

export const LoginModal: FC<LoginModalProps> = (props) => {
  const {
    isOpen,
    onClose
  } = props

  return (
    <Modal
      lazy
      isOpen={isOpen}
      onClose={onClose}
    >
      <LoginForm />
    </Modal>
  );
};