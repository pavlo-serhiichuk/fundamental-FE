import {classNames} from '@/shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'
import {Link, LinkProps} from 'react-router-dom'
import {FC, memo} from 'react'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red'
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = memo((props  ) => {

  const {to, className, children, theme = AppLinkTheme.PRIMARY, ...other} = props

  return (
    <Link
      to={to}
      {...other}
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}>
      {children}
    </Link>
  );
});