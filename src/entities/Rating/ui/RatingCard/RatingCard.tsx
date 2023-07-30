import {FC, useCallback, useState} from 'react'
import {classNames} from '@/shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import cls from './RatingCard.module.scss'
import {memo} from 'react'
import {Card} from '@/shared/ui/Card/Card'
import {HStack, VStack} from '@/shared/ui/Stack'
import {Text} from '@/shared/ui/Text/Text'
import {StarRating} from '@/shared/ui/StarRating/StarRating'
import {Modal} from '@/shared/ui/Modal/Modal'
import {Input} from '@/shared/ui/Input/Input'
import {Button, ButtonTheme} from '@/shared/ui/Button/Button'
import {BrowserView, MobileView} from 'react-device-detect'
import {Drawer} from '@/shared/ui/Drawer/Drawer'

interface RatingCardProps {
  className?: string;
  title?: string
  feedbackTitle?: string
  hasFeedback?: boolean
  onCancel?: (starsCount: number) => void
  onAccept?: (starsCount: number, feedback?: string) => void
}

export const RatingCard: FC<RatingCardProps> = memo((props) => {
  const {t} = useTranslation()
  const {
    className,
    title,
    feedbackTitle,
    hasFeedback,
    onCancel,
    onAccept
  } = props
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [starsCount, setStarsCount] = useState(0)
  const [feedback, setFeedback] = useState('')

  const onSelectStars = useCallback((selectedStarsCount: number) => {
    setStarsCount(selectedStarsCount)
    if (hasFeedback) {
      setIsModalOpen(true)
    } else {
      onAccept?.(selectedStarsCount)
    }
  }, [hasFeedback, onAccept])

  const acceptHandler = useCallback(() => {
    setIsModalOpen(false)
    onAccept?.(starsCount, feedback)
  }, [feedback, onAccept, starsCount])

  const cancelHandler = useCallback(() => {
    setIsModalOpen(false)
    onCancel?.(starsCount)
  }, [onCancel, starsCount])

  const modalContent = (
    <>
      <Text title={feedbackTitle} />
      <Input placeholder={t('Your feedback')} />
    </>
  )
  console.log('isModalOpen', isModalOpen)
  return (
    <Card className={classNames(cls.RatingCard, {}, [className])}>
      <VStack align={'center'} gap={'12'}>
        <Text title={title} />
        <StarRating size={40} onSelect={onSelectStars} />
      </VStack>
      <BrowserView>
        <Modal isOpen={isModalOpen} lazy>
          <VStack max gap={'32'}>
            {modalContent}
            <HStack gap={'12'} justify={'end'} max>
              <Button onClick={cancelHandler} theme={ButtonTheme.OUTLINE_RED}>Close</Button>
              <Button onClick={acceptHandler} theme={ButtonTheme.OUTLINE}>Send feedback</Button>
            </HStack>
          </VStack>
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer isOpen={isModalOpen} lazy onClose={cancelHandler}>
          <VStack gap={'16'}>
            {modalContent}
            <Button fullWidth onClick={acceptHandler} theme={ButtonTheme.OUTLINE}>
              Send feedback
            </Button>
          </VStack>
        </Drawer>
      </MobileView>
    </Card>
  );
});