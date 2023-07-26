import {FC, Suspense} from 'react'
import {Modal} from '@/shared/ui/Modal/Modal'
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import {Loader} from '@/shared/ui/Loader/Loader'

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
      <Suspense fallback={<Loader />}>
        <LoginFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
};