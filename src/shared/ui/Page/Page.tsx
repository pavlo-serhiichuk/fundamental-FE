import {FC, memo, MutableRefObject, ReactNode, UIEvent, useRef} from 'react'
import {classNames} from '@/shared/lib/classNames/classNames'
import cls from './Page.module.scss'
import {useInfiniteScroll} from '@/shared/lib/hooks/useInfiniteScroll'
import {useSelector} from 'react-redux'
import {useAppDispatch} from '@/shared/lib/hooks/useAppDispatch'
import {uiDetectorActions} from '@/features/UlDetector'
import {useLocation} from 'react-router-dom'
import {useInitialEffect} from '@/shared/lib/hooks/useInitialEffect'
import {getUIScrollByPath} from '@/features/UlDetector/model/selectors/UIDetectorSelectors'
import {StateSchema} from '@/app/providers/StoreProvider'
import {useThrottle} from '@/shared/lib/hooks/useThrottle'
import {TestProps} from '@/app/providers/router/ui/tests'

interface PageProps extends TestProps{
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page: FC<PageProps> = memo((props) => {
  const {className, children, onScrollEnd} = props
  const wrapperRef = useRef() as MutableRefObject<HTMLElement>
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
  const dispatch = useAppDispatch()
  const { pathname } = useLocation()
  const scrollPosition = useSelector((state: StateSchema) => getUIScrollByPath(state, pathname))
  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd
  })

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition
  })

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(uiDetectorActions.setScroll({
      path: pathname,
      position: e.currentTarget.scrollTop
    }))
  }, 1500)

  return (
    <main
      ref={wrapperRef}
      className={classNames(cls.Page, {}, [className])}
      onScroll={onScroll}
      data-testid={props['data-testid'] ?? 'Page'}
    >
      {children}
      {onScrollEnd && <div className={cls.trigger} ref={triggerRef} />}
    </main>
  );
});