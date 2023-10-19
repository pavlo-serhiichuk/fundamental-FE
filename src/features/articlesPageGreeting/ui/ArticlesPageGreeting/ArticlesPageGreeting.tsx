import { useTranslation } from 'react-i18next';
import {memo, useEffect, useState} from 'react';
import {Modal} from '@/shared/ui/Modal'
import {Text} from '@/shared/ui/Text'
import {saveJsonSettings, useJsonSettings} from '@/entities/User'
import {useAppDispatch} from '@/shared/lib/hooks/useAppDispatch'
import {isMobile} from 'react-device-detect'
import {Drawer} from '@/shared/ui/Drawer'

export const ArticlesPageGreeting = memo(() => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] =useState(false)
    const {isArticlesPageWasOpened} = useJsonSettings()
    const dispatch = useAppDispatch()

    useEffect(() => {
        if(!isArticlesPageWasOpened) {
            setIsOpen(true)
            dispatch(saveJsonSettings({isArticlesPageWasOpened: true}))
        }
    }, [])

    const onClose = () => setIsOpen(false)

    const text = (
      <Text
        title={t('hi hi hi!')}
        text={t('glad to see visiting articles page! have a nice trip!')} />
    )

    if(isMobile) {
        return (
          <Drawer lazy isOpen={isOpen} onClose={onClose}>
              {text}
          </Drawer>
        )
    }

    return (
        <Modal lazy isOpen={isOpen} onClose={onClose}>
            {text}
        </Modal>
    );
});