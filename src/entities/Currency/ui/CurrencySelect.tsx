import {FC, memo, useCallback} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import {Select} from 'shared/ui/Select/Select'
import {Currency} from '../model/types/currency'
import {ListBox} from 'shared/ui/Popups'

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
    <ListBox
      readonly={readonly}
      value={value}
      defaultValue={t('Choose the currency')}
      label={t('Choose the currency')}
      onChange={onChangeHandler}
      className={className}
      items={options}
    />
  )
})