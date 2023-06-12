import {FC, memo, useCallback} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import {Select} from 'shared/ui/Select/Select'
import {Country} from '../model/types/country'
import {ListBox} from 'shared/ui/ListBox/ListBox'

interface CountryProps {
  className?: string;
  value?: Country
  onChange?: (value: Country) => void
  readonly?: boolean
}

const options = [
  {value: Country.Ukraine, content: Country.Ukraine},
  {value: Country.Belarus, content: Country.Belarus},
  {value: Country.Georgia, content: Country.Georgia},
  {value: Country.Armenia, content: Country.Armenia},
]


export const CountrySelect: FC<CountryProps> = memo((props) => {
  const {t} = useTranslation()
  const {
    className,
    value,
    onChange,
    readonly
  } = props

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country)
  }, [onChange])

  return (
    <ListBox
      readonly={readonly}
      value={value}
      onChange={onChangeHandler}
      items={options}
      defaultValue={t('Select country')}
      label={t('Select country')}
      className={className}
      direction={'top'}
    />
  );
})