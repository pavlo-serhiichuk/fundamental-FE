import {FC, memo, useCallback} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import {Select} from 'shared/ui/Select/Select'
import {Currency} from '../model/types/currency'

interface CurrencyProps {
  className?: string;
  value?: Currency
  onChange?: (value: Currency) => void
  readonly?: boolean
}

const options = [
  {value: Currency.GRN, content: Currency.GRN},
  {value: Currency.USD, content: Currency.USD},
  {value: Currency.EUR, content: Currency.EUR},
]

export const CurrencySelect: FC<CurrencyProps> = memo((props) => {
  const {t} = useTranslation()
  const {
    className,
    value,
    onChange,
    readonly
  } = props

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency)
  }, [onChange])

  return (
    <Select
      readonly={readonly}
      value={value}
      onChange={onChangeHandler}
      label={t('Select currency')}
      options={options}
      className={classNames('', {}, [className])} />
  );
})