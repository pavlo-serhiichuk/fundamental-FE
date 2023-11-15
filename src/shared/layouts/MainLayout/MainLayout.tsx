import {FC, ReactElement} from 'react'
import {classNames} from '@/shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import cls from './MainLayout.module.scss'
import {memo} from 'react'

interface MainLayoutProps {
  className?: string;
  header: ReactElement
  content: ReactElement
  sidebar: ReactElement
  rightBar?: ReactElement
}

export const MainLayout: FC<MainLayoutProps> = memo((props) => {
  const {
    className,
    header,
    content,
    sidebar,
    rightBar,
  } = props

  return (
    <div className={classNames(cls.MainLayout, {}, [className])}>
      <aside className={cls.leftContent}>{sidebar}</aside>
      <main className={cls.content}>{content}</main>
      <aside className={cls.rightContent}>
        <header>{header}</header>
        <div className={cls.rightBar}>{rightBar}</div>
      </aside>
      <div></div>
    </div>
  );
});