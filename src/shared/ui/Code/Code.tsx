import {FC, memo, useCallback} from 'react'
import {classNames} from '@/shared/lib/classNames/classNames'
import cls from './Code.module.scss'
import {Button, ButtonTheme} from '@/shared/ui/Button'
import {Icon} from '@/shared/ui/Icon'
import CopyIcon from '@/shared/assets/icons/copy.svg'

interface CodeProps {
  className?: string;
  text: string
}

export const Code: FC<CodeProps> = memo((props) => {
  const {className, text} = props

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text)
  }, [])

  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button onClick={onCopy} className={cls.copyBtn} theme={ButtonTheme.CLEAR}>
        <CopyIcon className={cls.copyIcon}/>
      </Button>
      <code>
      {text}
    </code>
    </pre>
  );
});