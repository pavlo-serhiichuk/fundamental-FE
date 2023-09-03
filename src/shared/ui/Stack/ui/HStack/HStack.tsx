import {FC} from 'react'
import {Flex, FlexProps} from '@/shared/ui/Stack'

type HStackProps = Omit<FlexProps, 'direction'>

export const HStack: FC<HStackProps> = (props) => {
  const {} = props

  return (
    <Flex
      direction={'row'}
      {...props}
    />
  );
}