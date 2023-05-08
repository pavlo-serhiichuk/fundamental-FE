import {FC, memo, useCallback} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import cls from './AddCommentForm.module.scss'
import {Input} from 'shared/ui/Input/Input'
import {Button} from 'shared/ui/Button/Button'
import {getAddCommentFormError, getAddCommentFormText} from '../../model/selectors/addCommenFormSelectors'
import {useSelector} from 'react-redux'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch'
import {addCommentFormActions, addCommentFormReducer} from '../../model/slice/addCommentFormSlice'
import {DynamicModuleLoader} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

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

  const onSendHandler = () => useCallback(() => {
    onSendComment(text || '')
    onCommentTextChange('')
  }, [onCommentTextChange, onSendComment])

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.AddCommentForm, {}, [className])}>
        <Input
          value={text}
          className={cls.commentInput}
          onChange={onCommentTextChange}
          placeholder={t("Enter your comment...")}
        />
        <Button onClick={onSendHandler}>
          {t('Send')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default AddCommentForm