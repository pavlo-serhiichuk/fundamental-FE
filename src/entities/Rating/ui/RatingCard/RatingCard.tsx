import {FC, useCallback, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {memo} from 'react'
import {Card} from '@/shared/ui/Card'
import {HStack, VStack} from '@/shared/ui/Stack'
import {Text} from '@/shared/ui/Text'
import {StarRating} from '@/shared/ui/StarRating'
import {Modal} from '@/shared/ui/Modal'
import {Input} from '@/shared/ui/Input'
import {Button, ButtonTheme} from '@/shared/ui/Button'
import {BrowserView, MobileView} from 'react-device-detect'
import {Drawer} from '@/shared/ui/Drawer'

interface RatingCardProps {
  className?: string;
  title?: string
  feedbackTitle?: string
  hasFeedback?: boolean
  onAccept?: (starsCount: number, feedback?: string) => void
  onCancel?: (starsCount: number) => void
  rate?: number
}

export const RatingCard: FC<RatingCardProps> = memo((props) => {
  const {t} = useTranslation()
  const {
    className,
    title,
    feedbackTitle,
    hasFeedback,
    onCancel,
    onAccept,
    rate = 0
  } = props
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [starsCount, setStarsCount] = useState(rate)
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
      <Input data-testid="RatingCard.Input" placeholder={t('Your feedback')} />
    </>
  )

  return (
    <Card className={className} data-testid={"RatingCard"}>
      <VStack align={'center'} gap={'12'}>
        <Text title={starsCount ? t('Thanks for feedback') : title} />
        <StarRating selectedStars={starsCount} size={40} onSelect={onSelectStars} />
      </VStack>
      <BrowserView>
        <Modal isOpen={isModalOpen} lazy>
          <VStack max gap={'32'}>
            {modalContent}
            <HStack gap={'12'} justify={'end'} max>
              <Button data-testid="RatingCard.Close" onClick={cancelHandler} theme={ButtonTheme.OUTLINE_RED}>Close</Button>
              <Button data-testid="RatingCard.Send" onClick={acceptHandler} theme={ButtonTheme.OUTLINE}>Send feedback</Button>
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