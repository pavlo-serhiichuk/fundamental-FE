import {FC, memo, useCallback} from 'react'
import {classNames} from '@/shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import cls from './AddCommentForm.module.scss'
import {Input} from '@/shared/ui/Input'
import {Button} from '@/shared/ui/Button'
import {getAddCommentFormError, getAddCommentFormText} from '../../model/selectors/addCommenFormSelectors'
import {useSelector} from 'react-redux'
import {useAppDispatch} from '@/shared/lib/hooks/useAppDispatch'
import {addCommentFormActions, addCommentFormReducer} from '../../model/slice/addCommentFormSlice'
import {DynamicModuleLoader} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {HStack} from '@/shared/ui/Stack'

export interface AddCommentFormProps {
  className?: string;
  onSendComment: (value: string) => void
}

const AddCommentForm: FC<AddCommentFormProps> = memo((props) => {
  const {t} = useTranslation()
  const {className, onSendComment} = props

  const text =  useSelector(getAddCommentFormText)
  const error = useSelector(getAddCommentFormError)
  const dispatch = useAppDispatch()
  const reducers = {
    addCommentForm: addCommentFormReducer
  }
  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value))
  }, [dispatch])

  const onSendHandler = useCallback(() => {
    onSendComment(text || '')
    onCommentTextChange('')
  }, [onCommentTextChange, onSendComment, text])

  return (
    <DynamicModuleLoader reducers={reducers}>
      <HStack
        gap={'8'}
        data-testid="AddCommentForm"
        className={classNames(cls.AddCommentForm, {}, [className])}
      >
        <Input
          value={text}
          className={cls.commentInput}
          onChange={onCommentTextChange}
          placeholder={t("Enter your comment...")}
          data-testid="AddCommentForm.Input"
        />
        <Button
          data-testid="AddCommentForm.Send"
          onClick={onSendHandler}
        >
          {t('Send')}
        </Button>
      </HStack>
    </DynamicModuleLoader>
  );
});

export default AddCommentForm