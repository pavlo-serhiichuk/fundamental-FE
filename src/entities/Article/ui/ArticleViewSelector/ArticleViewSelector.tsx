import {FC, memo} from 'react'
import {classNames} from '@/shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import cls from './ArticleViewSelector.module.scss'
import {ArticleView} from '../../model/consts/consts'
import ListIcon from '@/shared/assets/icons/list.svg'
import TileIcon from '@/shared/assets/icons/tile.svg'
import {Button, ButtonTheme} from '@/shared/ui/Button/Button'
import {Icon} from '@/shared/ui/Icon/Icon'

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView
  onViewClick: (view: ArticleView) => void
}

const viewTypes = [
  {
    view: ArticleView.SMALL,
    icon: TileIcon,
    className: 'tile'
  },
  {
    view: ArticleView.BIG,
    icon: ListIcon,
    className: 'list'
  },
]

export const ArticleViewSelector: FC<ArticleViewSelectorProps> = memo((props) => {
  const {t} = useTranslation()
  const {className, view, onViewClick} = props

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView)
  }

  return (
    <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
      {viewTypes.map(viewType => (
        <Button
          key={viewType.view}
          theme={ButtonTheme.CLEAR}
          onClick={onClick(viewType.view)}
          className={cls[viewType.className]}
        >
          <Icon
            Svg={viewType.icon}
            className={classNames('', {[cls.notSelected]: viewType.view !== view})}
          />
        </Button>
      ))}
    </div>
  );
});