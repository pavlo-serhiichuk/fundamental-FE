import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import {useTranslation} from 'react-i18next'
import {Modal} from 'shared/ui/Modal/Modal'
import {useState} from 'react'
import {Button, ButtonSize, ButtonTheme} from 'shared/ui/Button/Button'

interface NavbarProps {
  className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
  const {t} = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onToggleModal = () => {
    setIsAuthModal(prev => !prev)
  }
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        // size={ButtonSize.M}
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={onToggleModal}
        >
        {t('Enter')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At eveniet nesciunt numquam sint. Dolores ducimus eos fugit inventore mollitia possimus quae repellat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, cumque dolorem facilis magni necessitatibus nostrum nulla possimus repellendus sint sit.
      </Modal>
    </div>
  );
};