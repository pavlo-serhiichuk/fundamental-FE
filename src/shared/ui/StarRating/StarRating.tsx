import {FC, useState} from 'react'
import {useTranslation} from 'react-i18next'
import cls from './StarRating.module.scss'
import {memo} from 'react'
import { classNames } from '@/shared/lib/classNames/classNames';
import StarRatingIcon from '@/shared/assets/icons/start-rating.svg'
import {Icon} from '@/shared/ui/Icon'

interface StarRatingProps {
  className?: string;
  onSelect?: (starsCount:number) => void
  size?: number
  selectedStars?: number
}
const stars = [1, 2, 3, 4, 5]

export const StarRating: FC<StarRatingProps> = memo((props) => {
  const {t} = useTranslation()
  const {
    className,
    size = 30,
    selectedStars = 0,
    onSelect,
  } = props

  const [isHovered, setIsHovered] = useState(false)
  const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars)
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars))

  const onHover = (starsCount: number) => () => {
    if(!isSelected) {
      setCurrentStarsCount(starsCount)
    }
  }

  const onLeave = () => {
    if(!isSelected) {
      setCurrentStarsCount(0)
    }
  }

  const onClick = (starsCount:number) => () => {
    if(!isSelected) {
      onSelect?.(starsCount)
      setCurrentStarsCount(starsCount)
      setIsSelected(true)
    }
  }

  return (
    <div className={classNames('', {}, [className])}>
      {stars.map(starNumber => (
        <Icon
          key={starNumber}
          Svg={StarRatingIcon}
          width={size}
          height={size}
          className={classNames(cls.starIcon, {
            [cls.hovered]: currentStarsCount >= starNumber,
            [cls.normal]: currentStarsCount <= starNumber,
            [cls.selected]: isSelected
          })}
          onMouseLeave={onLeave}
          onMouseEnter={onHover(starNumber)}
          onClick={onClick(starNumber)}
          data-testid={`StarRating.${starNumber}`}
          data-selected={currentStarsCount >= starNumber}
        />
        ))}
    </div>
  );
});